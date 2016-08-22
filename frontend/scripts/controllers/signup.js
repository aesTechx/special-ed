'use strict';
angular.module('SED.Signup', [])
.controller('SignupCtrl', function SignupCtrl ($scope, $location, $window, ApiKeys, Auth, Centers) {
  $scope.data={};
  $scope.option1 = {};
  $scope.option1.center = 'Select Center';
  $scope.option = 'Select Type of User';

  ApiKeys.getImgurApi()
  .then(function (resp) {
    console.log(resp)
    $scope.imgurApi = resp;
  })
  Centers.getAllCenters()
  .then(function(centers){
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
    console.log("changeProfilePic");
    var uploadToIMGUR = window.uploadToIMGUR;
    var IMGUR_CLIENT_ID = $scope.imgurApi;

    var fileBt = $('<input>').attr('type', 'file');
    console.log(fileBt)
    fileBt.on('change', function () {
      console.log("change")
      var file = fileBt[0].files[0];
      console.log("file",file)
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        var imgData = reader.result.split(',');
        // sending the decoded image to IMGUR to get a link for that image
        uploadToIMGUR(IMGUR_CLIENT_ID, imgData[1], function(result) {
          console.log(result)
          $scope.user.profilePicture = result.link;
          console.log($scope.user.profilePicture);
          $scope.changedFlag = true;
        });
      });
      // using the reader to decode the image to base64
      reader.readAsDataURL(file);
    });
    fileBt.click();
  };
  $scope.submit = function() {
    //console.log($scope.user);
    console.log($scope.user.profilePicture)
    var option = $scope.option;
    $scope.user.center = $scope.center;
    var sendRequest = function () {
      Auth['signup'+$scope.option]($scope.user)
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

