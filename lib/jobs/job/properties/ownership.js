"use strict";

var util = require('../util.js');

var Ownership = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Ownership.prototype, 'upper');
Ownership.prototype.enabled = util.generatePrimitiveAccessor('obj', 'enabled');
Ownership.prototype.owner = util.generatePrimitiveAccessor('obj', 'owner');
Ownership.prototype.coOwners = util.generatePrimitiveArrayAccessor('obj', 'co-owners');

module.exports = Ownership;
