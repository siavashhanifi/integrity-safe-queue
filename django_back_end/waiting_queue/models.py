from django.db import models


class QueueEntry(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.TextField()
    room = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __set__(self):
        return self.name

    @staticmethod
    def get_queue(room):
        return QueueEntry.objects.filter(room=room).order_by('timestamp').all()
