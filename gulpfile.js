const gulp = require('gulp');
const csso = require('gulp-csso');
const terser = require('gulp-terser');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');

/*
* Compile and minify sass
*/
gulp.task('sass', function () {
  gulp.src('src/styles/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(csso())
    .pipe(gulp.dest('assets/css/'));
});

/*
* Compile fonts
*/
gulp.task('fonts', function () {
  gulp.src('src/fonts/**/*.{ttf,woff,woff2}')
    .pipe(plumber())
    .pipe(gulp.dest('assets/fonts/'));
});

/*
 * Minify images
 */
gulp.task('imagemin', function () {
  return gulp.src('src/img/**/*.{jpg,png,gif}')
    .pipe(plumber())
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('assets/img/'));
});

/**
 * Compile and minify js
 */
gulp.task('js', function () {
  return gulp.src('src/js/**/*.js')
    .pipe(plumber())
    .pipe(terser())
    .pipe(gulp.dest('assets/js/'));
});

gulp.task('watch', function () {
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/fonts/**/*.{tff,woff,woff2}', ['fonts']);
  gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin']);
});

gulp.task('default', ['js', 'sass', 'fonts', 'watch']);
