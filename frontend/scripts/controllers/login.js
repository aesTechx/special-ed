'use strict';
angular.module('SED.Login', [])
.controller('LoginCtrl', function LoginCtrl($scope, $window, Auth, $location) {
  $scope.user = {};
  $scope.option = 'Select Type of User';
  $scope.submit = function() {
    var option = $scope.option;
    Auth['signin' + $scope.option]($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.SEDuser', token);
        $window.localStorage.setItem('typeOfUser', $scope.option.toLowerCase());
        $location.path('/dashboard');
      })
      .catch(function (error) {
        console.error(error);
      });
    }
});
