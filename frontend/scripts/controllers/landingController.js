angular.module('SED.landing', [])
  .controller('landingController', function landingController ($scope, Centers) {
    $scope.data = {};
    Centers.getAllCenters()
      .then (function (resp) {
        $scope.data.centers = resp;
      });
      /*list view grid view for the centers:*/
    $(document).ready (function () {
      $('.carousel').carousel();
      $('#list').click (function (event) { event.preventDefault (); $('#centersList .item').addClass ('list-group-item'); } );
      $('#grid').click (function (event) { event.preventDefault (); $('#centersList .item').removeClass ('list-group-item'); $('#centersList .item').addClass ('grid-group-item'); } );
    });
  });