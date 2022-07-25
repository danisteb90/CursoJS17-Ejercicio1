let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: posicion,
  });

  markers = new google.maps.Marker({
    position: {lat:47.45343238337697, lng: -122.30354354813488},
    map: map,
    title: "Seattle",
  });

  markers = new google.maps.Marker({
    position: {lat:-0.1839198557160126, lng: -78.4845062187114},
    map: map,
    title: "Quito",
  });

  markers = new google.maps.Marker({
    position: {lat:36.97126020318288, lng: 30.63628733809114},
    map: map,
    title: "Turquía",
  });

}