"use strict";

var util = require('../../misc/util.js');
var RootModule = require('./maven/root-module.js');

var Maven = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Maven.prototype, 'upper');
Maven.prototype.rootModule = util.generateObjectAccessor('obj', 'root-module', RootModule);
Maven.prototype.rootPom = util.generatePrimitiveAccessor('obj', 'root-pom');
Maven.prototype.goals = util.generatePrimitiveAccessor('obj', 'goals');
Maven.prototype.mavenOpts = util.generatePrimitiveAccessor('obj', 'maven-opts');
Maven.prototype.mavenName = util.generatePrimitiveAccessor('obj', 'maven-name');
Maven.prototype.privateRepository = util.generatePrimitiveAccessor('obj', 'private-repository');
Maven.prototype.ignoreUpstreamChanges = util.generatePrimitiveAccessor('obj', 'ignore-upstream-changes');
Maven.prototype.incrementalBuild = util.generatePrimitiveAccessor('obj', 'incremental-build');
Maven.prototype.automaticArchiving = util.generatePrimitiveAccessor('obj', 'automatic-archiving');
Maven.prototype.automaticSiteArchiving = util.generatePrimitiveAccessor('obj', 'automatic-site-archiving');
Maven.prototype.automaticFingerprinting = util.generatePrimitiveAccessor('obj', 'automatic-fingerprinting');
Maven.prototype.parallelBuildModules = util.generatePrimitiveAccessor('obj', 'parallel-build-modules');
Maven.prototype.resolveDependencies = util.generatePrimitiveAccessor('obj', 'resolve-dependencies');
Maven.prototype.runHeadless = util.generatePrimitiveAccessor('obj', 'run-headless');
Maven.prototype.processPlugins = util.generatePrimitiveAccessor('obj', 'process-plugins');
Maven.prototype.customWorkspace = util.generatePrimitiveAccessor('obj', 'custom-workspace');
Maven.prototype.settings = util.generatePrimitiveAccessor('obj', 'settings');
Maven.prototype.globalSettings = util.generatePrimitiveAccessor('obj', 'global-settings');
Maven.prototype.postStepRunCondition = util.generatePrimitiveAccessor('obj', 'post-step-run-condition');

module.exports = Maven;
