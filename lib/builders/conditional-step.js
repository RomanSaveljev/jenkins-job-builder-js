"use strict";

var util = require('../util.js');
var Builders = require('../builders.js');
var BooleanExpression = require('./conditional-step/boolean-expression.js');
var StringsMatch = require('./conditional-step/strings-match.js');
var CurrentStatus = require('./conditional-step/current-status.js');
var Shell = require('./conditional-step/shell.js');
var WindowsShell = Shell;
var FileExists = require('./conditional-step/file-exists.js');

var ConditionalStep = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};

util.makeUppable(ConditionalStep.prototype, 'upper');
ConditionalStep.prototype.conditionKind = util.generatePrimitiveAccessor('obj', 'condition-kind');
ConditionalStep.prototype.conditionExpression = util.generatePrimitiveAccessor('obj', 'condition-expression');
ConditionalStep.prototype.conditionStringOne = util.generatePrimitiveAccessor('obj', 'condition-string1');
ConditionalStep.prototype.conditionStringTwo = util.generatePrimitiveAccessor('obj', 'condition-string2');
ConditionalStep.prototype.conditionCaseInsensitive = util.generatePrimitiveAccessor('obj', 'condition-case-insensitive');
ConditionalStep.prototype.conditionWorst = util.generatePrimitiveAccessor('obj', 'condition-worst');
ConditionalStep.prototype.conditionBest = util.generatePrimitiveAccessor('obj', 'condition-best');
ConditionalStep.prototype.conditionCommand = util.generatePrimitiveAccessor('obj', 'condition-command');
ConditionalStep.prototype.conditionFilename = util.generatePrimitiveAccessor('obj', 'condition-filename');
ConditionalStep.prototype.conditionBasedir = util.generatePrimitiveAccessor('obj', 'condition-basedir');
ConditionalStep.prototype.conditionOperand = util.generatePrimitiveAccessor('obj', 'condition-operand');

ConditionalStep.prototype.booleanExpression = util.generateObjectAccessor('job', 'boolean-expression', BooleanExpression);
ConditionalStep.prototype.stringsMatch = util.generateObjectAccessor('job', 'strings-match', StringsMatch);
ConditionalStep.prototype.currentStatus = util.generateObjectAccessor('job', 'current-status', CurrentStatus);
ConditionalStep.prototype.shell = util.generateObjectAccessor('job', 'shell', Shell);
ConditionalStep.prototype.windowsShell = util.generateObjectAccessor('job', 'windows-shell', WindowsShell);
ConditionalStep.prototype.fileExists = util.generateObjectAccessor('job', 'file-exists', FileExists);
ConditionalStep.prototype.not = util.generateObjectAccessor('job', 'file-exists', FileExists);

ConditionalStep.prototype.onEvaluationFailure = util.generatePrimitiveAccessor('obj', 'on-evaluation-failure');
ConditionalStep.prototype.steps = util.generateCustomArrayAccessor('job', 'steps', Builders);

module.exports = ConditionalStep;
