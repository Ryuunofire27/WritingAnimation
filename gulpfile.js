'use strict';

const gulp = require('gulp'),
  babel = require('gulp-babel'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
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

gulp.task('es6', () => {
  gulp
    .src(`${dir.src}/*.js`)
    .pipe( babel(opts.es6) )
    .pipe( gulp.dest(`${dir.dist}`) );
});


gulp.task('js', () => {
  gulp
    .src(files.JS)
    .pipe(concat(files.min))
    .pipe(uglify())
    .pipe(gulp.dest(`${dir.dist}`));
});
