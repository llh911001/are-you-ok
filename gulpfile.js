'use scrict'

var gulp = require('gulp')
var jade = require('gulp-jade')
var postcss = require('gulp-postcss')
var processors = [
  require('postcss-nested'),
  require('autoprefixer-core')()
]
var cssmin = require('gulp-minify-css')
var uglify = require('gulp-uglify')
var watchJS

gulp.task('jade', function () {
  return gulp.src('src/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist'))
})

gulp.task('css', function () {
  return gulp.src('src/css/main.css')
    .pipe(postcss(processors))
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css'))
})

gulp.task('js', function () {
  return gulp.src('src/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))

})

gulp.task('watch', function () {
  gulp.watch('src/index.jade', ['jade'])
  gulp.watch('src/src/main.css', ['css'])
  gulp.watch('src/js/main.js', ['js'])
})

gulp.task('default', ['jade', 'css', 'js'])
