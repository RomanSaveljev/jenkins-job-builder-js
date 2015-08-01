"use strict";

var util = require('../../../misc/util.js');

var Inject = function(upper, inject) {
  this.upper = upper;
  this.inject = inject;
};
util.makeUppable(Inject.prototype, 'upper');
Inject.prototype.propertiesFile = util.generatePrimitiveAccessor('inject', 'properties-file');
Inject.prototype.propertiesContent = util.generatePrimitiveAccessor('inject', 'properties-content');
Inject.prototype.scriptFile = util.generatePrimitiveAccessor('inject', 'script-file');
Inject.prototype.scriptContent = util.generatePrimitiveAccessor('inject', 'script-content');
Inject.prototype.groovyContent = util.generatePrimitiveAccessor('inject', 'groovy-content');
Inject.prototype.loadFromMaster = util.generatePrimitiveAccessor('inject', 'load-from-master');
Inject.prototype.enabled = util.generatePrimitiveAccessor('inject', 'enabled');
Inject.prototype.keepSystemVariables = util.generatePrimitiveAccessor('inject', 'keep-system-variables');
Inject.prototype.keepBuildVariables = util.generatePrimitiveAccessor('inject', 'keep-build-variables');
Inject.prototype.overrideBuildParameters = util.generatePrimitiveAccessor('inject', 'override-build-parameters');

module.exports = Inject;
