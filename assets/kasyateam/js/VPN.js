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
			 window.location.href = "/block"; 
                } else if (country == "Польша") {   
			 window.location.href = "/block"; 
                } else if (country == "Беларусь") {
			 window.location.href = "/block"; 
                } else if (country == "Украина") {
			 window.location.href = "/block"; 
                } else if (country == "Казахстан") {
			 window.location.href = "/block"; 
                } else if (country == "Латвия") {
			 window.location.href = "/block"; 
                } else if (country == "Швейцария") {
			 window.location.href = "/block"; 
                } else if (country == "Германия") {
                } else {
                window.location.href = "/block"; 
                }
}
