'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gulpMocha = require('gulpMocha');
var chai = require('chai');

gulp.task('default', ['http']);

gulp.task('jshint', function() {
  return gulp.src(['lib/**/*.js', 'test/**/*.js', 'gulpfile.js', 'index.js']);
});
