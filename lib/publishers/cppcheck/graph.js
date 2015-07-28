"use strict";

var util = require('../../util.js');
var Display = require('./graph/display.js');

var Graph = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Graph.prototype, 'upper');
Graph.prototype.xysize = util.generatePrimitiveArrayAccessor('obj', 'xysize');
Graph.prototype.display = util.generateObjectAccessor('obj', 'display', Display);

module.exports = Graph;
