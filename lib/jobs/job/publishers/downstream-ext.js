"use strict";

var util = require('../../../misc/util.js');

var DownstreamExt = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(DownstreamExt.prototype, 'upper');
DownstreamExt.prototype.projects = util.generatePrimitiveArrayAccessor('obj', 'projects');
DownstreamExt.prototype.comparison = util.generatePrimitiveAccessor('obj', 'comparison');
DownstreamExt.prototype.criteria = util.generatePrimitiveAccessor('obj', 'criteria');
DownstreamExt.prototype.onlyOnScmChange = util.generatePrimitiveAccessor('obj', 'only-on-scm-change');
DownstreamExt.prototype.onlyOnLocalScmChange = util.generatePrimitiveAccessor('obj', 'only-on-local-scm-change');

module.exports = DownstreamExt;
