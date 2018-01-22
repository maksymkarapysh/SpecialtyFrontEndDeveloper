window.onload = function() {
  var address = document.getElementsByClassName("input__address")[0];
  
  address.addEventListener("change", function(e) {
    var addressV = address.value,
        lat, long;
    if (addressV) {
      // используем API Google Maps для геокодирования адреса
      // настраиваем объект Geocoder
      var geocoder = new google.maps.Geocoder();

      // возвращаем координаты
      geocoder.geocode({ 'address': addressV }, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
              if (results[0]) {
                  // выводим результаты на экран 
                  lat = results[0].geometry.location.lat();
                  long = results[0].geometry.location.lng();
                  updatePosition(lat, long);
              } else {
                  error('Google не возвратил результатов.');
              }
          } else {
              error("Геокодирование завершилось ошибкой - " + status);
          }
      });
    }
    else {
        error('Пожалуйста, введите адрес');
    }

    function updatePosition(lat, long) {
      // задание координат.
      var position = new google.maps.LatLng(lat, long);

      // параметры для карты.
      var options = {
          zoom: 15,
          center: position, // позиция на карте
          mapTypeId: google.maps.MapTypeId.ROADMAP // тип карты - ROADMAP, SATELLITE, HYBRID and TERRAIN
      };
      // объект карты.
      var map = new google.maps.Map(document.getElementById("map"), options);

      // маркер на карте
      var marker = new google.maps.Marker({
          position: position,
          map: map,
          title: "Это Вы!"
      });

      // объект всплывающей подсказки.

    }
  });
}