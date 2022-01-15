
// to pull the Artist bio and name
d3.selectAll("submit").on("click", function() {
    const bio_url = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="
    const api = "&api_key=f176fecb47457c92d85bf87fa002bc12&format=json"
    var Artist1Name = document.getElementById("Artist1Name").value;
    var Artist2Name = document.getElementById("Artist2Name").value;
    console.log(Artist1Name)
    console.log(Artist2Name)
    let bio_query1 = bio_url + Artist1Name + api
    let bio_query2 = bio_url + Artist2Name + api
    console.log(query1)
    console.log(query2)
    // Fetch the JSON data and console log it
    d3.json(bio_query1).then((data) => {
        let bio1 = data['artist']['bio']['content']
        //console.log(bio1)
        d3.select("Artist1Bio").text(bio1)
    });
d3.json(bio_query2).then((data) => {
    let bio2 = data[artist][bio][content]
    //console.log(bio2)
    d3.select("Artist2Bio").text(bio2)
    })
});

