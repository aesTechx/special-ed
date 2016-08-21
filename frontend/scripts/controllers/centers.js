angular.module('SED.centers', [])
	.controller('centersCtr', function centersCtr ($scope, Centers) {
		$scope.data={};
    $scope.markers = [];

		Centers.getAllCenters()
			.then(function(resp){
        console.log(resp)
				$scope.data.centers = resp;
				$scope.data.lat= 0;
        $scope.data.lng=0;

        //create a marker function will be called for each center to dispalay center info on map
        $scope.createMarker = function (center) {
             console.log (center.address)
              var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(center.latitude, center.longitude),
                centerName: center.centername,
                address: center.address,
                icon: "../../images/marker.png"
                // email: center.email
                
              });
              marker.content = '<div class="infoWindowContent">'+ center.centername +'<br>'+ center.address +'<br>'+'</div>';
              google.maps.event.addListener(marker, 'click', function() {
                infoWindow.setContent('<h2 style="color:green;">' + marker.centerName + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
              });
              $scope.markers.push(marker);
        }

        // collecting the lat and lng then devided by the no. of the centers to make the center in the middle of the location of all centers.
        for (i = 0; i < $scope.data.centers.length; i++) {
          if (($scope.data.centers[i].latitude ===0) && ($scope.data.centers[i].longitude===0)){
            $scope.data.lat += 31.971715;
            $scope.data.lng += 35.8355179;
          } else {
            $scope.data.lat += $scope.data.centers[i].latitude;
            $scope.data.lng += $scope.data.centers[i].longitude;
            }
        }
          $scope.data.avglat = $scope.data.lat/$scope.data.centers.length;
          $scope.data.avglng = $scope.data.lng/$scope.data.centers.length;

          var mapOptions = {
              zoom: 12,
              center: new google.maps.LatLng($scope.data.avglat, $scope.data.avglng),
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            
          $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
          var infoWindow = new google.maps.InfoWindow();

          // create a marker for each center
          for (i = 0; i < $scope.data.centers.length; i++) {
              if (($scope.data.centers[i].latitude !==0)&&($scope.data.centers[i].longitude !==0)){
              $scope.createMarker($scope.data.centers[i]);
              }
          }
    
          //display the marker on the map by click on each center marker on on view button on the center list grid
          $scope.openInfoWindow = function(e, selectedMarker) {
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
          }
      })    

      /*list view grid view for the centers:*/
      $(document).ready(function() {
          $('#list').click(function(event){event.preventDefault();$('#centersList .item').addClass('list-group-item');});
          $('#grid').click(function(event){event.preventDefault();$('#centersList .item').removeClass('list-group-item');$('#centersList .item').addClass('grid-group-item');});
      });
	})
