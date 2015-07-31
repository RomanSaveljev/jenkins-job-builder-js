"use strict";

var util = require('../../../misc/util.js');

var Ansicolor = function(upper, ansicolor) {
  this.upper = upper;
  this.ansicolor = ansicolor;
};
util.makeUppable(Ansicolor.prototype, 'upper');
Ansicolor.prototype.colormap = util.generatePrimitiveAccessor('ansicolor', 'colormap');

module.exports = Ansicolor;
