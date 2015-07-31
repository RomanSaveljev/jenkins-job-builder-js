"use strict";

var util = require('../../util.js');

var Clean = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Clean.prototype, 'upper');
Clean.prototype.after = util.generatePrimitiveAccessor('obj', 'after');
Clean.prototype.before = util.generatePrimitiveAccessor('obj', 'before');

module.exports = Clean;
