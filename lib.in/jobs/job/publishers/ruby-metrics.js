"use strict";

var util = require('../../../misc/util.js');
var targets = require('./ruby-metrics/targets.js');

uppableObjectProxy(RubyMetrics)
primitive(util, RubyMetrics, 'report-dir')
customArray(util, RubyMetrics, 'targets', Targets)
