var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var jade        = require('gulp-jade');
var plumber = require('gulp-plumber');

// Static Server + watching scss/html files
gulp.task('server', ['sass'], function() {

    browserSync.init({
        server: "app"
    });

    gulp.watch("jade/**/*.jade", ['jade']);
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch(["app/css/*.css","app/*.html"]).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});


gulp.task('jade', function() {
  gulp.src('jade/**/*.jade')
    .pipe(plumber())
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('app/'))
});


gulp.task('default', ['server', 'sass', 'jade']);
