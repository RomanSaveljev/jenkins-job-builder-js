"use strict";

var util = require('../../../misc/util.js');

var ConditionalPublisher = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(ConditionalPublisher.prototype, 'upper');
ConditionalPublisher.prototype.conditionKind = util.generatePrimitiveAccessor(obj, 'condition-kind');
ConditionalPublisher.prototype.conditionExpression = util.generatePrimitiveAccessor(obj, 'condition-expression');
ConditionalPublisher.prototype.conditionWorst = util.generatePrimitiveAccessor(obj, 'condition-worst');
ConditionalPublisher.prototype.conditionBest = util.generatePrimitiveAccessor(obj, 'condition-best');
ConditionalPublisher.prototype.conditionCommand = util.generatePrimitiveAccessor(obj, 'condition-command');
ConditionalPublisher.prototype.conditionFilename = util.generatePrimitiveAccessor(obj, 'condition-filename');
ConditionalPublisher.prototype.conditionBasedir = util.generatePrimitiveAccessor(obj, 'condition-basedir');
ConditionalPublisher.prototype.onEvaluationFailure = util.generatePrimitiveAccessor('obj', 'on-evaluation-failure');
ConditionalPublisher.prototype.action = function(value) {
  if (value === undefined) {
    // always create a fresh array to enforce declarative code style
    this.obj.action = [];
    // avoid circular dependency
    var Publishers = require('../publishers.js');
    return new Publishers(this, this.obj.action);
  } else {
    throw 'TODO: setter is not implemented';
  }
}

module.exports = ConditionalPublisher;
