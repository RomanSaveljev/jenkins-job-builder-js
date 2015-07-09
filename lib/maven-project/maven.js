"use strict";

var util = require('../util.js');
var RootModule = require('./root-module.js');

var Maven = function(upper, obj) {
  this.upper = upper;
  this.obj = obj;
};
util.makeUppable(Maven.prototype, 'upper');
Maven.prototype.rootModule = util.generateObjectAccessor('job', 'root-module', RootModule);
Maven.prototype.rootPom = util.generatePrimitiveAccessor('job', 'root-pom');
Maven.prototype.goals = util.generatePrimitiveAccessor('job', 'goals');
Maven.prototype.mavenOpts = util.generatePrimitiveAccessor('job', 'maven-opts');
Maven.prototype.mavenName = util.generatePrimitiveAccessor('job', 'maven-name');
Maven.prototype.privateRepository = util.generatePrimitiveAccessor('job', 'private-repository');
Maven.prototype.ignoreUpstreamChanges = util.generatePrimitiveAccessor('job', 'ignore-upstream-changes');
Maven.prototype.incrementalBuild = util.generatePrimitiveAccessor('job', 'incremental-build');
Maven.prototype.automaticArchiving = util.generatePrimitiveAccessor('job', 'automatic-archiving');
Maven.prototype.automaticSiteArchiving = util.generatePrimitiveAccessor('job', 'automatic-site-archiving');
Maven.prototype.automaticFingerprinting = util.generatePrimitiveAccessor('job', 'automatic-fingerprinting');
Maven.prototype.parallelBuildModules = util.generatePrimitiveAccessor('job', 'parallel-build-modules');
Maven.prototype.resolveDependencies = util.generatePrimitiveAccessor('job', 'resolve-dependencies');
Maven.prototype.runHeadless = util.generatePrimitiveAccessor('job', 'run-headless');
Maven.prototype.processPlugins = util.generatePrimitiveAccessor('job', 'process-plugins');
Maven.prototype.customWorkspace = util.generatePrimitiveAccessor('job', 'custom-workspace');
Maven.prototype.settings = util.generatePrimitiveAccessor('job', 'settings');
Maven.prototype.globalSettings = util.generatePrimitiveAccessor('job', 'global-settings');
Maven.prototype.postStepRunCondition = util.generatePrimitiveAccessor('job', 'post-step-run-condition');

module.exports = Maven;
