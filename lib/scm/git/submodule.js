"use strict";

var util = require('../../util.js');

var Submodule = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Submodule.prototype, 'upper');
Submodule.prototype.disable = util.generatePrimtiveAccessor('obj', 'disable');
Submodule.prototype.recursive = util.generatePrimtiveAccessor('obj', 'recursive');
Submodule.prototype.tracking = util.generatePrimtiveAccessor('obj', 'tracking');
Submodule.prototype.timeout = util.generatePrimtiveAccessor('obj', 'timeout');

module.exports = Submodule;
