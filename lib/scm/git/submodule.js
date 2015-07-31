"use strict";

var util = require('../../util.js');

var Submodule = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Submodule.prototype, 'upper');
Submodule.prototype.disable = util.generatePrimitiveAccessor('obj', 'disable');
Submodule.prototype.recursive = util.generatePrimitiveAccessor('obj', 'recursive');
Submodule.prototype.tracking = util.generatePrimitiveAccessor('obj', 'tracking');
Submodule.prototype.timeout = util.generatePrimitiveAccessor('obj', 'timeout');

module.exports = Submodule;
