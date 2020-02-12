function myMap() {
  var centerLoc = { lat: 42.719610, lng: -84.489090 };

  var green = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
  var blue = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  var orange = 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
  var red = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'

  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 5, center: centerLoc });

  // Look up region code biasing with geocoder
  var markMSU = new google.maps.Marker({ position: { lat: 42.719610, lng: -84.489090 }, map: map, icon: green });
  var markCle = new google.maps.Marker({ position: { lat: 41.499321, lng: -81.694359 }, map: map, icon: red });
  var markCan = new google.maps.Marker({ position: { lat: 21.161907, lng: -86.851524 }, map: map, icon: orange });
  var markNY = new google.maps.Marker({ position: { lat: 40.712776, lng: -74.005974 }, map: map, icon: orange });
  var markAt = new google.maps.Marker({ position: { lat: 33.748550, lng: -84.391502 }, map: map, icon: orange });
  var markVan = new google.maps.Marker({ position: { lat: 49.282730, lng: -123.120735 }, map: map, icon: orange });
  var markTor = new google.maps.Marker({ position: { lat: 43.666667, lng: -79.416667 }, map: map, icon: orange });
  var markChi = new google.Maps.Marker({ position: { lat: 41.8781, lng: 87.6298 }, map: map, icon: orange });
  var markVie = new google.maps.Marker({ position: { lat: 48.2082, lng: 16.3738 }, map: map, icon: orange });
  var markDen = new google.maps.Marker({ position: { lat: 55.6761, lng: 12.5683 }, map: map, icon: orange });
  var markHun = new google.maps.Marker({ position: { lat: 47.4979, lng: 19.0402 }, map: map, icon: orange });
  var markRom = new google.maps.Marker({ position: { lat: 44.4268, lng: 26.1025 }, map: map, icon: orange });
  var markSwi = new google.maps.Marker({ position: { lat: 47.3769, lng: 8.5417 }, map: map, icon: orange });
  var markGer = new google.maps.Marker({ position: { lat: 48.1351, lng: 11.5820 }, map: map, icon: orange });
  var markFlo = new google.maps.Marker({ position: { lat: 25.7617, lng: 80.1918 }, map: map, icon: orange });
}