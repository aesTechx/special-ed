// describe('Factories', function (){
// 	beforeEach(module('SED'));
// 	describe('I hate you', function(){
// 		var AttachTokens;
// 		beforeEach(inject(function(_AttachTokens_){
// 			AttachTokens = _AttachTokens_;
// 		}));
// 		it ('be a function', function () {
// 			expect(AttachTokens).toBeDefined();
// 			// expect(typeof AttachTokens).toBe('function');
// 		})
// 	});
// })
describe('Filters', function (){
	beforeEach(module('SED'));
	describe('attach tokens', function () {
		var attach;
		beforeEach(inject(function(_AttachTokens_){
			attach = _AttachTokens_;
		}));
		it ('should attach a string', function () {
			expect(attach).toBeDefined();
			// expect(typeof attach.request).toBe('function');
		});
	});
});
