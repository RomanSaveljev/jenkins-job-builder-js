"use strict";

var util = require('../../../misc/util.js');
var Report = require('./performance/report.js');

uppableObjectProxy(Performance)
primitive(util, Performance, 'failed-threshold')
primitive(util, Performance, 'unstable-threshold')
objectArray(util, Performance, 'report', Report)
