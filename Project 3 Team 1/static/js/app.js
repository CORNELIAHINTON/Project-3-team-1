 // to pull the Artist bio and name

//  d3.selectAll("#submitid").on("click", function() {
//     const bio_url = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="
//     const api = "&api_key=f176fecb47457c92d85bf87fa002bc12&format=json"
//     var Artist1Name = document.getElementById("Artist1Name").value;
//     var Artist2Name = document.getElementById("Artist2Name").value;
//     console.log(Artist1Name)
//     console.log(Artist2Name)
//     let bio_query1 = bio_url + Artist1Name + api
//     let bio_query2 = bio_url + Artist2Name + api
//     console.log(query1)
//     console.log(query2)
//     // Fetch the JSON data and console log it
//     d3.json(bio_query1).then((data) => {
//         let bio1 = data['artist']['bio']['content']
//         //console.log(bio1)
//         d3.select("Artist1Bio").text(bio1)
//     });
//     d3.json(bio_query2).then((data) => {
//     let bio2 = data[artist][bio][content]
//     //console.log(bio2)
//     d3.select("Artist2Bio").text(bio2)
//     })
// });

// initialize page



//look for something with the ID of submitid
d3.select("#submitid").on("click", function() {
    // API CALLS FOR ARTIST IMAGE
    // artist 1
    let name1 = d3.select("#Artist1Name").property("value")
    d3.json("/api/getartistimage/" + name1).then(response => {
        console.log(response)
        d3.select("#Artist1Pic").attr("src", response.image)
    })
    //artist 2
    let name2 = d3.select("#Artist2Name").property("value")
    d3.json("/api/getartistimage/" + name2).then(response => {
        console.log(response)
        d3.select("#Artist2Pic").attr("src", response.image)
    })

    // API CALL FOR ARTIST BIO
    const bio_url = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="
    const api = "&api_key=f176fecb47457c92d85bf87fa002bc12&format=json"

    //artist 1
    d3.json(bio_url + name1 + api).then(response => {
        console.log(response)
        let bio1 = response['artist']['bio']['content']
        d3.select('#Artist1Bio').text(bio1)
    })
    // artist 2
    d3.json(bio_url + name2 + api).then(response => {
        console.log(response)
        let bio2 = response['artist']['bio']['content']
        d3.select('#Artist2Bio').text(bio2)
    })

    // API CALL FOR ALBUM PLAY COUNTS
    
    // ARTIST 1

    // ARTIST 2

    //API CALL FOR  TOP 5 SONGS (BUBBLE CHART)

    //API CALL FOR SIMILAR ARTISTS

    // API CALL FOR SIMILAR SONGS 

    //API CALL FOR SIMILAR GENRES (IF APPLICABLE)
})



