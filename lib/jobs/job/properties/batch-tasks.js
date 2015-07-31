"use strict";

var util = require('../util.js');

var BatchTasks = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(BatchTasks.prototype, 'upper');
BatchTasks.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
BatchTasks.prototype.script = util.generatePrimitiveAccessor('obj', 'script');

module.exports = BatchTasks;
