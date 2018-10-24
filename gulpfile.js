var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');

gulp.task('css', function(){
  return gulp.src('scss/style.scss', {sourcemap: true})
    .pipe(sourcemaps.init())
    .pipe(sass({
      style: 'expanded',
      includePaths: ['scss']
    }))
    .on('error', function (err){
      console.log(err.toString());
      this.emit('end');
    })
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream())
});

gulp.task('js', function(){
  return gulp.src('js/application.js')
    // .pipe(sourcemaps.init())
    .pipe(concat('application-min.js'))
    // .pipe(sourcemaps.write())
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.stream())
});

gulp.task('browser-sync', ['css'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['css']);
  gulp.watch('js/**/*.js', ['js']);
});

// DEFAULT
gulp.task('default', [ 'css', 'js', 'browser-sync', 'watch' ]);