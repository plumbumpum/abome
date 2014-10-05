var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    gulp.src('./app/css/scss/*.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer({
            browsers: ['Firefox > 20', 'Chrome > 20'],
            cascade: false
        }))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('develop', function () {
    gulp.watch('./app/css/scss/**/*.scss', ['sass']);
});