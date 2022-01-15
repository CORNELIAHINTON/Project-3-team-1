#Load libraries/import dependencies
import musicmagic as mm
from flask import Flask, jsonify, request, render_template,url_for

# Setup configuration for flask app
app = Flask(__name__)

# Create routes
#Web route
@app.route("/")
def home():
    return render_template("practice.html")

#API route(s)
# @app.route("/api/<artist>/<title>")
# def climate_precip():
#      # Create our session (link) from Python to the DB
#     q=engine.execute("select * from sharks;").all()
#
#     raw_data=[list (row) for row in q]
#     #return jsonify (sharks = raw_data)
#
#     #q_df=pd.DataFrame(raw_data,columns=["id","case_number","date","year","type","country","area","location","activity","name","sex","age","injury","fatal_y_n","time","species","investigator","pdf","original_order"])
#     #return q_df.to_json()
#     data={
#         "id":[r[0] for r in raw_data],
#         "case_number":[r[1] for r in raw_data]
#     }
#     return data




# Run the application
if __name__ == "__main__":
    app.run(debug=True)