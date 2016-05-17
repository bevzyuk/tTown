var styles = [
    {
      stylers: [
        { hue: "#00ffe6" },
        { saturation: -20 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];


var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});
function loadMap() {
			
            var mapOptions = {
               center:new google.maps.LatLng(50.45,30.523333),
               zoom:13,
               mapTypeControlOption: {
               mapTypeId:[google.maps.MapTypeId.ROADMAP,'map_style']
                    }
            };
				
            var map = new google.maps.Map(document.getElementById("sample"),mapOptions);
            

            map.mapTypes.set("map_style", styledMap);
            map.setMapTypeId("map_style");

            /*
                  add some marker
            */

            var marker = new google.maps.Marker({
               position: new google.maps.LatLng(50.4102576,30.6156543),
               map: map,
            });

            var firstMeet = new google.maps.Marker({
               position: new google.maps.LatLng(50.4487674,30.5118484),
               map: map,
            });

            var coffeRainig = new google.maps.Marker({
               position: new google.maps.LatLng(50.462513,30.4800016),
               map: map,
            });
            var georgianRestoraunt = new google.maps.Marker({
               position: new google.maps.LatLng(50.4456063,30.4999284),
               map: map,
            });

            /*
               add info about marker
            */
            var infocoffe = new google.maps.InfoWindow({
               content: "Тут ми пили каву під зонтом",
            })

             var infowin = new google.maps.InfoWindow({
               content: "Place were we're first met :)",
            })

            var infowindow = new google.maps.InfoWindow({
               content: "We are living here!!",
            });
            var restoraunt = new google.maps.InfoWindow({
               content: "Самий крутий грузинський ресторан Києва",
            });

            /*
               Show info at the map
            */
           infowin.open(map,firstMeet);
           infocoffe.open(map,coffeRainig);
           restoraunt.open(map,georgianRestoraunt);

           //Zoom to 7 when clicked on marker
            google.maps.event.addListener(marker,'click',function() {
               map.setZoom(14);
               map.setCenter(marker.getPosition());
               infowindow.open(map, marker);
            });
}