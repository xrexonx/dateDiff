var gulp = require('gulp');
var copy = require('gulp-copy-rex');
var mocha = require('gulp-mocha');

gulp.task('copy', function () {

    var opts = {
        min:true,
        filename:'rDateDiff'
    };

    copy('./index.js', './dist', opts);
});

gulp.task('default', function () {
    gulp.run('copy');
});

gulp.task('test', function () {
	
	// var reporter = {reporter: 'nyan'};
     return gulp
     		.src('test/dateDiffTest.js', {read: false})
        	.pipe(mocha());
        	// .pipe(mocha(reporter));
});

