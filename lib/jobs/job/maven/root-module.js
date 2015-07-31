"use strict";

var util = require('../util.js');

var RootModule = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(RootModule.prototype, 'upper');
RootModule.prototype.groupId = util.generatePrimitiveAccessor('obj', 'group-id');
RootModule.prototype.artifactId = util.generatePrimitiveAccessor('obj', 'artifact-id');

module.exports = RootModule;
