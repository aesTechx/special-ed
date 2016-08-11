describe('Controllers', function () {

	var submit;

	// Before each test load our api.users module
	beforeEach(angular.mock.module('SED.multiForms'));

	// Before each test set our injected Users factory (_Users_) to our local Users variable
	beforeEach(inject(function(_submit_) {
		submit = _submit_;
	}));

	// A simple test to verify the Users factory exists
	it('should exist', function() {
		expect(submit).toBeDefined();
	});
});