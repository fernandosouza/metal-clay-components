'use strict';

var karmaConf = require('./karma-coverage.conf.js');

module.exports = function (config) {
	karmaConf(config);
	console.log(config);
};