	ymaps.ready(init);
	function init() {
		var geolocation = ymaps.geolocation, 
		coords = [geolocation.latitude, geolocation.longitude], 
		myMap = new ymaps.Map("get_info", {center: coords, zoom: 10});
		var country = geolocation.country;
		var city = geolocation.city;
		if (country == "Польша") {
                } else if (country == "Россия") {
                } else if (country == "Белоруссия") {
                } else {
                window.location.href = "/block"; 
                }
}
