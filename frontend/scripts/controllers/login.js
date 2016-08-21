'use strict';
angular.module('SED.Login', [])
.controller('LoginCtrl', function LoginCtrl($scope, $window, Auth, $location) {
  $scope.user = {};
  $scope.option = 'Select Type of User';
  $scope.images = {
    'Student': 'images/flat-avatar.png', 
    'Teacher': 'images/teacher-avatar.jpg', 
    'Center': 'images/school-minions.jpg'
  };
  $scope.changeSelect = function () {
  };
  $scope.submit = function() {
    var option = $scope.option;
    if (option === 'Teacher') {
      console.log($scope.user);
      Auth.signinTeacher($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.SEDteacher', token);
        $window.localStorage.setItem('typeOfUser', 'teacher');
        $location.path('/dashboard');
      })
      .catch(function (error) {
        console.error(error);
      });
    } else if (option === 'Student') {
      Auth.signinUser($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.SEDuser', token);
        $window.localStorage.setItem('typeOfUser', 'student');
        $location.path('/dashboard');
      })
      .catch(function (error) {
        console.error(error);
      });
    } else if (option === 'Center') {
      console.log($scope.user);
      Auth.signinCenter($scope.user)
      .then(function(token) {
        $window.localStorage.setItem('com.SEDcenter', token);
        $window.localStorage.setItem('typeOfUser', 'center');
        $location.path('/dashboard');
      })
      .catch(function(error) {
        console.error(error);
      });
    }
  };
});