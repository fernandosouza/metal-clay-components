'use strict';

var karmaHtml2JsPreprocessor = require('karma-html2js-preprocessor');

var karmaConf = require('./karma-coverage.conf.js');

module.exports = function (config) {
	karmaConf(config);

	config.plugins.push(karmaHtml2JsPreprocessor);
	config.files.push('test/fixture/*.html');
	config.preprocessors['test/fixture/*.html'] = ['html2js'];
};