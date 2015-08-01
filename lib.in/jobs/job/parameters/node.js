"use strict";

var util = require('../../../misc/util.js');

var Node = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Node.prototype, 'upper');
Node.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
Node.prototype.description = util.generatePrimitiveAccessor('obj', 'description');
Node.prototype.defaultNodes = util.generatePrimitiveArrayAccessor('obj', 'default-nodes');
Node.prototype.allowedSlaves = util.generatePrimitiveArrayAccessor('obj', 'allowed-slaves');
Node.prototype.ignoreOfflineNodes = util.generatePrimitiveAccessor('obj', 'ignore-offline-nodes');
Node.prototype.allowedMultiselect = util.generatePrimitiveAccessor('obj', 'allowed-multiselect');

module.exports = Node;
