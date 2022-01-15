from flask import Flask, jsonify, render_template, request
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('template.html')


# @app.route('/SomeFunction')
# def SomeFunction():
#     print('In SomeFunction')
#     return "hello world"


if __name__ == '__main__':
   app.run()