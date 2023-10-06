function initMap() {
  var zoomLevel = window.innerWidth >= 320 ? 18 : 8;

  map = new google.maps.Map(document.getElementById("map"), {
    mapId: "e4514553f3d1075f",
    center: { lat: 34.66689739381201, lng: 135.43089353558094 },
    zoom: zoomLevel,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });

  const markers = [
    [
      "Toad's House",
      34.66669734177897,
      135.430905487556,
      "images/mushroom.png",
      35,
      35,
    ],
    [
      "1 Up!",
      34.66767112713121,
      135.4297887322531,
      "images/1upmushroom.png",
      50, 50
    ],
    [
      "Watch out!",
      34.66832715150856,
      135.43292762674864,
      "images/carnivorous-plant.png",
      50, 50
    ],
    [
      "Cha-Ching",
      34.66775608022106,
      135.43139547897843,
      "images/coins.png",
      50, 50
    ],
    [
      "Get to the Castle!",
      34.66771495075431, 
      135.43244858694666,
      "images/castle.png",
      50, 50
    ],
    [
      "Power Up!",
      34.667690176421715, 
      135.42839340459992,
      "images/star.png",
      35,
      35,
    ],
    [
      "Its'a Me!",
      34.66730927009777, 
      135.42954933864291,
      "images/mario.png",
      35,
      35,
    ]
  ];

  for (let i = 0; i<markers.length; i++) {
    const currMarker = markers[i];
  
    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map,
      title: currMarker[0],
      icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
      },
      animation: google.maps.Animation.DROP,
    });
  
    const infowindow = new google.maps.InfoWindow({
      content: currMarker[0],
    });
    
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }
}