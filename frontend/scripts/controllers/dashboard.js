'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('SED')
  .controller('DashboardCtrl', function($scope, $state) {
    $scope.$state = $state;
    $scope.menuItems = [];
    angular.forEach($state.get(), function (item) {
      if (item.data && item.data.visible) {
          $scope.menuItems.push({name: item.name, text: item.data.text});
      }
    });
  });
