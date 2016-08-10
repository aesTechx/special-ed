'use strict';
angular.module('SED')
  .controller('LoginCtrl', function($scope, $location, $window, Auth) {
  	$scope.user = {};
  	$scope.images = {
  		'Student': "images/flat-avatar.png", 
  		'Teacher': "images/teacher-avatar.jpg", 
  		'Center': "images/school-minions.jpg"
  	}
  	$scope.changeSelect = function (){
      $scope.user = {};
  	}
    $scope.submit = function() {
    	var option = $scope.option
    	console.log(option, $scope.user)
    	if (option === 'Teacher') {
    		Auth.signinTeacher($scope.user)
			.then(function (token) {
				console.log(token)
				$window.localStorage.setItem('com.SEDteacher', token);
				// $location.path('/teacher');
			})
			.catch(function (error) {
				console.error(error);
			});
    	} else if (option === 'Student') {
    		Auth.signinUser($scope.user)
			.then(function (token) {
				console.log(token)

				$window.localStorage.setItem('com.SEDuser', token);
				// $location.path('/user');
			})
			.catch(function (error) {
				console.error(error);
			});
    	} else if (option === 'Center') {
			Auth.signinCenter($scope.user)
			.then(function(token){
				console.log(token)

				$window.localStorage.setItem('com.SEDcenter',token);
				// $location.path('/center');
			})
			.catch(function(error){
				console.error(error);
			});
    	}
    	$location.path('/dashboard');
    }
})
