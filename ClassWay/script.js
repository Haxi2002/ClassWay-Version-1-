let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
const databaseRef = firebase.database().ref('locations');

databaseRef.on('value', (snapshot) => {
  const locations = snapshot.val();
  displayLocations(locations);
});

function displayLocations(locations) {
  Object.keys(locations).forEach((key) => {
    const location = locations[key];
    const marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: location.name,
    });
  });
}
