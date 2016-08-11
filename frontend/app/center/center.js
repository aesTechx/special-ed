angular.module('SED.Centers', [])

.controller('centerController', function ($scope, Services,Auth) {
  $scope.data={};
  $scope.signout=function(){
    Auth.signoutCenter();
  }
});
