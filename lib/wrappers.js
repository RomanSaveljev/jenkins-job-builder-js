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
var ConfigFileProvider = require('./wrappers/config-file-provider.js');
var Ansicolor = require('./wrappers/ansicolor.js');
var CredentialsBinding = require('./wrappers/credentials-binding.js');
var EnvFile = require('./wrappers/env-file.js');
var EnvScript = require('./wrappers/env-script.js');



var Wrappers = function(upper, array) {
  this.upper = upper;
  this.array = array;
  return this;
};

util.makeUppable(Wrappers.prototype, 'upper');
Wrappers.prototype.ansicolor = util.generateObjectElementAccessor('array', 'ansicolor', Ansicolor);
Wrappers.prototype.buildName = util.generateObjectElementAccessor('array', 'build-name', BuildName);
Wrappers.prototype.buildUserVars = util.generatePrimitiveElementAccessor('array', 'build-user-vars');
Wrappers.prototype.ciSkip = util.generatePrimitiveElementAccessor('array', 'ci-skip');
Wrappers.prototype.configFileProvider = util.generateObjectElementAccessor('array', 'config-file-provider', ConfigFileProvider);
Wrappers.prototype.copyToSlave = util.generateObjectElementAccessor('array', 'copy-to-slave', CopyToSlave);
Wrappers.prototype.credentialsBinding = util.generateObjectElementAccessor('array', 'credentials-binding', CredentialsBinding);
Wrappers.prototype.customTools = util.generateObjectElementAccessor('array', 'custom-tools', CustomTools);
Wrappers.prototype.deliveryPipeline = util.generateObjectElementAccessor('array', 'delivery-pipeline', DeliveryPipeline);
Wrappers.prototype.envFile = util.generateObjectElementAccessor('array', 'env-file', EnvFile);
Wrappers.prototype.envScript = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.exclusion = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.inject = util.generateObjectElementAccessor('array', 'inject', Inject);
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
Wrappers.prototype.maskPasswords = util.generatePrimitiveElementAccessor('mask-passwords');
Wrappers.prototype.matrixTieParent = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.mongoDb = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.pathIgnore = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.portAllocator = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.preScmBuildStep = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.rbEnv = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.release = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.rvmEnv = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.sauceOnDemand = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.sshAgentCredentials = util.generateObjectElementAccessor('array', 'ssh-agent-credentials', SshAgentCredentials);
Wrappers.prototype.timeout = util.generateObjectElementAccessor('array', 'timeout', Timeout);
Wrappers.prototype.timestamps = util.generatePrimitiveElementAccessor('array', 'timestamps');
Wrappers.prototype.workspaceCleanup = util.generateObjectElementAccessor('array', 'workspace-cleanup', WorkspaceCleanup);
Wrappers.prototype.xvfb = util.generateObjectElementAccessor('array', 'xvfb', Xvfb);
Wrappers.prototype.xvnc = util.generateObjectElementAccessor('array', 'xvnc', Xvnc);

module.exports = Wrappers;
