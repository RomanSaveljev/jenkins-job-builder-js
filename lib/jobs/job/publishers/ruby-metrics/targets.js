"use strict";

var util = require('../../util.js');
var Target = require('./target.js');

var Targets = function(upper, array) {
  this.upper = upper;
  this.array = array;
};
util.makeUppable(Targets.prototype, 'upper');
Targets.prototype.totalCoverage = util.generateKeyedObjectElementAccessor('obj', 'total-coverage', Target);
Targets.prototype.codeCoverage = util.generateKeyedObjectElementAccessor('obj', 'code-coverage', Target);

module.exports = Targets;
