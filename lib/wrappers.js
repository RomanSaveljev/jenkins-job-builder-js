/*!
 * wrappers - lib/wrappers.js
 * Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */
var util = require('./util.js');
var Inject = require('./wrappers/inject.js');
var BuildName = require('./wrappers/build-name.js');
var Xvnc = require('./wrappers/xvnc.js');
var Xvfb = require('./wrappers/xvfb.js');
var WorkspaceCleanup = require('./wrappers/workspace-cleanup.js');
var Timeout = require('./wrappers/timeout.js');
var SshAgentCredentials = require('./wrappers/ssh-agent-credentials.js');
var CopyToSlave = require('./wrappers/copy-to-slave.js');
var CustomTools = require('./wrappers/custom-tools.js');
var DeliveryPipeline = require('./wrappers/delivery-pipeline.js');

var Wrappers = function(var parent, var array) {
  this.parent = parent;
  this.array = array === undefined ? [] : array;
  return this;
};

util.makeUppable(Wrappers.prototype, 'parent');
Wrappers.prototype.ansicolor = util.generateStringFlagAccessor('ansicolor');
Wrappers.prototype.buildName = util.generateObjectFlagAccessor('build-name', BuildName);
Wrappers.prototype.buildUserVars = util.generateStringFlagAccessor('build-user-vars');
Wrappers.prototype.ciSkip = util.generateStringFlagAccessor('ci-skip');
Wrappers.prototype.configFileProvider = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.copyToSlave = util.generateObjectFlagAccessor('copy-to-slave', CopyToSlave);
Wrappers.prototype.credentialsBinding = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.customTools = util.generateObjectFlagAccessor('custom-tools', CustomTools);
Wrappers.prototype.deliveryPipeline = util.generateObjectFlagAccessor('delivery-pipeline', DeliveryPipeline);
Wrappers.prototype.envFile = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.envScript = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.exclusion = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.inject = util.generateObjectFlagAccessor('inject', Inject);
Wrappers.prototype.injectOwnershipVariables = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.injectPasswords = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.jclouds = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.jobLogLogger = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.liveScreenshot = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.locks = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.logFileSize = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.logFileSize = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.logStash = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.m2RepositoryCleanup = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.maskPasswords = util.generateStringFlagAccessor('mask-passwords');
Wrappers.prototype.matrixTieParent = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.mongoDb = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.pathIgnore = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.portAllocator = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.preScmBuildStep = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.rbEnv = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.release = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.rvmEnv = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.sauceOnDemand = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.sshAgentCredentials = util.generateObjectFlagAccessor('ssh-agent-credentials', SshAgentCredentials);
Wrappers.prototype.timeout = util.generateObjectFlagAccessor('timeout', Timeout);
Wrappers.prototype.timestamps = util.generateStringFlagAccessor('timestamps');
Wrappers.prototype.workspaceCleanup = util.generateObjectFlagAccessor('workspace-cleanup', WorkspaceCleanup);
Wrappers.prototype.xvfb = util.generateObjectFlagAccessor('xvfb', Xvfb);
Wrappers.prototype.xvnc = util.generateObjectFlagAccessor('xvnc', Xvnc);

module.exports = Wrappers;
