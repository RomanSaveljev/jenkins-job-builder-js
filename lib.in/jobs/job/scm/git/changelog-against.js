"use strict";

var util = require('../../../../misc/util.js');

var ChangeLogAgainst = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(ChangeLogAgainst.prototype, 'upper');
ChangeLogAgainst.prototype.remote = util.generatePrimitiveAccessor('obj', 'remote');
ChangeLogAgainst.prototype.branch = util.generatePrimitiveAccessor('obj', 'branch');

module.exports = ChangeLogAgainst;
