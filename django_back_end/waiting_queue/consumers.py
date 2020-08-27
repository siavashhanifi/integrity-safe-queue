import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync

queues = {}

class QueueConsumer(WebsocketConsumer):

    def fetch_queue(self, data=None):
        """
        Fetches the current queue for a specific QueueSession and sends it to the requesting client.
        """
        print('fetch')
        queue = queues[self.QueueSessionName] if self.QueueSessionName in queues else []
        content = {
            'queue': self.queue_to_json(queue)
        }
        self.send(text_data=json.dumps(content))

    def queue_to_json(self, queue):
        """
        Formats queue to json format
        :param queue: Queuee in array order by their entry time
        :return: Queue in json format
        """
        result = []
        for queuee in queue:
            result.append(self.queuee_to_json(queuee))
        return result

    def queuee_to_json(self, queuee):
        """
        Formats Queuee to json format
        :param queuee: Queuee
        :return: Queuee in json format
        """
        return {
            'name':queuee,
        }


    def new_entry(self, data):
        """
        Processes new Queuee entry in Queue
        :param data: Information about the entry
        :return: Broadcasts the new entry to all clients in the same group.
        """
        print('new entry')
        name = data['name']
        # Create queue for QueueSession if it doesn't exist
        if self.QueueSessionName not in queues:
            queues[self.QueueSessionName] = []
        queues[self.QueueSessionName].append(name)

        content = {
            'command': 'new_entry',
            'queue': [self.queuee_to_json(name)]
        }
        return self.send_queue_entry(content)

    # Valid commands from client
    commands = {
        'fetch_queue': fetch_queue,
        'new_entry': new_entry,
    }

    def connect(self):
        """
        Handle new client connection.
        Add the client to the QueueSession and send the current queue
        :return:
        """
        self.QueueSession = self.scope['url_route']['kwargs']['QueueSession']
        self.QueueSessionName = 'queue_%s' % self.QueueSession

        # Join QueueSession
        async_to_sync(self.channel_layer.group_add)(
            self.QueueSessionName,
            self.channel_name
        )
        self.accept()
        # Send the current queue to new connections
        self.fetch_queue()

    def disconnect(self, close_code):
        """
        Handle disconnections.
        Removes the client from the group.
        :param close_code:
        :return:
        """
        async_to_sync(self.channel_layer.group_discard(
            self.QueueSessionName,
            self.channel_name
        ))

    def receive(self, text_data):
        """
        Handle commands from client
        :param text_data:
        :return:
        """
        data = json.loads(text_data)
        self.commands[data['command']](self, data)

    def send_queue_entry(self, data):
        """
        Send an array of new queue entries to the clients connected to the QueueSession.
        :param data:
        :return:
        """
        async_to_sync(self.channel_layer.group_send)(
            self.QueueSessionName,
            {
                'type': 'queue_entry',
                'queue': data
            }
        )

    def queue_entry(self, event):
        """
        Sends a queue entry
        :param event:
        :return:
        """
        queue = event['queue']
        self.send(text_data=json.dumps(queue))
