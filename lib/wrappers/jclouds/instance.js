"use strict";

var util = require('../util.js');

var Instance = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Instance.prototype, 'upper');
Instance.prototype.cloudName = util.generatePrimitiveArrayAccessor('obj', 'cloud-name');
Instance.prototype.count = util.generatePrimitiveArrayAccessor('obj', 'count');
Instance.prototype.stopOnTerminate = util.generatePrimitiveArrayAccessor('obj', 'stop-on-terminate');

module.exports = Instance;
