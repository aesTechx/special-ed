angular.module('SED.centerProfile', [])
.controller('centerCtrl', function($scope, $state, Auth, Centers, Students) {
  $scope.edit=false;
  $scope.assignFlag=false;
  $scope.selectedTeacher="";
  $scope.selectedStudent="";
  $scope.assignOne=false;
  $scope.studentselected=false;
  $scope.teacherselected=false;
  $scope.data = {};
  $scope.center = {};
  Centers.getCurrentCenter()
  .then(function(resp){
    console.log(resp)
    $scope.data.center=resp;
    if ($scope.data.foundationDate !== undefined) {
       $scope.data.center.foundationDate.toString();
       $scope.data.center.foundationDate = $scope.data.center.foundationDate.substr(0,10);
    }
  });
  $scope.viewTeachers = function () {
    Centers.getTeachers()
    .then(function(resp){
      $scope.data.teachers=resp;
    });
    $scope.viewTeachersFlag = true;
    $scope.viewStudentsFlag = false;
  }
  $scope.viewStudents = function () {
    Centers.getStudents()
    .then(function(resp){
      $scope.data.students=resp;
    });
    $scope.viewTeachersFlag = false;
    $scope.viewStudentsFlag = true; 
  }
   $scope.editflag=function(){
    $scope.edit=true;
  }
  $scope.editProfile=function(){
    Centers.editProfile($scope.center)
      .then(function(resp){
         $scope.data.center=resp;
         $scope.data.center.foundationDate.toString();
         $scope.data.center.foundationDate=$scope.data.center.foundationDate.substr(0,10);
      });
  $scope.edit=false;
  }
  $scope.getTeachersMenu=function(){
      Centers.getTeachers()
  .then(function(resp){
    $scope.data.menuteachers=resp;
  });
  }
  $scope.assign=function(){
    $scope.assignFlag=true;
    $scope.viewTeachers();
    console.log($scope.data.teachers)
    $scope.viewStudents();
    console.log($scope.data.students)
    $scope.viewStudentsFlag=false;
    $scope.viewStudentsFlag=false;
    //$scope.teachers=[{"teachername":"eshraq"},{"teachername":"ahmad"}];
  }
  $scope.clickedstudent=function(index){
    $scope.selectedStudent=$scope.data.students[index];
    if($scope.studentselected===false){
         $scope.studentselected=true;
    }else{
      $scope.studentselected=false;
    }
    if($scope.studentselected===true && $scope.teacherselected===true){
      $scope.assignOne=true;
    }else{
      $scope.assignOne=false;
    }
  }
   $scope.clickedteacher=function(index){
    $scope.selectedTeacher=$scope.data.teachers[index];
    if($scope.teacherselected===false){
         $scope.teacherselected=true;
    }else{
      $scope.teacherselected=false;
    }
     if($scope.studentselected===true && $scope.teacherselected===true){
      $scope.assignOne=true;
    }else{
      $scope.assignOne=false;
    }
  }
  $scope.assignTeacher=function(){
      $scope.studentselected=false;
      $scope.teacherselected=false;
      $scope.assignOne=false;
    Students.addTeacher({"teacherId":$scope.selectedTeacher._id,"studentId":$scope.selectedStudent._id})
    .then(function(resp){
      console.log(resp);
    });
  }
}); 
