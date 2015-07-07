"use strict";

var util = require('../util.js');
var Parameters = require('../parameters.js');
var Builders = require('../builders.js');

var Release = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Release.prototype, 'upper');
Release.prototype.keepForever = util.generatePrimitiveAccessor('obj', 'keep-forever');
Release.prototype.overrideBuildParameters = util.generatePrimitiveAccessor('obj', 'override-build-parameters');
Release.prototype.versionTemplate = util.generatePrimitiveAccessor('obj', 'version-template');
Release.prototype.parameters = util.generateCustomArrayAccessor('obj', 'parameters', Parameters);
Release.prototype.preBuild = util.generateCustomArrayAccessor('obj', 'pre-build', Builders);
Release.prototype.postBuild = util.generateCustomArrayAccessor('obj', 'post-build', Builders);
Release.prototype.postSuccess = util.generateCustomArrayAccessor('obj', 'post-success', Builders);
Release.prototype.postFailure = util.generateCustomArrayAccessor('obj', 'post-failure', Builders);

module.exports = Release;
