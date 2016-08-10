angular.module('SED.Users', [])

.controller('UserController', function ($scope,Auth) {

  $scope.signout=function(){
    Auth.signoutUser();
  }

});
