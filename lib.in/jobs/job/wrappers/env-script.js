"use strict";

var util = require('../../../misc/util.js');

var EnvScript = function(upper, envScript) {
  this.upper = upper;
  this.envScript = envScript;
};
util.makeUppable(EnvScript.prototype, 'upper');
EnvScript.prototype.scriptContent = util.generatePrimitiveAccessor('envScript', 'script-content');
EnvScript.prototype.onlyRunOnParent = util.generatePrimitiveAccessor('envScript', 'only-run-on-parent');

module.exports = EnvScript;
