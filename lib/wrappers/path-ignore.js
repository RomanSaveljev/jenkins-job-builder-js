"use strict";

var util = require('../util.js');

var PathIgnore = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(PathIgnore.prototype, 'upper');
PathIgnore.prototype.ignored = util.generatePrimitiveAccessor('obj', 'ignored');

module.exports = PathIgnore;
