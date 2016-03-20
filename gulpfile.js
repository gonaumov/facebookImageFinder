const gulp = require("gulp"),
      babel = require("gulp-babel"),
      uglify = require('gulp-uglify'),
      useref = require('gulp-useref'),
      gulpif = require('gulp-if');

gulp.task("build-babel", function () {
    return gulp.src("src/app.js")
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest("babelBuild"));
});

gulp.task("default", ["build-babel"], function() {
	return gulp.src('index.html')
	     .pipe(useref())
	     .pipe(gulp.dest('dist'))
});
