angular.module('SED.landing', [])
	.controller('landingController', function landingController ($scope, Centers) {
		$scope.data={};

		Centers.getAllCenters()
			.then(function(resp){
				$scope.data.centers = resp;
      })



      /*list view grid view for the centers:*/
      $(document).ready(function() {
          $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
          $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
      });
	});