angular.module('SED.teacherProfile', [])
.controller('teacherCtrl', function($scope, $state, Teachers, Students, $stateParams) {
  $scope.edit=false;
  $scope.data={};
  $scope.user={};
  $scope.initialize = function () {
    if ($stateParams.id) {
      Teachers.getTeacher($stateParams.id)
      .then(function(resp){
        $scope.data.teacher = resp;
      })
    } else {
      Teachers.getCurrentTeacher()
      .then(function(resp){
        $scope.data.teacher = resp;
      });
    }
  }
  $scope.initialize();
  $scope.viewStudents=function(){
  	Teachers.viewStudents()
  	.then(function(resp){
  		$scope.data.students=resp;
  	});
  }
 });