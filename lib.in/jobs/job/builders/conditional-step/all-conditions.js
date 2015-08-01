"use strict";

var util = require('../../../../misc/util.js');

exports.generate = function(prototype, obj) {
  prototype.conditionKind = util.generatePrimitiveAccessor(obj, 'condition-kind');
  prototype.conditionExpression = util.generatePrimitiveAccessor(obj, 'condition-expression');
  prototype.conditionString1 = util.generatePrimitiveAccessor(obj, 'condition-string1');
  prototype.conditionString2 = util.generatePrimitiveAccessor(obj, 'condition-string2');
  prototype.conditionCaseInsensitive = util.generatePrimitiveAccessor(obj, 'condition-case-insensitive');
  prototype.conditionWorst = util.generatePrimitiveAccessor(obj, 'condition-worst');
  prototype.conditionBest = util.generatePrimitiveAccessor(obj, 'condition-best');
  prototype.conditionCommand = util.generatePrimitiveAccessor(obj, 'condition-command');
  prototype.conditionFilename = util.generatePrimitiveAccessor(obj, 'condition-filename');
  prototype.conditionBasedir = util.generatePrimitiveAccessor(obj, 'condition-basedir');
  prototype.conditionOperand = util.generatePrimitiveAccessor(obj, 'condition-operand');
};
