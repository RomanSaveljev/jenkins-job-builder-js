"use strict";

var util = require('../../../../misc/util.js');
var Display = require('./graph/display.js');

uppableObjectProxy(Graph)
primitiveArray(util, Graph, 'xysize')
object(util, Graph, 'display', Display)
