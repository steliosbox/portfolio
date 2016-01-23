var gulp = require("gulp"),
    browserSync = require('browser-sync');

// Сервер
gulp.task('server', function () {  
  browserSync({
    port: 9000,
    server: {
      baseDir: 'app'
    }
  });
});

// Слежка
gulp.task('watch', function () {
  gulp.watch([
    'app/*.html',
    'app/js/**/*.js',
    'app/css/**/*.css'
  ]).on('change', browserSync.reload);
});

// Задача по-умолчанию
gulp.task('default', ['server', 'watch']);

gulp.task('sass', function () {

  gulp.src('app/assets/sass/styles.sass')
    .pipe(sass({
        errLogToConsole: true,
        sourceComments : 'normal'
    }))
    .pipe(gulp.dest('public_html/assets/css'))
});