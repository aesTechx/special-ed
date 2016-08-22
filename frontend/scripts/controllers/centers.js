angular.module('SED.centers', [])
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://maps.googleapis.com/maps/api/**']);
  })
	.controller('centersCtr', function centersCtr ($scope, Centers, ApiKeys) {
    $scope.data = {};
    $scope.markers = [];
    Centers.getAllCenters()
    .then(function(resp){
      $scope.data.centers = resp;
      $scope.data.lat= 0;
      $scope.data.lng=0;
      // for (var i = 0; i < $scope.data.centers.length; i++) {
      //   $scope.data.centers[i].image = $scope.data.centers[i].profilePicture || "../../images/school-minions.jpg";
      // }
      //create a marker function will be called for each center to dispalay center info on map
      $scope.createMarker = function (center) {
        var marker = new google.maps.Marker ( {
          map: $scope.map,
          position: new google.maps.LatLng (center.latitude, center.longitude),
          centerName: center.centername,
          address: center.address,
          icon: '../../images/marker.png'
        });
        marker.content = '<div class="infoWindowContent">' + center.centername + '<br>' + center.address + '<br>' + '</div>';
        google.maps.event.addListener (marker, 'click', function () {
          infoWindow.setContent ('<h2 style="color:green;">' + marker.centerName + '</h2>' + marker.content );
          infoWindow.open ($scope.map, marker);
        } );
        $scope.markers.push (marker);
      };

      // collecting the lat and lng then devided by the no. of the centers to make the center in the middle of the location of all centers.
      for (i = 0; i < $scope.data.centers.length; i++) {
        if ( ($scope.data.centers[i].latitude === 0) && ($scope.data.centers[i].longitude === 0) ) {
          $scope.data.lat += 31.971715;
          $scope.data.lng += 35.8355179;
        } else {
          $scope.data.lat += $scope.data.centers[i].latitude;
          $scope.data.lng += $scope.data.centers[i].longitude;
        }
      }
      $scope.data.avglat = $scope.data.lat / $scope.data.centers.length;
      $scope.data.avglng = $scope.data.lng / $scope.data.centers.length;

      var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng ($scope.data.avglat, $scope.data.avglng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
          
      $scope.map = new google.maps.Map (document.getElementById ('map'), mapOptions);
      var infoWindow = new google.maps.InfoWindow ();

      // create a marker for each center
      for (i = 0; i < $scope.data.centers.length; i++) {
        if ( ($scope.data.centers[i].latitude !== 0) && ($scope.data.centers[i].longitude !== 0) ) {
          $scope.createMarker ($scope.data.centers[i]);
        }
      }
      
      $scope.currentPosition = function() {
        $scope.currentPos = {};
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            $scope.currentPos.latitude = position.coords.latitude;
            $scope.currentPos.longitude = position.coords.longitude;
            console.log($scope.currentPos)
            var marker2 = new google.maps.Marker ( {
              map: $scope.map,
              position: new google.maps.LatLng ($scope.currentPos.latitude, $scope.currentPos.longitude),
              animation: google.maps.Animation.BOUNCE,
              icon: '../../images/youAreHere.png'
            });
          }); 
        } else {
          // Browser doesn't support Geolocation
          alert('your browser does not support the geolocation');
        };
      };
        
        // Display current position of the user
        $(document).ready (function () {
          $scope.currentPosition();
        });
        
        //display the marker on the map by click on each center marker on on view button on the center list grid
      $scope.openInfoWindow = function (e, selectedMarker) {
        e.preventDefault();
        google.maps.event.trigger (selectedMarker, 'click');
      };
    });    
});
