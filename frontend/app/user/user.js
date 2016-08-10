angular.module('SED.Users', [])

<<<<<<< 882801aedffcd30b1c522dc5539a7c321b6bf8ed
.controller('UserController', function ($scope,Auth) {

  $scope.signout=function(){
    Auth.signoutUser();
  }

});
