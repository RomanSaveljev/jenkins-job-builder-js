"use strict";

var util = require('../../util.js');

var CleanIf = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(CleanIf.prototype, 'upper');
CleanIf.prototype.success = util.generatePrimtiveAccessor('obj', 'success');
CleanIf.prototype.unstable = util.generatePrimtiveAccessor('obj', 'unstable');
CleanIf.prototype.failure = util.generatePrimtiveAccessor('obj', 'failure');
CleanIf.prototype.aborted = util.generatePrimtiveAccessor('obj', 'aborted');
CleanIf.prototype.notBuilt = util.generatePrimtiveAccessor('obj', 'not-built');

module.exports = CleanIf;
