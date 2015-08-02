"use strict";

var util = require('../../../misc/util.js');
var Thresholds = require('./cppcheck/thresholds.js');
var Graph = require('./cppcheck/graph.js');

uppableObjectProxy(CppCheck)
primitive(util, CppCheck, 'pattern')
object(util, CppCheck, 'thresholds', Thresholds)
object(util, CppCheck, 'graph', Graph)
