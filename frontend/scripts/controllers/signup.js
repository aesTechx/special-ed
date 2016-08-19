'use strict';
angular.module('SED.Signup', [])
.controller('SignupCtrl', function SignupCtrl ($scope, $location, $window, Auth, Centers) {
  $scope.data={};
  $scope.option1 = {};
  $scope.option1.center = 'Select Center';
  $scope.option = 'Select Type of User';
  Centers.getAllCenters()
  .then(function(centers){
    console.log(centers);
    $scope.data.centers=centers;
  });
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
    $scope.user.center = $scope.center;
    console.log($scope.user.center)
    if (option === 'Teacher') {
      Auth.signupTeacher($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.SEDteacher', token);
        $window.localStorage.setItem('typeOfUser', 'teacher');
        $location.path('/dashboard');
      })
      .catch(function (error) {
        console.error(error);
      });
    } else if (option === 'Student') {
      Auth.signupStudent($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.SEDuser', token);
        $window.localStorage.setItem('typeOfUser', 'student');
        $location.path('/dashboard');
      })
      .catch(function (error) {
        alert(error.data.split("<br>")[0]);
      });
    } else if (option === 'Center') {
      /*center location*/
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            $scope.user.latitude= position.coords.latitude;
            $scope.user.longitude= position.coords.longitude;
            
          }); 
        } else {
          // Browser doesn't support Geolocation
          alert('your browser does not support the geolocation');
        }

      console.log($scope.user)
      setTimeout(function(){  Auth.signupCenter($scope.user)
      .then(function(token) {
        $window.localStorage.setItem('com.SEDcenter', token);
        $window.localStorage.setItem('typeOfUser', 'center');
        $location.path('/dashboard');
      })
      .catch(function(error) {
        console.log(error);
      });},4000)
    
    }
  };
  $scope.changeSelect1=function(){
    console.log($scope.option1);
    $scope.center=$scope.option1.center;
    console.log($scope.center)
  }
});

