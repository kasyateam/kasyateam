	ymaps.ready(init);
	function init() {
		var geolocation = ymaps.geolocation, 
		coords = [geolocation.latitude, geolocation.longitude], 
		myMap = new ymaps.Map("get_info", {center: coords, zoom: 10});
		var country = geolocation.country;
		var city = geolocation.city;
		if (country == "undefined") {
                window.location.href = "/error";
                } else if (country == "Россия") {
                } else if (country == "Польша") {            
                } else if (country == "Белорусь") {
                } else if (country == "Украина") {
                } else if (country == "Казахстан") {
                } else {
                window.location.href = "/block"; alert(country);
                }
}
