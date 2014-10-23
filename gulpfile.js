var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    tinylr,
    notifyLiveReload;

notifyLiveReload = function (event) {
    var fileName = require('path').relative(__dirname, event.path);

    tinylr.changed({
        body: {
            files: [fileName]
        }
    });
};

gulp.task('sass', function () {
    gulp.src('./public/css/scss/*.scss')
        .pipe(sass())
        .on('error', function(err) {
            console.log(err.message);
        })
        .pipe(autoprefixer({
            browsers: ['Firefox > 20', 'Chrome > 20'],
            cascade: false
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('livereload', function () {
    tinylr = require('tiny-lr')();
    tinylr.listen(4002);
});

gulp.task('watch', function () {
    gulp.watch('./public/css/scss/**/*.scss', ['sass']);
    gulp.watch('./public/css/**/*.css', notifyLiveReload);
});

gulp.task('jshint', function () {
    gulp.src('./app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('develop', ['livereload', 'watch']);