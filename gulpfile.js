var gulp = require('gulp'),
    connect = require('gulp-connect'),
    shell = require('gulp-shell');

gulp.task('server', function () {
  return connect.server({
    livereload: true
  });
});

gulp.task('html', function () {
  return gulp.src('./*.html')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./*.html', 'css/*.*'], ['html']);
});

gulp.task('open_in_browser', ['server'],shell.task([
  'open http://localhost:8080'
]));

gulp.task('default', ['open_in_browser', 'watch']);
