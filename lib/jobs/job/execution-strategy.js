"use strict";

var util = require('./util.js');
var Touchstone = require('./execution-strategy/touchstone.js');

var ExecutionStrategy = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(ExecutionStrategy.prototype, 'upper');
ExecutionStrategy.prototype.combinationFilter = util.generatePrimitiveAccessor('obj', 'combination-filter');
ExecutionStrategy.prototype.sequential = util.generatePrimitiveAccessor('obj', 'sequential');
ExecutionStrategy.prototype.touchstone = util.generateObjectAccessor('obj', 'touchstone', Touchstone);

module.exports = ExecutionStrategy;
