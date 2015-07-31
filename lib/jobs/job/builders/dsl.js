"use strict";

var util = require('../util.js');

var DSL = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(DSL.prototype, 'upper');
DSL.prototype.scriptText = util.generatePrimitiveAccessor('obj', 'script-text');
DSL.prototype.target = util.generatePrimitiveAccessor('obj', 'target');
DSL.prototype.ignoreExisting = util.generatePrimitiveAccessor('obj', 'ignore-existing');
DSL.prototype.removedJobActions = util.generatePrimitiveAccessor('obj', 'removed-job-action');
DSL.prototype.removedViewActions = util.generatePrimitiveAccessor('obj', 'removed-view-action');
DSL.prototype.lookupStrategy = util.generatePrimitiveAccessor('obj', 'lookup-strategy');
DSL.prototype.additionalClasspath = util.generatePrimitiveAccessor('obj', 'additional-classpath');

module.exports = DSL;
