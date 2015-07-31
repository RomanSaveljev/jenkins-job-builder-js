"use strict";

var util = require('../../../misc/util.js');

var Pipeline = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Pipeline.prototype, 'upper');
Pipeline.prototype.project = util.generatePrimitiveAccessor('obj', 'project');
Pipeline.prototype.predefinedParameters = util.generatePrimitiveAccessor('obj', 'predefined-parameters');
Pipeline.prototype.currentParameters = util.generatePrimitiveAccessor('obj', 'current-parameters');

module.exports = Pipeline;
