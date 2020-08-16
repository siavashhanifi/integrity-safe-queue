# chat/views.py
from django.shortcuts import render

def index(request):
    return render(request, 'waiting_queue/index.html')

def room(request, room_name):
    return render(request, 'waiting_queue/room.html', {
        'room_name': room_name
    })