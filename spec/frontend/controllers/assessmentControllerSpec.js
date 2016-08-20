// describe('Assessment Controller', function() {
//    beforeEach(function () {
//       module('SED.services');
//       module('SED.multiForms', ['ngAnimate', 'ui.bootstrap']);
//   });

//   var $controller;
//   var $scope;
//   var $log;
//   var $uibModal;
//   var Record;
//   var Students
//   beforeEach(inject(function(_$controller_, _$scope_, _$log_, _$uibModal_, _Record_, _Students_){
//     // The injector unwraps the underscores (_) from around the parameter names when matching
//     $controller = _$controller_;
//     Record = _Record_;
//     $scope = _$scope_;
//     $log = _$log_;
//     $uibModal = _$uibModal_;
//     Students = _Students_;
//   }));

//   describe('show all', function() {
//     it('inverts showallQs flag', function() {
//       var $scope = {};
//       controller = $controller('assessmentController', { $scope: $scope });
//       $scope.showAllQs = false;
//       $scope.showAll();
//       expect($scope.showAllQs).toEqual(true);
//     });
//   });
// });