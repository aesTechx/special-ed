angular.module('SED.teacherProfile', [])
.controller('teacherCtrl', function($scope, $state, Teachers, Students) {
  $scope.edit=false;
  $scope.data={};
  $scope.user={};
  Teachers.getCurrentTeacher()
  .then(function(resp){
    $scope.data.teacher=resp;
  });
  $scope.viewStudents=function(){
  	Teachers.viewStudents()
  	.then(function(resp){
  		$scope.data.students=resp;
  	});
  }
 });