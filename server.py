from flask import Flask, render_template
from musicmagic import *

app = Flask(__name__)

artist0 = "psy"
song0 = "gangnam style"

artist1 = "blackpink"
song1 = "whistle"

@app.route('/')
def index():
  return render_template('template.html')

@app.route('/my-link/')
def my_link():
  print ('I got clicked!')
  x = getArtistImage(artist0)

  return x

if __name__ == '__main__':
  app.run(debug=True)