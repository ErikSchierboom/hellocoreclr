'use strict'

exports.fn = function (gulp, paths, mode, done) {
  return gulp.src([paths.src + '**/*.{ico,svg}', '!' + paths.jspmPackages])
    .pipe(gulp.dest(paths.wwwroot))
}

