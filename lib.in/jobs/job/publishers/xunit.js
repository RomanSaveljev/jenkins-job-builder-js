"use strict";

var util = require('../../../misc/util.js');
var Thresholds = require('./xunit/thresholds.js');
var Types = require('./xunit/types.js');

uppableObjectProxy(Xunit)
primitive(util, Xunit, 'thresholdmode')
customArray(util, Xunit, 'thresholds', Thresholds)
primitive(util, Xunit, 'test-time-margin')
customArray(util, Xunit, 'types', Types)
