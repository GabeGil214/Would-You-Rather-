import time
from flask import Flask

app = Flask(__name__)

@app.route('/users')
def get_current_time():
    return {'time': time.time()}


@app.route('/questions')
def get_current_time():
    return {'time': time.time()}


@app.route('/time')
def get_current_time():
    return {'time': time.time()}