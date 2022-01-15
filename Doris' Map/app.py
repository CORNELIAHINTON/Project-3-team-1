
from flask import Flask,render_template,jsonify
from flask_pymongo import PyMongo,MongoClient

app=Flask(__name__)

app.config["MONGO_URI"] ="mongodb://localhost:27017/BillboardAwards"
mongo=PyMongo(app)


@app.route('/')
def main():
    return render_template('flask.html')

@app.route('/first',methods=['GET'])
def first_two_year():
    
    features=[]
    locations=mongo.db.first_two.find({})
    # print(locations)
    for Alllocation in locations:
        
        features.append({
             
             
                 "coordinates":list(map(float,Alllocation['location'].split(","))),
                 "WinnerAwards":Alllocation['WinnerAward'],
                 "ArtistName":Alllocation['ArtistName'],
                 "Hometown":Alllocation['Hometown']
                
             
            
    })
     
    return jsonify(features)



if __name__=="__main__":
    app.debug=True
    app.run()

