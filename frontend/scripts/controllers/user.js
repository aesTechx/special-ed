angular.module('SED', [])

.controller('UserController', function ($scope,Auth) {

  $scope.signout=function(){
    Auth.signoutUser();
  }
});
