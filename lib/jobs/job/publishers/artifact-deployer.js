"use strict";

var util = require('../../../misc/util.js');

var ArtifactDeployer = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(ArtifactDeployer.prototype, 'upper');
ArtifactDeployer.prototype.entries = util.generateObjectArrayAccessor('obj', 'entries', Entry);
ArtifactDeployer.prototype.deployIfFail = util.generatePrimitiveAccessor('obj', 'deploy-if-fail');

module.exports = ArtifactDeployer;
