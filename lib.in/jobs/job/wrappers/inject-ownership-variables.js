"use strict";

var util = require('../../../misc/util.js');

var InjectOwnershipVariables = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(InjectOwnershipVariables.prototype, 'upper');
InjectOwnershipVariables.prototype.jobVariables = util.generatePrimitiveAccessor('obj', 'job-variables');
InjectOwnershipVariables.prototype.nodeVariables = util.generatePrimitiveAccessor('obj', 'node-variables');

module.exports = InjectOwnershipVariables;
