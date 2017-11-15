var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('scripts', function() {
  gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(sourcemaps.write('../dist'))
        .pipe(gulp.dest('dist'));
});
