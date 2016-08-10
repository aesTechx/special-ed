// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('SED.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signinUser = function () {
    Auth.signinUser($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.SEDuser', token);
        $location.path('/user');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signinCenter = function(){
    Auth.signinCenter($scope.user)
      .then(function(token){
        $window.localStorage.setItem('com.SEDcenter',token);
        $location.path('/center');
      })
      .catch(function(error){
        console.error(error);
      });
  };

   $scope.signinTeacher = function () {
    Auth.signinTeacher($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.SEDteacher', token);
        console.log(token)
        $location.path('/teacher');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signupUser = function () {
    Auth.signupUser($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.SEDuser', token);
        $location.path('/user');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signupCenter = function(){
    Auth.signupCenter($scope.user)
     .then(function(token){
       $window.localStorage.setItem('com.SEDcenter',token);
       $location.path('/center');
     })
     .catch(function(error){
        console.log(error);
     });
  };

    $scope.signupTeacher = function () {
    Auth.signupTeacher($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.SEDteacher', token);
        $location.path('/teacher');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});