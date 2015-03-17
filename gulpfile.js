var formatter = require('gulp-clang-format');
var gulp = require('gulp');
var ts2dart = require('./');

gulp.task('test.check-format', function() {
  return gulp.src(['*.js', '*.ts']).pipe(formatter.checkFormat());
});

gulp.task('test', function() {
  gulp.src('test.ts')
      .pipe(ts2dart.transpile())
      .pipe(ts2dart.format())
      .pipe(gulp.dest('result'));
});
