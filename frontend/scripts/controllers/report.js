angular.module('SED.report', ['ngAnimate', 'ui.bootstrap'])
.controller('report', function ($scope, $log, $uibModal, Record, Students) {
  Record.getAll()
  .then (function(resp) {
  });
});