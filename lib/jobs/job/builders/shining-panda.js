"use strict";

var util = require('../../../misc/util.js');

var ShiningPanda = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(ShiningPanda.prototype, 'upper');
ShiningPanda.prototype.buildEnvironment = util.generatePrimitiveAccessor('obj', 'build-environment');
ShiningPanda.prototype.pythonVersion = util.generatePrimitiveAccessor('obj', 'python-version');
ShiningPanda.prototype.home = util.generatePrimitiveAccessor('obj', 'home');
ShiningPanda.prototype.name = util.generatePrimitiveAccessor('obj', 'name');
ShiningPanda.prototype.clear = util.generatePrimitiveAccessor('obj', 'clear');
ShiningPanda.prototype.useDistribute = util.generatePrimitiveAccessor('obj', 'use-distribute');
ShiningPanda.prototype.systemSitePackages = util.generatePrimitiveAccessor('obj', 'system-site-packages');
ShiningPanda.prototype.nature = util.generatePrimitiveAccessor('obj', 'nature');
ShiningPanda.prototype.command = util.generatePrimitiveAccessor('obj', 'command');
ShiningPanda.prototype.ignoreExitCode = util.generatePrimitiveAccessor('obj', 'ignore-exit-code');

module.exports = ShiningPanda;
