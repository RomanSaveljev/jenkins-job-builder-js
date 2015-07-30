"use strict";

var util = require('../../util.js');

var Clean = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Clean.prototype, 'upper');
Clean.prototype.after = util.generatePrimtiveAccessor('obj', 'after');
Clean.prototype.before = util.generatePrimtiveAccessor('obj', 'before');

module.exports = Clean;
