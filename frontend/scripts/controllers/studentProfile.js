angular.module('SED.studentProfile', [])
.controller('studentCtrl', function($scope, $state, Auth, Centers, Students, $stateParams) {
  $scope.edit = false;
  $scope.data = {};
  $scope.user = {};
  $scope.teachers = false;
  $scope.record = { social: 0, preservation: 0, communicationAndDevelopment: 0, sensoryDisturbance: 0, attentionAndSafety: 0 };
  var loadLiquidFillGauge, overall, gauge0, gauge1, gauge2, gauge3, gauge4, gauge5;
  
  //Get all centers
  Centers.getAllCenters()
  .then(function(centers) {
    $scope.data.centers = centers;
  });
  //Load center profile according to who is visiting
  if ($stateParams.id) {
    Students.getStudent($stateParams.id)
    .then(function(resp) {
      $scope.data.student = resp;
      if ($scope.data.student.birthdate) {
        $scope.data.student.birthdate.toString();
        $scope.data.student.birthdate = $scope.data.student.birthdate.substr(0, 10);
      } 
    });
  } else {
    Students.getCurrentStudent()
    .then(function(resp) {
      $scope.data.student = resp;
      if ($scope.data.student.birthdate) {
        $scope.data.student.birthdate.toString();
        $scope.data.student.birthdate = $scope.data.student.birthdate.substr(0, 10);
      } 
    });
  }
  $scope.viewTeachers = function() {
    //View student's teachers
    $scope.teachers = true;
    Students.viewTeachers()
    .then(function(resp) {
      $scope.data.teachers = resp;
    });
  };
  $scope.viewGames = function() {
    //View student's games
    Students.viewGames()
    .then(function(resp) {
      $scope.data.teachers = resp;
    });
  };
  $scope.viewRecords = function() {
    //View student's records
    Students.viewRecords()
    .then(function(resp) {
      $scope.data.records = resp;
    });
  };
  $scope.editflag = function() {
    //Edit profile enabled
    $scope.edit = true;
  };
  $scope.teacherflag = function() {
    //View teachers enabled
    $scope.teachers = false;
    $scope.loadGauges;
  };
  $scope.editProfile = function() {
    //Edit student profile
    Students.editProfile($scope.user)
      .then(function(resp) {
        $scope.data.student = resp;
        $scope.data.student.birthdate.toString();
        $scope.data.student.birthdate = $scope.data.student.birthdate.substr(0, 10);
      });
    $scope.edit = false;
  };
  Students.getRecords()
  .then(function(resp) {
    for (var i = 0; i < resp.length; i++) {
      if (resp[i].social !== undefined && 
        resp[i].preservation !== undefined && 
        resp[i].communicationAndDevelopment !== undefined && 
        resp[i].sensoryDisturbance !== undefined && 
        resp[i].attentionAndSafety !== undefined) {
        $scope.record.social = resp[i].social;
        $scope.record.preservation = resp[i].preservation;
        $scope.record.communicationAndDevelopment = resp[i].communicationAndDevelopment;
        $scope.record.sensoryDisturbance = resp[i].sensoryDisturbance;
        $scope.record.attentionAndSafety = resp[i].attentionAndSafety;
      }
    }
    $scope.initialize();
  });
  $scope.initialize = function () {
    //Load d3 gauges using d3 function
    var loadLiquidFillGauge = window.loadLiquidFillGauge;
    var overall = ((($scope.record.social + 
                  $scope.record.preservation + 
                  $scope.record.communicationAndDevelopment + 
                  $scope.record.sensoryDisturbance + 
                  $scope.record.attentionAndSafety)));
    gauge0 = loadLiquidFillGauge('fillgauge0', overall);
    gauge1 = loadLiquidFillGauge('fillgauge1', ((($scope.record.social) / 20) * 100));
    gauge2 = loadLiquidFillGauge('fillgauge2', ((($scope.record.preservation) / 20) * 100));
    gauge3 = loadLiquidFillGauge('fillgauge3', ((($scope.record.communicationAndDevelopment) / 20) * 100));
    gauge4 = loadLiquidFillGauge('fillgauge4', ((($scope.record.sensoryDisturbance) / 20) * 100));
    gauge5 = loadLiquidFillGauge('fillgauge5', ((($scope.record.attentionAndSafety) / 20) * 100));
  };
});