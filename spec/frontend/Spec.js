describe('Filters', function (){
	beforeEach(module('specialEd'));
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
})