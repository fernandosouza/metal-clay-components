'use strict';

var metal = require('gulp-metal');
var karma = require('karma');

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