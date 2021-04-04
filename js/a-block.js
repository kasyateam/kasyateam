ymaps.ready(init);
    function init() {
      var geolocation = ymaps.geolocation,
        coords = [geolocation.latitude, geolocation.longitude],
        myMap = new ymaps.Map("get_info", { center: coords, zoom: 10 });
      var country = geolocation.country;
      var city = geolocation.city;
      if (country != "Россия") {
      window.location.href = "/block";
     }
}
