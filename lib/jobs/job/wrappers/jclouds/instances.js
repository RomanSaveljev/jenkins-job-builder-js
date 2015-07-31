"use strict";

var util = require('../../../../misc/util.js');
var Instance = require('./instance.js');

var Instances = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Instances.prototype, 'upper');
Instances.prototype.build = util.generateCustomKeyObjectElementAccessor('obj', Instance);

module.exports = Instances;
