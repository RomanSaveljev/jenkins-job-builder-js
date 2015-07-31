"use strict";

var util = require('../util.js');

var SlaveUtilization = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(SlaveUtilization.prototype, 'upper');
SlaveUtilization.prototype.slavePercentage = util.generatePrimitiveAccessor('obj', 'slave-percentage');
SlaveUtilization.prototype.singleInstancePerSlave = util.generatePrimitiveAccessor('obj', 'single-instance-per-slave');

module.exports = SlaveUtilization;
