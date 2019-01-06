'use strict';

const gulp = require('gulp'),
  babel = require('gulp-babel'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  task = gulp.task,
  dir = {
    src: 'src',
    dist: 'dist',
  },
  files = {
    JS     : `${dir.dist}/writing-animation.js`,
  min      : 'writing-animation.min.js',
  },
  opts = {
    es6 : { presets : ['es2015'] }
  };

const taskEs6 = () => {
  return gulp
    .src(`${dir.src}/*.js`)
    .pipe( babel(opts.es6) )
    .pipe( gulp.dest(`${dir.dist}`) );
}

const taskJs = () => {
  return gulp
    .src(files.JS)
    .pipe(concat(files.min))
    .pipe(uglify())
    .pipe(gulp.dest(`${dir.dist}`));
}


gulp.task('default', gulp.series(taskEs6, taskJs));
