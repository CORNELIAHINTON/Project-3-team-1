from musicmagic import *
from flask import Flask, jsonify, request, render_template,url_for


app = Flask(__name__)


"""
search_sim_artist(artist0)
search_sim_artist(artist1)

search_artist_bio(artist0)
search_artist_bio(artist1)

main_circles_v2(artist0, artist1)
main_bars(artist0, artist1)

main_songs(artist0, song0, artist1, song1)

main_artists(artist0, artist1)
"""

@app.route("/")
def home():
    return render_template("practice.html")


@app.route("/api/<artist>/<title>")
def main_circles_v2js(artist0, artist1):
    return makeCircleGraph(makeCircle(artist0, artist1))

# @app.route("/api/<artist>/<title>")
# def climate_precip():
#     return data
#
# @app.route("/api/<artist>/<title>")
# def climate_precip():
#     return data


if __name__ == "__main__":
    app.run(debug=True)