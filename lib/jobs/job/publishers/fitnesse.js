"use strict";

var util = require('../../../misc/util.js');

var Fitnesse = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Fitnesse.prototype, 'upper');
Fitnesse.prototype.results = util.generatePrimitiveAccessor('obj', 'results');

module.exports = Fitnesse;
