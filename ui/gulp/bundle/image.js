'use strict'

const image = require('gulp-image-optimization')

exports.fn = function (gulp, paths, mode, done) {
  return gulp.src([paths.src + '**/*.{png,jpg,gif,svg}', '!' + paths.jspmPackages])
  .pipe(image({
    optimizationLevel: 3,
    progressive: true,
    interlaced: true
  }))
  .pipe(gulp.dest(paths.wwwroot))
}
