'use strict';

var fs = require('fs');
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

// sass
gulp.task('sass', function () {
  return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

// concat
gulp.task('concat_js', function() {
  // get file index 
  var includes = JSON.parse(fs.readFileSync('./js/index.json')).includes;
  //An array of files is required for the correct order of contact
  return gulp.src(includes) //file array need for 
      .pipe(concat('./scripts.js'))
      .pipe(minify({
          ext:{
              src:'',
              min:'.min.js'
          },
          noSource: true}))
      .pipe(gulp.dest('./js/'));
});

// watch
gulp.task('watch', function () {
  gulp.watch('./js/partials/*.js', ['concat_js']);
  gulp.watch('./js/index.json', ['concat_js']);
});

gulp.task('default', gulp.series('watch', 'concat_js'));