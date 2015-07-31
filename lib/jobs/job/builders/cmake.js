"use strict";

var util = require('../../../misc/util.js');

var Cmake = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Cmake.prototype, 'upper');
Cmake.prototype.sourceDir = util.generatePrimitiveAccessor('obj', 'source-dir');
Cmake.prototype.buildDir = util.generatePrimitiveAccessor('obj', 'build-dir');
Cmake.prototype.installDir = util.generatePrimitiveAccessor('obj', 'install-dir');
Cmake.prototype.buildType = util.generatePrimitiveAccessor('obj', 'build-type');
Cmake.prototype.generator = util.generatePrimitiveAccessor('obj', 'generator');
Cmake.prototype.makeCommand = util.generatePrimitiveAccessor('obj', 'make-command');
Cmake.prototype.installCommand = util.generatePrimitiveAccessor('obj', 'install-command');
Cmake.prototype.preloadScript = util.generatePrimitiveAccessor('obj', 'preload-script');
Cmake.prototype.otherArguments = util.generatePrimitiveAccessor('obj', 'other-arguments');
Cmake.prototype.customCmakePath = util.generatePrimitiveAccessor('obj', 'custom-cmake-path');
Cmake.prototype.cleanBuildDir = util.generatePrimitiveAccessor('obj', 'clean-build-dir');
Cmake.prototype.cleanInstallDir = util.generatePrimitiveAccessor('obj', 'clean-install-dir');

module.exports = Cmake;
