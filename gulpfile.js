'use strict';

require('babel-core/register');

require('coffee-script/register');

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var concat = require('gulp-concat');

var babel = require('gulp-babel');
var uglify = require('gulp-uglify');

gulp.task('test-once', ['lib'], function() {
  return gulp.src('./test/**/*.js')
    .pipe(mocha({ compilers: { js: babel } }));
});

gulp.task('test', function() {
  gulp.watch(['./src/**/*.js', './test/**/*.js'], ['lib', 'test-once']);
});

gulp.task('lib', function() {
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('lib'));
});

gulp.task('default', ['test']);
