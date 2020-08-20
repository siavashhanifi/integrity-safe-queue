import json
from channels.generic.websocket import WebsocketConsumer
from asgiref.sync import async_to_sync

queues = {}

class QueueConsumer(WebsocketConsumer):

    def fetch_queue(self, data):
        print('fetch')
        queue = queues[self.room_group_name] if self.room_group_name in queues else []
        content = {
            'queue': self.queue_to_json(queue)
        }
        self.send_queue_entries(content)

    def queue_to_json(self, queue):
        result = []
        for queuee in queue:
            result.append(self.queuee_to_json(queuee))
        return result

    def queuee_to_json(self, queuee):
        return {
            'name':queuee,
        }


    def new_entry(self, data):
        print('new entry')
        name = data['name']
        if self.room_group_name not in queues:
            queues[self.room_group_name] = []
        queues[self.room_group_name].append(name)

        content = {
            'command': 'new_entry',
            'queue': [self.queuee_to_json(name)]
        }
        return self.send_queue_entry(content)

    commands = {
        'fetch_queue': fetch_queue,
        'new_entry': new_entry,
    }

    def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'queue_%s' % self.room_name

        # Join room group
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, close_code):
        # Leave room group
        async_to_sync(self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        ))

    # Receive queue entry from WebSocket
    def receive(self, text_data):
        data = json.loads(text_data)
        self.commands[data['command']](self, data)

    def send_queue_entry(self, data):
        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'queue_entry',
                'queue': data
            }
        )

    def send_queue_entries(self, queue):
        self.send(text_data=json.dumps(queue))

    def queue_entry(self, event):
        queue = event['queue']

        # Send queue entry to WebSocket
        self.send(text_data=json.dumps(queue))
