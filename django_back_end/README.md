# Django backend

## Installation

### For development

Start a redis server on port 6379, by running the following command:

>docker run -p 6379:6379 -d redis:5

Start django server:

>python manage.py runserver

Go to http://`server url`/queue/ (typically your localhost on socket 8000 http://127.0.0.1:8000/queue/) to test interact with the server from a client. 