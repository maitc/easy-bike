//se muestra en el div con el id
function initMap(){
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 5, //muestra lvl de profundidad
		center: {lat: -9.1191427, lng: -77.0349046},//contiene longitud y latitud que queremos que se muestre nuestro mapa
		mapTypeControl: false,
		zoomControl: false, 
		streetViewControl: false
	});

	//solo se ejecuta funcionExito cuando el usuario comparte ubicacion y error cuando no.
	function buscar(){
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
		}
	}
	document.getElementById("encuentrame").addEventListener("click", buscar);

	var latitud,longitud;

	//se obtiene latitud o longitud
	var funcionExito = function(posicion){
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;

		var miUbicacion = new google.maps.Marker({
			position: {lat:latitud, lng:longitud},
			animation: google.maps.Animation.DROP,
			map: map
		});

		map.setZoom(17);
		map.setCenter({lat:latitud, lng:longitud});
	}

	//muestra mensaje si falla en busca de la geolocalizacion.
	var funcionError = function(error){
		alert("Tenemos un problema con encontrar tu ubicación");
	}
}