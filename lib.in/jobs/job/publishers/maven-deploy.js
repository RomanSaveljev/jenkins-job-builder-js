"use strict";

var util = require('../../../misc/util.js');

var MavenDeploy = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(MavenDeploy.prototype, 'upper');
MavenDeploy.prototype.id = util.generatePrimitiveAccessor('obj', 'id');
MavenDeploy.prototype.url = util.generatePrimitiveAccessor('obj', 'url');
MavenDeploy.prototype.uniqueVersion = util.generatePrimitiveAccessor('obj', 'unique-version');
MavenDeploy.prototype.deployUnstable = util.generatePrimitiveAccessor('obj', 'deploy-unstable');
MavenDeploy.prototype.releaseEnvVar = util.generatePrimitiveAccessor('obj', 'release-env-var');

module.exports = MavenDeploy;
