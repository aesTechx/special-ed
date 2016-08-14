'use strict';
angular.module('SED.Signup', [])
.controller('SignupCtrl', function SignupCtrl ($scope, $location, $window, Auth) {
  $scope.user = {};
  $scope.images = {
    'Student': 'images/flat-avatar.png', 
    'Teacher': 'images/teacher-avatar.jpg', 
    'Center': 'images/school-minions.jpg'
  };
  $scope.initialize = function() {
  };
  $scope.changeSelect = function () {
    $scope.user = {};
    console.log('1');
    if ($scope.option === 'Student') {
      $scope.studentSelected = true;
      $scope.teacherSelected = false;
      $scope.centerSelected = false;
    } else if ($scope.option === 'Teacher') {
      $scope.studentSelected = false;
      $scope.teacherSelected = true;
      $scope.centerSelected = false;
    } else if ($scope.option === 'Center') {
      $scope.studentSelected = false;
      $scope.teacherSelected = false;
      $scope.centerSelected = true;
    }
  };
  $scope.changeProfilePic = function() {
    var uploadToIMGUR = window.uploadToIMGUR;
    var IMGUR_CLIENT_ID = window.IMGUR_CLIENT_ID;
    
    var fileBt = $('<input>').attr('type', 'file');
    fileBt.on('change', function () {
      var file = fileBt[0].files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        var imgData = reader.result.slice(23);
        // sending the decoded image to IMGUR to get a link for that image
        uploadToIMGUR(IMGUR_CLIENT_ID, imgData, function(result) {
          $scope.profilePicture = result.link;
          $scope.changedFlag = true;
        });
      });
      // using the reader to decode the image to base64
      reader.readAsDataURL(file);
    });
    fileBt.click();
  };
  $scope.submit = function() {
    var option = $scope.option;
    if (option === 'Teacher') {
      Auth.signupTeacher($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.SEDteacher', token);
        $location.path('/dashboard');
      })
      .catch(function (error) {
        console.error(error);
      });
    } else if (option === 'Student') {
      Auth.signupUser($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.SEDuser', token);
        $location.path('/dashboard');
      })
      .catch(function (error) {
        console.error(error);
      });
    } else if (option === 'Center') {
      Auth.signupCenter($scope.user)
      .then(function(token) {
        $window.localStorage.setItem('com.SEDcenter', token);
        $location.path('/dashboard');
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  };
});

