'use strict';
angular.module('SED')
.controller('SignupCtrl', function($scope, $location, $window, Auth) {
  $scope.user = {};
  $scope.images = {
    'Student': "images/flat-avatar.png", 
    'Teacher': "images/teacher-avatar.jpg", 
    'Center': "images/school-minions.jpg"
<<<<<<< 3f2147e120f602c6190447d823f060ef6cb3ad2e
  }
    $scope.initialize = function(){
    }
=======
  	}
>>>>>>> Revamp directories to reflect new changes
  	$scope.changeSelect = function (){
      $scope.user = {};
  		console.log('1')
  		if ($scope.option === 'Student') {
	  		$scope.studentSelected = true;
	  		$scope.teacherSelected = false;
	  		$scope.centerSelected = false;
  		} else if ($scope.option === 'Teacher'){
	  		$scope.studentSelected = false;
	  		$scope.teacherSelected = true;
	  		$scope.centerSelected = false;
  		} else if ($scope.option === 'Center'){
	  		$scope.studentSelected = false;
	  		$scope.teacherSelected = false;
	  		$scope.centerSelected = true;
  		}
  	}
<<<<<<< 3f2147e120f602c6190447d823f060ef6cb3ad2e
    $scope.changeProfilePic = function(){
      var uploadToIMGUR = window.uploadToIMGUR;
      var IMGUR_CLIENT_ID = window.IMGUR_CLIENT_ID;
      
      var fileBt = $('<input>').attr('type','file');
      fileBt.on('change', function () {
        var file = fileBt[0].files[0];
        var reader = new FileReader();
        reader.addEventListener('load', function () {
          var imgData = reader.result.slice(23);
          // sending the decoded image to IMGUR to get a link for that image
          uploadToIMGUR(IMGUR_CLIENT_ID, imgData, function(result){
            $scope.profilePicture = result.link;
            $scope.changedFlag = true;
          });
        })
        // using the reader to decode the image to base64
        reader.readAsDataURL(file);
      })
      fileBt.click();
    };
    $scope.submit = function() {
    	var option = $scope.option
=======
    $scope.submit = function() {
    	var option = $scope.option
    	console.log(option, $scope.user)
>>>>>>> Revamp directories to reflect new changes
    	if (option === 'Teacher') {
        Auth.signupTeacher($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.SEDteacher', token);
<<<<<<< 3f2147e120f602c6190447d823f060ef6cb3ad2e
          // $location.path('/teacher');
          $location.path('/dashboard');
=======
          console.log(token)
          // $location.path('/teacher');
>>>>>>> Revamp directories to reflect new changes
        })
        .catch(function (error) {
          console.error(error);
        });
    	} else if (option === 'Student') {
        Auth.signupUser($scope.user)
        .then(function (token) {
            $window.localStorage.setItem('com.SEDuser', token);
<<<<<<< 3f2147e120f602c6190447d823f060ef6cb3ad2e
            $location.path('/dashboard');
=======
            console.log(token)
          // $location.path('/user');
>>>>>>> Revamp directories to reflect new changes
          })
        .catch(function (error) {
          console.error(error);
        });
    	} else if (option === 'Center') {
        Auth.signupCenter($scope.user)
        .then(function(token){
          $window.localStorage.setItem('com.SEDcenter',token);
<<<<<<< 3f2147e120f602c6190447d823f060ef6cb3ad2e
          $location.path('/dashboard');
=======
          console.log(token)
          // $location.path('/center');
>>>>>>> Revamp directories to reflect new changes
        })
        .catch(function(error){
          console.log(error);
        });
    	}
<<<<<<< 3f2147e120f602c6190447d823f060ef6cb3ad2e
=======
    	// $location.path('/dashboard');
>>>>>>> Revamp directories to reflect new changes
    }
});

