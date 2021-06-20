ymaps.ready(init);
function unblock() {
  if (true) {
    alert('test')
  } else {
    alert('not test')
  }
}
	function init() {
		var geolocation = ymaps.geolocation, 
		coords = [geolocation.latitude, geolocation.longitude], 
		myMap = new ymaps.Map("get_info", {center: coords, zoom: 10});
		var country = geolocation.country;
		var city = geolocation.city;
		var map = window.location.pathname;
		var post = document.getElementById('country');
		if (typeof post.innerText !== 'undefined') {
   post.innerText = country;} 
   else {}
   if (country == undefined) {
                window.location.href = "/error";
                } else if (country == "Рsоссия") { 
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
