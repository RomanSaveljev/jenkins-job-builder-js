"use strict";

var util = require('../../../misc/util.js');

var PromotedBuild = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(PromotedBuild.prototype, 'upper');
PromotedBuild.prototype.names = util.generatePrimitiveArrayAccessor('obj', 'names');

module.exports = PromotedBuild;
