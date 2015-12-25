var gulp = require('gulp');
var copy = require('gulp-copy-rex');

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


