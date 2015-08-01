"use strict";

var util = require('../../../misc/util.js');

var Rbenv = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Rbenv.prototype, 'upper');
Rbenv.prototype.rubyVersion = util.generatePrimitiveAccessor('obj', 'ruby-version');
Rbenv.prototype.ignoreLocalVersion = util.generatePrimitiveAccessor('obj', 'ignore-local-version');
Rbenv.prototype.preinstallGemList = util.generatePrimitiveAccessor('obj', 'preinstall-gem-list');
Rbenv.prototype.rbenvRoot = util.generatePrimitiveAccessor('obj', 'rbenv-root');
Rbenv.prototype.rbenvRepo = util.generatePrimitiveAccessor('obj', 'rbenv-repo');
Rbenv.prototype.rbenvBranch = util.generatePrimitiveAccessor('obj', 'rbenv-branch');
Rbenv.prototype.rubyBuildRepo = util.generatePrimitiveAccessor('obj', 'ruby-build-repo');
Rbenv.prototype.rubyBuildBranch = util.generatePrimitiveAccessor('obj', 'ruby-build-branch');

module.exports = Rbenv;
