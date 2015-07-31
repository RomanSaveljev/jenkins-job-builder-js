"use strict";

var util = require('../../../misc/util.js');

var Workspace = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Workspace.prototype, 'upper');
Workspace.prototype.parentJob = util.generatePrimitiveAccessor('obj', 'parent-job');
Workspace.prototype.criteria = util.generatePrimitiveAccessor('obj', 'criteria');

module.exports = Workspace;
