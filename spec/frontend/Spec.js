describe('Filters', function (){
	beforeEach(module('SED'));
	describe('reverse', function () {
		var reverse;
		beforeEach(inject(function($filter){
			reverse = $filter('reverse', {});
		}));
		it ('should reverse a string', function () {
			console.log(reverse)
			var salah = reverse('salah');
			console.log(salah)
			expect(salah).toBe('halas');
		})
	})
	describe('attach tokens', function () {
		var attach;
		beforeEach(inject(function(_AttachTokens_){
			attach = _AttachTokens_;
		}));
		it ('should attach a string', function () {
			expect(attach).toBeDefined();
			expect(typeof attach.x).toBe('function');
		})
	})
})
