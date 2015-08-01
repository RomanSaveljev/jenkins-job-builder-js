"use strict";

var util = require('../../misc/util.js');
var Axis = require('./axis.js');

var Axes = function(upper, array) {
  this.upper = upper;
  this.array = array;
};
util.makeUppable(Axes.prototype, 'upper');
Axes.prototype.axis = util.generateKeyedObjectElementAccessor('array', 'axis', Axis);

module.exports = Axes;
