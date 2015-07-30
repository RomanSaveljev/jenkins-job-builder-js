"use strict";

var util = require('../../util.js');

var SkipGlobalTriggers = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(SkipGlobalTriggers.prototype, 'upper');
SkipGlobalTriggers.prototype.skipWhenScmChange = util.generatePrimtiveAccessor('obj', 'skip-when-scm-change');
SkipGlobalTriggers.prototype.skipWhenUpstreamBuild = util.generatePrimtiveAccessor('obj', 'skip-when-upstream-build');
SkipGlobalTriggers.prototype.skipWhenEnvvarDefined = util.generatePrimtiveAccessor('obj', 'skip-when-envvar-defined');

module.exports = SkipGlobalTriggers;
