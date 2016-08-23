'use strict';
angular.module('SED.Login', [])
.controller('LoginCtrl', function LoginCtrl($scope, $window, Auth, $location) {
  $scope.user = {};
  $scope.option = 'Select Type of User';
  $scope.resetPass = false;
  $scope.reset = {};
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
  $scope.forgotPass = function () {
    $scope.resetPass = !$scope.resetPass;
  }
  $scope.resetPassword = function () {
    Auth['requestPass' + $scope.option]($scope.reset.email)
    .then(function(result){
      if(result.status === 201){
        $scope.msg = 'Please Check Your Email!';
      } else {
        $scope.msg = 'Wrong Email!';
      }
    })
    .catch(function(error){
      $scope.msg = 'Wrong Email!';
    });    
  }
});
