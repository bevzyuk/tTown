function loadMap() {
			
            var mapOptions = {
               center:new google.maps.LatLng(50.45,30.523333),
               zoom:13,
               mapTypeId:google.maps.MapTypeId.ROADMAP
            };
				
            var map = new google.maps.Map(document.getElementById("sample"),mapOptions);
            
            var marker = new google.maps.Marker({
               position: new google.maps.LatLng(50.4102576,30.6156543),
               map: map,
            });

            var infowindow = new google.maps.InfoWindow({
               content: "We are living here!!",
            });

           

           //Zoom to 7 when clicked on marker
            google.maps.event.addListener(marker,'click',function() {
               map.setZoom(14);
               map.setCenter(marker.getPosition());
               infowindow.open(map, marker);
            });
}