"use strict";

var util = require('../util.js');

var Gradle = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Gradle.prototype, 'upper');
Gradle.prototype.tasks = util.generatePrimitiveAccessor('obj', 'tasks');
Gradle.prototype.gradleName = util.generatePrimitiveAccessor('obj', 'gradle-name');
Gradle.prototype.wrapper = util.generatePrimitiveAccessor('obj', 'wrapper');
Gradle.prototype.executable = util.generatePrimitiveAccessor('obj', 'executable');
Gradle.prototype.switches = util.generatePrimitiveArrayAccessor('obj', 'switches');
Gradle.prototype.useRootDir = util.generatePrimitiveAccessor('obj', 'use-root-dir');
Gradle.prototype.rootBuildScriptDir = util.generatePrimitiveAccessor('obj', 'root-build-script-dir');

module.exports = Gradle;
