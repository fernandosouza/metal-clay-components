'use strict';

var karmaWebpack = require('karma-webpack');
var karmaChai = require('karma-chai');
var karmaChromeLauncher = require('karma-chrome-launcher');
var karmaMocha = require('karma-mocha');
var karmaSourceMapSupport = require('karma-source-map-support');

module.exports = function (config) {
	config.set({
  	plugins: [
    	karmaChai,
  		karmaChromeLauncher,
    	karmaMocha,
    	karmaSourceMapSupport,
			karmaWebpack
  	],

    frameworks: ['mocha', 'chai', 'source-map-support'],

    files: [
      'test/**/*.js'
    ],

    preprocessors: {
			'test/**/*.js': ['webpack']
    },

    browsers: ['Chrome'],
		
		webpack: require("./webpack.config.js"),

		singleRun: true
  });
};