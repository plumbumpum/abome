var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    gulp.src('./public/css/scss/*.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer({
            browsers: ['Firefox > 20', 'Chrome > 20'],
            cascade: false
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('develop', function () {
    gulp.watch('./public/css/scss/**/*.scss', ['sass']);
});