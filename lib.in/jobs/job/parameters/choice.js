"use strict";

var util = require('../../../misc/util.js');

var Choice = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Choice.prototype, 'upper');
Choice.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
Choice.prototype.choices = util.generatePrimitiveArrayAccessor('obj', 'choices');
Choice.prototype.description = util.generatePrimitiveAccessor('obj', 'description');

module.exports = Choice;
