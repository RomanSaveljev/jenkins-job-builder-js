"use strict";

var util = require('../../util.js');

var Merge = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Merge.prototype, 'upper');
Merge.prototype.remote = util.generatePrimtiveAccessor('obj', 'remote');
Merge.prototype.branch = util.generatePrimtiveAccessor('obj', 'branch');
Merge.prototype.strategy = util.generatePrimtiveAccessor('obj', 'strategy');
Merge.prototype.fastForwardMode = util.generatePrimtiveAccessor('obj', 'fast-forward-mode');

module.exports = Merge;
