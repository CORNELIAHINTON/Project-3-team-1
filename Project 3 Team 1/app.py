#Load libraries/import dependencies
from distutils.command.config import config
from musicmagic import *
from flask import Flask, jsonify, request, render_template,url_for
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func


# Setup configuration for flask app
app = Flask(__name__)


# connect to database
#engine = create_engine(f"postgresql://postgres:{db_password}@127.0.0.1:5432/???")


# Create routes
#Web route
@app.route("/")
def home():
    return render_template("practice.html")

#API route(s)
@app.route("/api/getartistinfo/<artist>")
def get_artist_image_js(artist):
    info = {
        "image": getArtistImage(artist), 
        "bio":"Canadian" #search_artist_bio(artist)
        }
    return jsonify(info)

# #search_sim_artist(artist0)
# #search_sim_artist(artist1)
# @app.route("/api/<artist>/<title>")
# def search_sim_artist_js(artist):
#     return search_sim_artist(artist)
    

# #search_artist_bio(artist0)
# #search_artist_bio(artist1)
# @app.route("/api/<artist>/<title>")
# def search_artist_bio_js(artist):
#     return search_artist_bio(artist)  


# #main_circles_v2(artist0, artist1)
# #main_bars(artist0, artist1)
# @app.route("/api/<artist>/<title>")
# def main_circles_v2_js(artist0, artist1):
#     return main_circles_v2(artist0, artist1)

# #main_bars(artist0, artist1)
# #main_bars(artist0, artist1)
# @app.route("/api/<artist>/<title>")
# def main_bars_js(artist0, artist1):
#     return main_bars(artist0, artist1)


# #main_songs(artist0, song0, artist1, song1)
# @app.route("/api/<artist>/<title>")
# def main_songs_js(artist0, song0, artist1, song1):
#     return main_songs(artist0, song0, artist1, song1)


# #main_artists(artist0, artist1)
# @app.route("/api/<artist>/<title>")
# def main_artists_js(artist0, artist1):
#     return main_artists(artist0, artist1)





# Run the application
if __name__ == "__main__":
    app.run(debug=True)