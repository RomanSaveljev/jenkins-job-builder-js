"use strict";

var util = require('../../util.js');

var CleanIf = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(CleanIf.prototype, 'upper');
CleanIf.prototype.success = util.generatePrimitiveAccessor('obj', 'success');
CleanIf.prototype.unstable = util.generatePrimitiveAccessor('obj', 'unstable');
CleanIf.prototype.failure = util.generatePrimitiveAccessor('obj', 'failure');
CleanIf.prototype.aborted = util.generatePrimitiveAccessor('obj', 'aborted');
CleanIf.prototype.notBuilt = util.generatePrimitiveAccessor('obj', 'not-built');

module.exports = CleanIf;
