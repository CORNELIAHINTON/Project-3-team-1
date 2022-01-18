var baseMap=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var defaultMaps = {
    "Street Map": baseMap,
};

//var L = window.L;
let firstTwoYear=new L.layerGroup()
var firstData=[]
d3.json("data.json").then((firstData)=>{
    console.log(firstData);
    console.log(firstData.data);
    //console.log(firstData.data.length);

     for (var i=0; i < firstData.data.length; i++){
        let data=firstData.data[i];
        var geo=data.location;
        console.log(geo);
         
        L.marker(geo).bindPopup(`<h1>${firstData.data[i].ArtistName}</h1> <hr> <h3> ${firstData.data[i].WinnerAward}</h3><br>
              ${firstData.data[i].Hometown}`).addTo(firstTwoYear);
        
    };
    firstTwoYear.addTo(myMap);
});

    
let secondTwoYear=new L.layerGroup()
var secondData=[]
d3.json("dataOneyear.json").then((secondData)=>{
    console.log(secondData);
    console.log(secondData.data);
    
    for (var i=0; i < secondData.data.length; i++){
        let second_data=secondData.data[i];
        let Secondgeo=second_data.location;
        console.log(Secondgeo);
        
        L.marker(Secondgeo).bindPopup(`<h1>${secondData.data[i].ArtistName}</h1> <hr> <h3> ${secondData.data[i].WinnerAward}</h3><br>
               ${secondData.data[i].Hometown}`).addTo(secondTwoYear);
    };
    secondTwoYear.addTo(myMap);
});  
   
// var icons = {
//     secondTwoYear: L.ExtraMarkers.icon({
//        icon: "ion-settings",
//        iconColor: "white",
//        markerColor: "yellow",
//        shape: "star"
//     }),
// };    


var myMap = L.map("map", {
      center: [34.0522, -118.2437],
      zoom: 3,
      layers:[baseMap]
});

var overlays = {
    "2020 & 2021 Billboard Music Awards": firstTwoYear,
    "2015 & 2016 Billboard Music Awards": secondTwoYear,
  };

L.control.layers(baseMap,overlays).addTo(myMap);

























