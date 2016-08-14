describe('assessmentController', function () {

	//var submit;

	// Before each test load our api.users module
	beforeEach(angular.module('SED.multiForms'));
	
	var $controller;
	// Before each test set our injected Users factory (_Users_) to our local Users variable
	beforeEach(inject(function(_controller_) {
		$controller = _$controller_;
	}));

	describe('$scope.submit', function(){
		it('should be defined', function(){
			/*var $scope = {};
			var controller = $controller('assessmentController', { $scope: $scope });
			$scope.submit();*/
			expect($scope.submit).toBeDefined();
		})
	})
	// A simple test to verify the Users factory exists
	// it('should exist', function() {
	// 	expect(submit).toBeDefined();
	// });
});