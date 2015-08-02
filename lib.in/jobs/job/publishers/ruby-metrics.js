"use strict";

var util = require('../../../misc/util.js');
var Targets = require('./ruby-metrics/targets.js');

uppableObjectProxy(RubyMetrics)
primitive(util, RubyMetrics, 'report-dir')
customArray(util, RubyMetrics, 'targets', Targets)
