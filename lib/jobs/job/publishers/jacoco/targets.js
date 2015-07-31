"use strict";

var util = require('../../../../misc/util.js');
var Target = require('./target.js');

var Targets = function(upper, array) {
  this.upper = upper;
  this.array = array;
};
util.makeUppable(Targets.prototype, 'upper');
Targets.prototype.branch = util.generateKeyedObjectElementAccessor('obj', 'branch', Target);
Targets.prototype.complexity = util.generateKeyedObjectElementAccessor('obj', 'complexity', Target);
Targets.prototype.line = util.generateKeyedObjectElementAccessor('obj', 'line', Target);
Targets.prototype.method = util.generateKeyedObjectElementAccessor('obj', 'method', Target);
Targets.prototype.class = util.generateKeyedObjectElementAccessor('obj', 'class', Target);

module.exports = Targets;
