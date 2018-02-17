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
    browserJS     : `${dir.dist}/browser/writing-animation.js`,
    serverJS      : `${dir.dist}/server/writing-animation.js`,
    min           : 'writing-animation.min.js',
  },
  opts = {
    es6 : { presets : ['es2015'] }
  };

gulp.task('es6-browser', () => {
  gulp
  .src(`${dir.src}/browser/*.js`)
  .pipe( babel(opts.es6) )
  .pipe( gulp.dest(`${dir.dist}/browser`) );
});

gulp.task('es6-server', () => {
  gulp
    .src(`${dir.src}/server/*.js`)
    .pipe( babel(opts.es6) )
    .pipe( gulp.dest(`${dir.dist}/server`) );
});

gulp.task('es6', ['es6-browser', 'es6-server']);

gulp.task('js-browser', () => {
  gulp
    .src(files.browserJS)
    .pipe(concat(files.min))
    .pipe(uglify())
    .pipe(gulp.dest(`${dir.dist}/browser`));
});

gulp.task('js-server', () => {
  gulp
    .src(files.serverJS)
    .pipe(concat(files.min))
    .pipe(uglify())
    .pipe(gulp.dest(`${dir.dist}/server`));
});

gulp.task('js', ['js-browser', 'js-server']);
