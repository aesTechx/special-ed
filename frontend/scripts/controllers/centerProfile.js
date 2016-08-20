angular.module('SED.centerProfile', [])
.controller('centerCtrl', function($scope, $state, Auth, Centers) {
  $scope.edit=false;
  $scope.data = {};
  $scope.center = {};
  Centers.getCurrentCenter()
  .then(function(resp){
    console.log(resp)
    $scope.data.center=resp;
    //if ($scope.data..foundationDate) {
       $scope.data.center.foundationDate.toString();
       $scope.data.center.foundationDate = $scope.data.center.foundationDate.substr(0,10);
    //}
  });
  $scope.viewTeachers = function () {
    Centers.getTeachers()
    .then(function(resp){
      console.log(resp);
      $scope.data.teachers=resp;
    });
    $scope.viewTeachersFlag = true;
    $scope.viewStudentsFlag = false;
  }
  $scope.viewStudents = function () {
    Centers.getStudents()
    .then(function(resp){
      console.log(resp);
      $scope.data.students=resp;
    });
    $scope.viewTeachersFlag = false;
    $scope.viewStudentsFlag = true; 
  }
   $scope.editflag=function(){
    $scope.edit=true;
  }
  $scope.editProfile=function(){
    console.log($scope.center)
    Centers.editProfile($scope.center)
      .then(function(resp){
        console.log(resp)
         $scope.data.center=resp;
         $scope.data.center.foundationDate.toString();
         $scope.data.center.foundationDate=$scope.data.center.foundationDate.substr(0,10);
      });
  $scope.edit=false;
  }
  $scope.getTeachersMenu=function(){
      Centers.getTeachers()
  .then(function(resp){
    console.log(resp);
    $scope.data.menuteachers=resp;
  });
  }
}); 
