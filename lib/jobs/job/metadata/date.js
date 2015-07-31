"use strict";

var util = require('../../../misc/util.js');

var DateObject = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(DateObject.prototype, 'upper');
DateObject.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
DateObject.prototype.time = util.generatePrimitiveAccessor('obj', 'time');
DateObject.prototype.timezone = util.generatePrimitiveAccessor('obj', 'timezone');
DateObject.prototype.exposeToEnv = util.generatePrimitiveAccessor('obj', 'expose-to-env');

module.exports = DateObject;
