"use strict";

var util = require('../util.js');

function allConditions(prototype, obj) {
  prototype.conditionKind = util.generatePrimitiveAccessor(obj, 'condition-kind');
  prototype.conditionExpression = util.generatePrimitiveAccessor(obj, 'condition-expression');
  prototype.conditionStringOne = util.generatePrimitiveAccessor(obj, 'condition-string1');
  prototype.conditionStringTwo = util.generatePrimitiveAccessor(obj, 'condition-string2');
  prototype.conditionCaseInsensitive = util.generatePrimitiveAccessor(obj, 'condition-case-insensitive');
  prototype.conditionWorst = util.generatePrimitiveAccessor(obj, 'condition-worst');
  prototype.conditionBest = util.generatePrimitiveAccessor(obj, 'condition-best');
  prototype.conditionCommand = util.generatePrimitiveAccessor(obj, 'condition-command');
  prototype.conditionFilename = util.generatePrimitiveAccessor(obj, 'condition-filename');
  prototype.conditionBasedir = util.generatePrimitiveAccessor(obj, 'condition-basedir');
  prototype.conditionOperand = util.generateObjectAccessor(obj, 'condition-operand', ConditionOperand);
};

var ConditionOperand = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(ConditionOperand.prototype, 'upper');
allConditions(ConditionOperand.prototype, 'obj');

var ConditionalStep = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};

util.makeUppable(ConditionalStep.prototype, 'upper');
allConditions(ConditionalStep.prototype, 'obj');
ConditionalStep.prototype.onEvaluationFailure = util.generatePrimitiveAccessor('obj', 'on-evaluation-failure');
ConditionalStep.prototype.steps = function(value) {
  if (value === undefined) {
    // always create a fresh array to enforce declarative code style
    this.obj.steps = [];
    // avoid circular dependency
    var Builders = require('../builders.js');
    return new Builders(this, this.obj.steps);
  } else {
    throw 'TODO: setter is not implemented';
  }
}

module.exports = ConditionalStep;
