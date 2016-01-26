const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
 
gulp.task('default', () => {
  return gulp.src('main.js')
    .pipe(rename('curveText.js'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});