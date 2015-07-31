"use strict";

var util = require('../../util.js');

var Match = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Match.prototype, 'upper');
Match.prototype.logText = util.generatePrimitiveAccessor('obj', 'log-text');
Match.prototype.operator = util.generatePrimitiveAccessor('obj', 'operator');

module.exports = Match;
