"use strict";

var util = require('../../../misc/util.js');

var ExtendedChoice = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(ExtendedChoice.prototype, 'upper');
ExtendedChoice.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
ExtendedChoice.prototype.description = util.generatePrimitiveAccessor('obj', 'description');
ExtendedChoice.prototype.propertyFile = util.generatePrimitiveAccessor('obj', 'property-file');
ExtendedChoice.prototype.propertyKey = util.generatePrimitiveAccessor('obj', 'property-key');
ExtendedChoice.prototype.quoteValue = util.generatePrimitiveAccessor('obj', 'quoteValue');
ExtendedChoice.prototype.visibleItems = util.generatePrimitiveAccessor('obj', 'visible-items');
ExtendedChoice.prototype.type = util.generatePrimitiveAccessor('obj', 'type');
ExtendedChoice.prototype.value = util.generatePrimitiveAccessor('obj', 'value');
ExtendedChoice.prototype.defaultValue = util.generatePrimitiveAccessor('obj', 'default-value');
ExtendedChoice.prototype.defaultPropertyFile = util.generatePrimitiveAccessor('obj', 'default-property-file');
ExtendedChoice.prototype.defaultPropertyKey = util.generatePrimitiveAccessor('obj', 'default-property-key');
ExtendedChoice.prototype.multiSelectDelimiter = util.generatePrimitiveAccessor('obj', 'multi-select-delimiter');

module.exports = ExtendedChoice;
