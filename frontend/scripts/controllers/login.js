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
    	console.log(option)
    	if (option === 'Teacher') {
    		console.log("inside Teacher")
    		Auth.signinTeacher($scope.user)
			.then(function (token) {
				$window.localStorage.setItem('com.SEDteacher', token);
				$location.path('/dashboard');
			})
			.catch(function (error) {
				console.error(error);
			});
    	} else if (option === 'Student') {
    		console.log('inside student');
    		Auth.signinUser($scope.user)
			.then(function (token) {
				$window.localStorage.setItem('com.SEDuser', token);
				$location.path('/dashboard');
			})
			.catch(function (error) {
				console.error(error);
			});
    	} else if (option === 'Center') {
    		console.log('inside center')
			Auth.signinCenter($scope.user)
			.then(function(token){
				$window.localStorage.setItem('com.SEDcenter',token);
				$location.path('/dashboard');
			})
			.catch(function(error){
				console.error(error);
			});
    	}
  };
});