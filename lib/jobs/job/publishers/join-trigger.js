"use strict";

var util = require('../../../misc/util.js');

var JoinTrigger = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(JoinTrigger.prototype, 'upper');
JoinTrigger.prototype.projects = util.generatePrimitiveArrayAccessor('obj', 'projects');

module.exports = JoinTrigger;
