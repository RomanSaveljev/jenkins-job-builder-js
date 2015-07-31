"use strict";

var util = require('../util.js');

var Html = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Html.prototype, 'upper');
Html.prototype.dir = util.generatePrimitiveAccessor('obj', 'dir');
Html.prototype.archive = util.generatePrimitiveAccessor('obj', 'archive');

module.exports = Html;
