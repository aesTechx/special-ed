'use strict';
angular.module('SED.Login', [])
.controller('LoginCtrl', function LoginCtrl($scope, $window, Auth, $location) {
  $scope.user = {};
  $scope.images = {
    'Student': 'images/flat-avatar.png', 
    'Teacher': 'images/teacher-avatar.jpg', 
    'Center': 'images/school-minions.jpg'
  };
  $scope.changeSelect = function () {
    $scope.user = {};
  };
  $scope.submit = function() {
    var option = $scope.option;
    if (option === 'Teacher') {
      Auth.signinTeacher($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.SEDteacher', token);
        $location.path('/dashboard');
      })
      .catch(function (error) {
        console.error(error);
      });
    } else if (option === 'Student') {
      Auth.signinUser($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.SEDuser', token);
        $location.path('/dashboard');
      })
      .catch(function (error) {
        console.error(error);
      });
    } else if (option === 'Center') {
      Auth.signinCenter($scope.user)
      .then(function(token) {
        $window.localStorage.setItem('com.SEDcenter', token);
        $location.path('/dashboard');
      })
      .catch(function(error) {
        console.error(error);
      });
    }
  };
});