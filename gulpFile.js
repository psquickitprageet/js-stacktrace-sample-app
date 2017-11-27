var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var webserver = require('gulp-webserver');
var bundle = require('gulp-bundle-assets');


gulp.task('build', function() {
  return gulp.src('./bundle.config.js')
  .pipe(bundle())
  .pipe(bundle.results('./'))
  .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function () {
  watch('src/**/*.js', batch(function (events, done) {
      gulp.start('build', 'webserver', done);
  }));
});

gulp.task('start', function() {
  gulp.start('build', 'webserver')
})

gulp.task('webserver', function() {
 gulp.src('./')
   .pipe(webserver({
     livereload: true,
     open: true,
     fallback: 'index.html'
   }));
});




