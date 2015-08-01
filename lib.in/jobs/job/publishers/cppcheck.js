"use strict";

var util = require('../../../misc/util.js');
var Thresholds = require('./cppcheck/thresholds.js');

uppableObjectProxy(CppCheck)
primitive(util, CppCheck, 'pattern')
objectArray(util, CppCheck, 'thresholds', Thresholds)
