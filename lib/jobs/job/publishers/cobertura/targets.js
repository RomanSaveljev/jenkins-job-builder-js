"use strict";

var util = require('../util.js');
var Target = require('./target.js');

var Targets = function(upper, array) {
  this.upper = upper;
  this.array = array;
};
util.makeUppable(Targets.prototype, 'upper');
Targets.prototype.files = util.generateKeyedObjectElementAccessor('array', 'files', Target);
Targets.prototype.packages = util.generateKeyedObjectElementAccessor('array', 'packages', Target);
Targets.prototype.method = util.generateKeyedObjectElementAccessor('array', 'method', Target);
Targets.prototype.classes = util.generateKeyedObjectElementAccessor('array', 'classes', Target);
Targets.prototype.line = util.generateKeyedObjectElementAccessor('array', 'line', Target);
Targets.prototype.conditional = util.generateKeyedObjectElementAccessor('array', 'conditional', Target);

module.exports = Targets;
