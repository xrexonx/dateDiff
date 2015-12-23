var gulp   = require('gulp');
var copy = require('gulp-copy-rex');

gulp.task('copy', function () {

    var opts = {
        min:true, //minify ~ default false
        concat:true, //concat ~ default false
        filename:'rDate' //set filename if concat is set to true
    }

    copy('./index.js', './dist', opts);
});

