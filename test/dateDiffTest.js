var chai = require('chai'),
	expect = chai.expect,
	rDateDiff = require('../index');

	describe('rDateDiff', function () {
		
		it('should return the difference between two dates', function () {

			var getDiff = rDateDiff.getDiff("02/13/2015", "12/23/2015");

			expect(getDiff).to.be.a('string');
		});


		it('should return the number of days between two dates', function () {

			var getDiffDays = rDateDiff.getDiffDays("02/13/2015", "12/23/2015");

			expect(getDiffDays).to.be.a('number');
		});
		

	});