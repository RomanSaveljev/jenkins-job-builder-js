"use strict";

var util = require('../util.js');

var Doxygen = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Doxygen.prototype, 'upper');
Doxygen.prototype.doxyfile = util.generatePrimitiveAccessor('obj', 'doxyfile');
Doxygen.prototype.keepall = util.generatePrimitiveAccessor('obj', 'keepall');
Doxygen.prototype.folder = util.generatePrimitiveAccessor('obj', 'folder');

module.exports = Doxygen;
