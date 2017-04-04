var path = require('path');
var babel = require('gulp-babel');
var gulp = require('gulp');
var metal = require('gulp-metal');

metal.registerTasks(
	{
		bundleFileName: 'button.js',
		karma: require('karma'),
		bundleCssFileName: 'button.css',
		globalName: 'metal',
		mainBuildJsTasks: ['build:globals'],
		moduleName: 'metal-quartz-button',
		soyDeps: ['node_modules/*quartz*/**/*.soy', 'node_modules/*metal*/**/*.soy']
	}
);

gulp.task('build:cjs', function() {
	return compileToLib('packages/metal*/src/**/*.js');
});

function calcDestDir(file) {
	var relative = path.relative(path.resolve('packages'), file.path);
	var index = relative.indexOf(path.sep);
	file.base = path.dirname(file.path);
	return path.dirname(path.join(
		path.resolve('packages'),
		relative.substr(0, index),
		'lib',
		relative.substr(index + 5)
	));
}

function compileToLib(src) {
	return gulp.src(src)
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(calcDestDir));
}
