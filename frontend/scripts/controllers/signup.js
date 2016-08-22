'use strict';
angular.module('SED.Signup', [])
.controller('SignupCtrl', function SignupCtrl ($scope, $location, $window, Auth, Centers, ApiKeys) {
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
    var fileBt = $('<input>').attr('type', 'file');
    fileBt.on('change', function () {
      var file = fileBt[0].files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        var imgData = reader.result.slice(23);
        ApiKeys.getImgurApi()
        .then(function (resp) {
          console.log(resp)
          $scope.imgurApi = resp;
          var IMGUR_CLIENT_ID = $scope.imgurApi;
          uploadToIMGUR(IMGUR_CLIENT_ID, imgData, function(result) {
            $scope.profilePicture = result.link;
            console.log($scope.profilePicture)
            $scope.changedFlag = true;
          });
        })
        // sending the decoded image to IMGUR to get a link for that image      
      });
      // using the reader to decode the image to base64
      reader.readAsDataURL(file);
    });
    fileBt.click();
  };
  $scope.submit = function() {
    var option = $scope.option;
    $scope.user.center = $scope.center;
    var sendRequest = function () {
      Auth['signup' + $scope.option]($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.SEDuser', token);
        $window.localStorage.setItem('typeOfUser', $scope.option.toLowerCase());
        $location.path('/dashboard');
      })
      .catch(function (error) {
        console.error(error);
      });
    }
     if (option === 'Center') {
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
      setTimeout(function(){ sendRequest(); },4000);
    } else {
      sendRequest();
    }
  }
  $scope.changeSelect1=function(){
    console.log($scope.option1);
    $scope.center=$scope.option1.center;
    console.log($scope.center)
  }
});

