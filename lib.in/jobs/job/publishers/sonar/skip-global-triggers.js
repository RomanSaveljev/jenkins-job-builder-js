"use strict";

var util = require('../../../../misc/util.js');

var SkipGlobalTriggers = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(SkipGlobalTriggers.prototype, 'upper');
SkipGlobalTriggers.prototype.skipWhenScmChange = util.generatePrimitiveAccessor('obj', 'skip-when-scm-change');
SkipGlobalTriggers.prototype.skipWhenUpstreamBuild = util.generatePrimitiveAccessor('obj', 'skip-when-upstream-build');
SkipGlobalTriggers.prototype.skipWhenEnvvarDefined = util.generatePrimitiveAccessor('obj', 'skip-when-envvar-defined');

module.exports = SkipGlobalTriggers;
