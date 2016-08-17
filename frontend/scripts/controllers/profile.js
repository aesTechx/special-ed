angular.module('SED.Profile', [])
.controller('ProfileCtrl', function($scope, $state, Auth, Teachers) {
  $scope.data={};
  Teachers.getCurrentTeacher()
  .then(function(resp){
    $scope.data.teacher=resp;
  })
  $scope.initialize = function () {
    var loadLiquidFillGauge = window.loadLiquidFillGauge;
    var gauge1 = loadLiquidFillGauge('fillgauge1', 80);
    var gauge2 = loadLiquidFillGauge('fillgauge2', 60);
    var gauge3 = loadLiquidFillGauge('fillgauge3', 20);
    var gauge4 = loadLiquidFillGauge('fillgauge4', 10);
    var gauge5 = loadLiquidFillGauge('fillgauge5', 90);
    var gauge6 = loadLiquidFillGauge('fillgauge6', 40);
  };
$scope.initialize();
});
