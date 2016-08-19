angular.module('SED.centerProfile', [])
.controller('centerCtrl', function($scope, $state, Auth, Centers) {
  $scope.edit=false;
  $scope.data={};
  $scope.user={};
  
  Centers.getCurrentCenter()
  .then(function(resp){
    console.log(resp)
    $scope.data.center=resp;
  });
  Centers.getTeachers()
  .then(function(resp){
    console.log(resp);
    $scope.data.teachers=resp;
  });
  Centers.getStudents()
  .then(function(resp){
    console.log(resp);
    $scope.data.students=resp;
  });
}); 
