"use strict";

var util = require('../util.js');

var ShiningPanda = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(ShiningPanda.prototype, 'upper');
ShiningPanda.prototype.htmlReportsDirectory = util.generatePrimitiveAccessor('obj', 'html-reports-directory');

module.exports = ShiningPanda;
