	ymaps.ready(init);
	function init() {
		var geolocation = ymaps.geolocation, 
		coords = [geolocation.latitude, geolocation.longitude], 
		myMap = new ymaps.Map("get_info", {center: coords, zoom: 10});
		var country = geolocation.country;
		var city = geolocation.city;
		if (country == "Польша") {
                } else if (country == "Россия") {
                window.location.href = "/block"; alert(city);
                } else if (country == "Белоруссия") {
                } else if (country == "Белоруссия") {
                } else if (country == "Украина") {
                } else if (country == "Казахстан") {
                } else {
                window.location.href = "/block"; 
                }
}
