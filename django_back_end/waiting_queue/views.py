# chat/views.py
from django.shortcuts import render

def index(request):
    return render(request, 'waiting_queue/index.html')

def room(request, QueueSession):
    return render(request, 'waiting_queue/room.html', {
        'QueueSession': QueueSession
    })