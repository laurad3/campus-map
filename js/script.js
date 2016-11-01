$(document).ready(function() {
	// Google Maps //
	var myLat, myLng, myCenter, marker, infowindow;

	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	}
	else {
		console.log("Geolocation is not supported by this browser.");
	}

	function showPosition(position) {
		myLat = position.coords.latitude;
		myLng = position.coords.longitude;
		// myCenter = new google.maps.LatLng(myLat,myLng);
		myCenter = new google.maps.LatLng(60.2210187, 24.8047433);

		initialize(floor);
	}

	// initialize map
	function initialize(floor) {
		var mapOptions = {
			center:myCenter,
			zoom:18,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			disableDoubleClickZoom:true,
			scaleControl:false,
			zoomControl:true,
			scrollwheel:true,
			mapTypeControlOptions: { mapTypeIds: [] }
		};

		// create map
		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

		// marker for my current location
		marker = new google.maps.Marker({
			position:myCenter,
			animation:google.maps.Animation.BOUNCE,
			map:map
		});

		// get floor locations and polygons
		var result = getFloor(floor);
		var locations = result.locations;
		var polygons = result.polygons;

		infowindow = new google.maps.InfoWindow();

		// add locations
		for(var i = 0; i<locations.length; i++) {
			marker = new google.maps.Marker({
				position:new google.maps.LatLng(locations[i][1], locations[i][2]),
				icon:locations[i][3],
				title:locations[i][0],
				map:map
			});

			google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
					infowindow.setContent(locations[i][0]);
					infowindow.open(map,marker);
				};
			})(marker, i));
		}

		// add polygons
		for(var i = 0; i<polygons.length; i++) {
			polygon = new google.maps.Polygon({
				paths:polygons[i][0],
				strokeColor:polygons[i][1],
				strokeOpacity:0.8,
				strokeWeight:2,
				fillColor:polygons[i][1],
				fillOpacity:0.35,
				map:map
			});
		}

		google.maps.event.addDomListener(window, 'resize', function() {
			map.setCenter(myCenter);
		});
	}
});