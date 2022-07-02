
let latitude, longitude, destination;

$(document).ready(function () {
	alert("Please allow the device to know your location!")
	initGeolocation();
})

function initGeolocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success);
	}
	else {
		alert("Sorry, your browser does not support geolocation services.");
	}
}

$(function () {
	$("#navigate-button").click(function () {
		window.location.href = `ar_weather.html?source=${latitude};${longitude}&destination=${destination[1]};${destination[0]}`
	})
})

function success(position) {
	longitude = position.coords.longitude;
	latitude = position.coords.latitude

	// Initializing Mapbox
	mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

	var map = new mapboxgl.Map({
		container: 'map',
		style: 'mapbox://styles/mapbox/streets-v11',
		center: [longitude, latitude],
		zoom: 4
	});

	map.addControl(
		new MapboxGeocoder({
			accessToken: mapboxgl.accessToken,
			mapboxgl: mapboxgl
		}).on('result', function (e) {
			destination = e.result.center
		})
	);

	var img1 = document.querySelector("#amber")

	// Create a Amber Palace, Jaipur Marker and add it to the map.
	var marker1 = new mapboxgl.Marker({
		element: img1
	})
		.setLngLat([-112.125092, 36.056595])
		.addTo(map);

	var img2 = document.querySelector("#gateway")
	// Create a  Gateway of India, Mumbai Marker and add it to the map.
	var marker2 = new mapboxgl.Marker({
		element: img2
	})
		.setLngLat([-77.050636,38.889248 ])
		.addTo(map);

	var img3 = document.querySelector("#gate")
	// Create a India Gate Marker and add it to the map.
	var marker3 = new mapboxgl.Marker({
		element: img3
	})
		.setLngLat([-74.044502,40.689247])
		.addTo(map);


	var img4 = document.querySelector("#lotus")

	// Create a Lotus Temple, Delhi Marker and add it to the map.
	var marker4 = new mapboxgl.Marker({
		element: img4
	})
		.setLngLat([-77.035278, 38.889484])
		.addTo(map);


	//Create a Victoria Memorial, Kolkata Marker and add it to the map.
	var img5 = document.querySelector("#victoria")

	var marker5 = new mapboxgl.Marker({
		element: img5
	})
		.setLngLat([-122.478255, 37.819929])
		.addTo(map);
}