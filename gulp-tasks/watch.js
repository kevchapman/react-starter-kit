var gulp = require('gulp');

module.exports = () => {
	gulp.watch(
		['app/sass/**/*.scss'], ['sass']
	);
}
