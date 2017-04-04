'use strict';

var isparta = require('isparta');

var babelOptions = {
	presets: ['metal'],
	sourceMap: 'both'
};

module.exports = function (config) {
	config.set({
		frameworks: ['browserify', 'mocha', 'chai', 'source-map-support'],

		files: [
			{
				pattern: 'node_modules/metal-soy-bundle/lib/bundle.js',
				watched: false,
				included: true,
				served: true
			},

			{
				pattern: 'node_modules/html2incdom/lib/*.js',
				watched: false,
				included: true,
				served: true
			},

			// {
			// 	pattern: 'node_modules/metal!(-tools-soy)/lib/**/*.js',
			// 	watched: false,
			// 	included: true,
			// 	served: true
			// },

			{
				pattern: 'packages/metal-*/test/**/*.js',
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
			// 'src/**/*.soy.js': ['browserify'],
			'node_modules/metal-soy-bundle/lib/bundle.js': ['browserify'],
			'node_modules/html2incdom/lib/*.js': ['browserify'],
			// 'node_modules/metal!(-tools-soy)/lib/**/*.js': ['browserify'],
			'packages/metal-*/test/**/*.js': ['browserify']
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
