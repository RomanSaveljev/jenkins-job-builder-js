"use strict";

var util = require('../util.js');
var Group = require('./build-result/group.js');

var BuildResult = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(BuildResult.prototype, 'upper');
BuildResult.prototype.groups = util.generateObjectArrayAccessor('obj', 'groups', Group);
BuildResult.prototype.combine = util.generatePrimitiveAccessor('obj', 'combine');
BuildResult.prototype.cron = util.generatePrimitiveAccessor('obj', 'cron');

module.exports = BuildResult;
