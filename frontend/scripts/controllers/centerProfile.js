angular.module('SED.centerProfile', [])
.controller('centerCtrl', function($scope, $state, Auth, Centers, Students, $stateParams) {
  $scope.edit = false;
  $scope.assignFlag = false;
  $scope.selectedTeacher = '';
  $scope.selectedStudent = '';
  $scope.assignOne = false;
  $scope.studentselected = false;
  $scope.teacherselected = false;
  $scope.data = {};
  $scope.center = {};
  // if the requested profile is from the owner of the profile or from a viewer
  // load profile data
  if ($stateParams.id) {
    Centers.getCenter($stateParams.id)
    .then(function(resp) {
      $scope.data.center = resp;
      if ($scope.data.foundationDate !== undefined) {
        $scope.data.center.foundationDate.toString();
        $scope.data.center.foundationDate = $scope.data.center.foundationDate.substr(0, 10);
      }
    });
  } else {
    Centers.getCurrentCenter()
    .then(function(resp) {
      $scope.data.center = resp;
      if ($scope.data.foundationDate !== undefined) {
        $scope.data.center.foundationDate.toString();
        $scope.data.center.foundationDate = $scope.data.center.foundationDate.substr(0, 10);
      }
    });
  }
  $scope.viewTeachers = function () {
    //Get center's teachers
    Centers.getTeachers()
    .then(function(resp) {
      $scope.data.teachers = resp;
    });
    $scope.viewTeachersFlag = true;
    $scope.viewStudentsFlag = false;
  };
  $scope.viewStudents = function () {
    //Get center's students
    Centers.getStudents()
    .then(function(resp) {
      $scope.data.students = resp;
    });
    $scope.viewTeachersFlag = false;
    $scope.viewStudentsFlag = true; 
  };
  $scope.editflag = function() {
    //In edit mode
    $scope.edit = true;
  };
  $scope.editProfile = function() {
    //send edited data to backend
    Centers.editProfile($scope.center)
      .then(function(resp) {
        $scope.data.center = resp;
        $scope.data.center.foundationDate.toString();
        $scope.data.center.foundationDate = $scope.data.center.foundationDate.substr(0, 10);
      });
    $scope.edit = false;
  };
  $scope.getTeachersMenu = function() {
    //view center's teachers
    Centers.getTeachers()
    .then(function(resp) {
      $scope.data.menuteachers = resp;
    });
  };
  $scope.assign = function() {
    //Assign students and teachers together
    $scope.assignFlag = true;
    $scope.viewTeachers();
    $scope.viewStudents();
    $scope.viewStudentsFlag = false;
    $scope.viewStudentsFlag = false;
  };
  $scope.clickedstudent = function(index) {
    //select student for assigning
    $scope.selectedStudent = $scope.data.students[index];
    if ($scope.studentselected === false) {
      $scope.studentselected = true;
    } else {
      $scope.studentselected = false;
    }
    if ($scope.studentselected === true && $scope.teacherselected === true) {
      $scope.assignOne = true;
    } else {
      $scope.assignOne = false;
    }
  };
  $scope.clickedteacher = function(index) {
    //Select teacher for assigning
    $scope.selectedTeacher = $scope.data.teachers[index];
    if ($scope.teacherselected === false) {
      $scope.teacherselected = true;
    } else {
      $scope.teacherselected = false;
    }
    if ($scope.studentselected === true && $scope.teacherselected === true) {
      $scope.assignOne = true;
    } else {
      $scope.assignOne = false;
    }
  };
  $scope.assignTeacher = function() {
    //Assign teacher to student
    $scope.studentselected = false;
    $scope.teacherselected = false;
    $scope.assignOne = false;
    Students.addTeacher({
      'teacherId': $scope.selectedTeacher._id,
      'studentId': $scope.selectedStudent._id
    })
    .then(function(resp) {
      console.log(resp);
    });
  };
}); 