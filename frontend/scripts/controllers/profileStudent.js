angular.module('SED.student', [])
.controller('studentController', function($scope, $location, $window, Auth,Centers,Teachers,Students){
	$scope.data={};
	Students.getCurrentStudent().then(function(resp){
		$scope.data.student=resp.data;
	});
	Centers.getAllCenters().then(function(resp){
		$scope.data.centers=resp.data;
	});
	Teachers.getAllTeachers().then(function(resp){
		$scope.data.teachers=resp.data;
	});
});