  ymaps.ready(init);
	function init() {
		var geolocation = ymaps.geolocation, 
		coords = [geolocation.latitude, geolocation.longitude], 
		myMap = new ymaps.Map("get_info", {center: coords, zoom: 10});
		var country = geolocation.country;
		var city = geolocation.city;
		var el = document.getElementById('country');
		if (typeof el.innerText !== 'undefined') {
   el.innerText = country;
  } else {
   el.textContent = country;
  }
		if (country == "undefined") {
                window.location.href = "/error";
                } else if (country == "Россия") { 
                } else if (country == "Польша") {            
                } else if (country == "Беларусь") {
                } else if (country == "Украина") {
                } else if (country == "Казахстан") {
                } else if (country == "Латвия") {
                } else if (country == "Швейцария") {
                } else if (country == "Германия") {
                } else {
                window.location.href = "/block"; 
                }
}
 