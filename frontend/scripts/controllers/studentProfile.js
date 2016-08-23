angular.module('SED.studentProfile', [])
.controller('studentCtrl', function($scope, $state, Auth, Centers, Students) {
 $scope.edit = false;
 $scope.data = {};
 $scope.user = {};
 $scope.teachers = false;
 $scope.record = { social: 0, preservation: 0, communicationAndDevelopment: 0, sensoryDisturbance: 0, attentionAndSafety: 0 };
 var loadLiquidFillGauge;
  var overall;
  var gauge0;
var gauge1;
var gauge2;
var gauge3;
var gauge4;
var gauge5;
  Centers.getAllCenters()
  .then(function(centers){
    $scope.data.centers = centers;
  });
  Students.getCurrentStudent()
  .then(function(resp){
    $scope.data.student = resp;
    if ($scope.data.student.birthdate) {
      $scope.data.student.birthdate.toString();
      $scope.data.student.birthdate = $scope.data.student.birthdate.substr(0,10);
    } 
  });
  $scope.center = function() {
    console.log("hello")
  }
  $scope.viewTeachers = function() {
    $scope.teachers = true;
  	Students.viewTeachers()
  	.then(function(resp){
  		$scope.data.teachers = resp;
  	});
  }
   $scope.viewGames = function(){
    Students.viewGames()
  	.then(function(resp){
  		$scope.data.teachers = resp;
  	});
  }
  $scope.viewRecords = function(){
  	Students.viewRecords()
    .then(function(resp){
      $scope.data.records=resp;
    });
  }
  $scope.editflag=function(){
    $scope.edit=true;
  }
  $scope.teacherflag=function(){
    $scope.teachers=false;
    $scope.loadGauges
  }
  $scope.editProfile=function(){
    Students.editProfile($scope.user)
      .then(function(resp){
        $scope.data.student=resp;
        $scope.data.student.birthdate.toString();
        $scope.data.student.birthdate=$scope.data.student.birthdate.substr(0,10);
      });
  $scope.edit=false;
  }
  Students.getRecords()
  .then(function(resp){
    for(var i=0;i<resp.length;i++){
      if(resp[i].social !== undefined && resp[i].preservation !== undefined && resp[i].communicationAndDevelopment!==undefined && resp[i].sensoryDisturbance!== undefined && resp[i].attentionAndSafety !== undefined){
        $scope.record.social = resp[i].social;
        $scope.record.preservation = resp[i].preservation;
        $scope.record.communicationAndDevelopment = resp[i].communicationAndDevelopment;
        $scope.record.sensoryDisturbance = resp[i].sensoryDisturbance;
        $scope.record.attentionAndSafety = resp[i].attentionAndSafety;
      }
    }
    $scope.initialize();
  })
  $scope.initialize = function () {
    var loadLiquidFillGauge = window.loadLiquidFillGauge;
    var overall = ((($scope.record.social + 
                  $scope.record.preservation + 
                  $scope.record.communicationAndDevelopment + 
                  $scope.record.sensoryDisturbance + 
                  $scope.record.attentionAndSafety)));
      gauge0 = loadLiquidFillGauge('fillgauge0', overall);
      gauge1 = loadLiquidFillGauge('fillgauge1', ((($scope.record.social)/20)*100));
      gauge2 = loadLiquidFillGauge('fillgauge2', ((($scope.record.preservation)/20)*100));
      gauge3 = loadLiquidFillGauge('fillgauge3', ((($scope.record.communicationAndDevelopment)/20)*100));
      gauge4 = loadLiquidFillGauge('fillgauge4', ((($scope.record.sensoryDisturbance)/20)*100));
      gauge5 = loadLiquidFillGauge('fillgauge5', ((($scope.record.attentionAndSafety)/20)*100));
    };
 });