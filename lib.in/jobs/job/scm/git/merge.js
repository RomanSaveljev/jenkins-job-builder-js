"use strict";

var util = require('../../../../misc/util.js');

var Merge = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Merge.prototype, 'upper');
Merge.prototype.remote = util.generatePrimitiveAccessor('obj', 'remote');
Merge.prototype.branch = util.generatePrimitiveAccessor('obj', 'branch');
Merge.prototype.strategy = util.generatePrimitiveAccessor('obj', 'strategy');
Merge.prototype.fastForwardMode = util.generatePrimitiveAccessor('obj', 'fast-forward-mode');

module.exports = Merge;
