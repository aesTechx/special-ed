'use strict';
angular.module('SED')
.controller('SignupCtrl', function($scope, $location, $window, Auth) {
  $scope.user = {};
  $scope.images = {
    'Student': "images/flat-avatar.png", 
    'Teacher': "images/teacher-avatar.jpg", 
    'Center': "images/school-minions.jpg"
  	}
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
    $scope.submit = function() {
    	var option = $scope.option
    	console.log(option, $scope.user)
    	if (option === 'Teacher') {
        Auth.signupTeacher($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.SEDteacher', token);
          console.log(token)
          // $location.path('/teacher');
        })
        .catch(function (error) {
          console.error(error);
        });
    	} else if (option === 'Student') {
        Auth.signupUser($scope.user)
        .then(function (token) {
            $window.localStorage.setItem('com.SEDuser', token);
            console.log(token)
          // $location.path('/user');
          })
        .catch(function (error) {
          console.error(error);
        });
    	} else if (option === 'Center') {
        Auth.signupCenter($scope.user)
        .then(function(token){
          $window.localStorage.setItem('com.SEDcenter',token);
          console.log(token)
          // $location.path('/center');
        })
        .catch(function(error){
          console.log(error);
        });
    	}
    	// $location.path('/dashboard');
    }
});

