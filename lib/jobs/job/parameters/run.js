"use strict";

var util = require('../../../misc/util.js');

var Run = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Run.prototype, 'upper');
Run.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
Run.prototype.projectName = util.generatePrimitiveAccessor('obj', 'project-name');
Run.prototype.description = util.generatePrimitiveAccessor('obj', 'description');

module.exports = Run;
