angular.module('SED.studentProfile', [])
.controller('studentCtrl', function($scope, $state, Auth, Centers, Students) {
 $scope.edit=false;
 $scope.data={};
 $scope.user={};
 $scope.record={ social: 0, preservation: 0, communicationAndDevelopment: 0, sensoryDisturbance: 0, attentionAndSafety: 0 };
  Centers.getAllCenters()
  .then(function(centers){
    $scope.data.centers=centers;
  });
  Students.getCurrentStudent()
  .then(function(resp){
    $scope.data.student=resp;
    if ($scope.data.student.birthdate) {
      $scope.data.student.birthdate.toString();
      $scope.data.student.birthdate = $scope.data.student.birthdate.substr(0,10);
    } 
  });
  $scope.viewTeachers=function(){
  	Students.viewTeachers()
  	.then(function(resp){
  		$scope.data.teachers=resp;
  		console.log(resp);
  	});
  }
   $scope.viewGames=function(){
    Students.viewGames()
  	.then(function(resp){
  		$scope.data.teachers=resp;
  		console.log(resp);
  	});
  }
  $scope.viewRecords=function(){
  	Students.viewRecords()
  	 .then(function(resp){
  	 	$scope.data.records=resp;
  	 	console.log(resp);
  	 });
  }
  $scope.editflag=function(){
    $scope.edit=true;
  }
  $scope.editProfile=function(){
    console.log($scope.user)
    Students.editProfile($scope.user)
      .then(function(resp){
        console.log(resp)
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
          $scope.record.social=$scope.record.social+resp[i].social;
          $scope.record.preservation=$scope.record.preservation+resp[i].preservation;
          $scope.record.communicationAndDevelopment=$scope.record.communicationAndDevelopment+resp[i].communicationAndDevelopment;
          $scope.record.sensoryDisturbance=$scope.record.sensoryDisturbance+resp[i].sensoryDisturbance;
          $scope.record.attentionAndSafety=$scope.record.attentionAndSafety+resp[i].attentionAndSafety;
    }
  }
      $scope.initialize();
    console.log($scope.record)
   })
    $scope.initialize = function () {
      console.log($scope.record);
    var loadLiquidFillGauge = window.loadLiquidFillGauge;
    var overall = ((($scope.record.social + 
                  $scope.record.preservation + 
                  $scope.record.communicationAndDevelopment + 
                  $scope.record.sensoryDisturbance + 
                  $scope.record.attentionAndSafety)));
    var gauge0 = loadLiquidFillGauge('fillgauge0', overall);
    var gauge1 = loadLiquidFillGauge('fillgauge1', ((($scope.record.social)/20)*100));
    var gauge2 = loadLiquidFillGauge('fillgauge2', ((($scope.record.preservation)/20)*100));
    var gauge3 = loadLiquidFillGauge('fillgauge3', ((($scope.record.communicationAndDevelopment)/20)*100));
    var gauge4 = loadLiquidFillGauge('fillgauge4', ((($scope.record.sensoryDisturbance)/20)*100));
    var gauge5 = loadLiquidFillGauge('fillgauge5', ((($scope.record.attentionAndSafety)/20)*100));
  };

 });