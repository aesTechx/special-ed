angular.module('SED.centers', [])
	.controller('centersCtr', function centersCtr ($scope, Centers) {
		$scope.data={};
    //$scope.markers = [];

		Centers.getAllCenters()
			.then(function(resp){
				$scope.data.centers = resp;
				//console.log($scope.data.centers)
				$scope.data.centers.center={};
				for (i = 0; i < $scope.data.centers.length; i++) {
			        $scope.data.centers.center.lat += $scope.data.centers[i].lat;
			        $scope.data.centers.center.lng += $scope.data.centers[i].lng;
			        createMarker($scope.data.centers[i]);
			      }
			    /*$scope.data.mapCenter.lat = $scope.data.center.lat/$scope.data.centers.length
			    $scope.data.mapCenter.lng = $scope.data.center.lng/$scope.data.centers.length*/
		})
	var mapOptions = {
      zoom: 12,
      center: new google.maps.LatLng(31.971715, 35.8355179/*$scope.data.mapCenter.lat, $scope.data.mapCenter.lng*/),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
  $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
  var infoWindow = new google.maps.InfoWindow();


  var createMarker = function(center) {
      var marker = new google.maps.Marker({
        map: $scope.map,
        position: new google.maps.LatLng(center.lat, center.lng),
        centerName: center.centername,
        //address: center.address,
        //phone: center.phone
      });
      marker.content = '<div class="infoWindowContent">'+ center.fullName /*+'<br>'+ center.address +'<br>'+ center.phoneNumber */+'</div>';

      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent('<h2>' + marker.centerName + '</h2>' + marker.content);
        infoWindow.open($scope.map, marker);
      });
      // if marker 
      //$scope.markers.push(marker);

    }
    $scope.openInfoWindow = function(e, selectedMarker) {
      e.preventDefault();
      google.maps.event.trigger(selectedMarker, 'click');
    }

	})
