'use strict';

var isparta = require('isparta');

var karmaHtml2JsPreprocessor = require('karma-html2js-preprocessor');

var babelOptions = {
	presets: ['metal'],
	sourceMap: 'both'
};

module.exports = function (config) {
	config.set({
		frameworks: ['browserify', 'mocha', 'chai', 'source-map-support'],

		plugins: [...config.plugins, karmaHtml2JsPreprocessor],

		files: [
			// {
			// 	pattern: 'node_modules/metal-soy-bundle/lib/bundle.js',
			// 	watched: false,
			// 	included: true,
			// 	served: true
			// },

			// {
			// 	pattern: 'node_modules/html2incdom/lib/*.js',
			// 	watched: false,
			// 	included: true,
			// 	served: true
			// },

			// {
			// 	pattern: 'node_modules/metal*/lib/**/*.js',
			// 	watched: false,
			// 	included: true,
			// 	served: true
			// },

			// {
			// 	pattern: 'lib/**/*.soy.js',
			// 	watched: false,
			// 	included: true,
			// 	served: true
			// },
			
			{
				pattern: 'test/fixture/*.html',
				watched: false,
				included: true,
				served: true
			},

			{
				pattern: 'test/**/*.js',
				watched: false,
				included: true,
				served: true
			}
			// 'src/**/*.js',
		],

		cache: false,

		logLevel: 'debug',

		client: {
 			mocha: {
 					timeout: 4000
 			}
 		},

		preprocessors: {
			// 'src/**/!(*.soy).js': ['browserify'],
			// 'lib/**/*.soy.js': ['browserify'],
			// 'node_modules/metal-soy-bundle/lib/bundle.js': ['browserify'],
			// 'node_modules/html2incdom/lib/*.js': ['browserify'],
			// 'node_modules/metal*/lib/**/*.js': ['browserify'],
			'test/fixture/*.html': 'html2js',
			'test/**/*.js': ['browserify']
		},

		browserify: {
			debug: true,
			transform: [
				[
					'babelify',
					{
						// plugins: ['istanbul'],
						presets: ['es2015']
					}
				]
			]
		},

		browsers: ['Chrome'],

		reporters: ['coverage', 'progress']
	});
};
