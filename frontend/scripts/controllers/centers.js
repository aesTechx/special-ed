angular.module('SED.centers', [])
	.controller('centersCtr', function centersCtr ($scope, Centers) {
		$scope.data={};
    $scope.markers = [];

		Centers.getAllCenters()
			.then(function(resp){
				$scope.data.centers = resp;
				//console.log($scope.data.centers)
				$scope.data.lat= 0;
        $scope.data.lng=0;

        $scope.createMarker = function (center) {
            // console.log (center.latitude)
             console.log (center.address)

              var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(center.latitude, center.longitude),
                centerName: center.centername,
                address: center.address
                //phone: center.phone
              });
              marker.content = '<div class="infoWindowContent">'+ center.centername +'<br>'+ center.address +'<br>'+'</div>';
              google.maps.event.addListener(marker, 'click', function() {
                infoWindow.setContent('<h2>' + marker.centerName + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
              });
              // if marker 
              $scope.markers.push(marker);
         }

          //$scope.data.mapCenter={}

          for (i = 0; i < $scope.data.centers.length; i++) {
                //console.log($scope.data.centers[i].latitude);
                $scope.data.lat += $scope.data.centers[i].latitude;
                // console.log($scope.data.lat)
                //console.log($scope.data)
                $scope.data.lng += $scope.data.centers[i].longitude;
                
                // $scope.createMarker($scope.data.centers[i]);
                //console.log($scope.data.centers[i].latitude)
          }
          $scope.data.avglat = $scope.data.lat/$scope.data.centers.length;
          $scope.data.avglng = $scope.data.lng/$scope.data.centers.length;
          console.log($scope.data.avglat);

          var mapOptions = {
              zoom: 12,
              center: new google.maps.LatLng(/*31.971715, 35.8355179*/$scope.data.avglat, $scope.data.avglng),
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            
          $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
          var infoWindow = new google.maps.InfoWindow();

          for (i = 0; i < $scope.data.centers.length; i++) {
              $scope.createMarker($scope.data.centers[i]);
          }
    
          $scope.openInfoWindow = function(e, selectedMarker) {
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
          }
          // console.log($scope.markers[0].centerName)
})    



/*list view grid view for the centers:*/

        $(document).ready(function() {
            $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
            $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
        });

/**/


	})
