"use strict";

var util = require('../../util.js');

var ChangeLogAgainst = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(ChangeLogAgainst.prototype, 'upper');
ChangeLogAgainst.prototype.remote = util.generatePrimtiveAccessor('obj', 'remote');
ChangeLogAgainst.prototype.branch = util.generatePrimtiveAccessor('obj', 'branch');

module.exports = ChangeLogAgainst;
