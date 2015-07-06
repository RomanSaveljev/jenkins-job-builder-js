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
var BuildUserVars = require('./proxies/empty-proxy.js');
var CiSkip = require('./proxies/empty-proxy.js');
var MaskPasswords = require('./proxies/empty-proxy.js');
var Timestamps = require('./proxies/empty-proxy.js');

var Wrappers = function(upper, array) {
  this.upper = upper;
  this.array = array;
  return this;
};

util.makeUppable(Wrappers.prototype, 'upper');
Wrappers.prototype.ansicolor = util.generateKeyedObjectElementAccessor('array', 'ansicolor', Ansicolor);
Wrappers.prototype.buildName = util.generateKeyedObjectElementAccessor('array', 'build-name', BuildName);
Wrappers.prototype.buildUserVars = util.generateKeyedObjectElementAccessor('array', 'build-user-vars', BuildUserVars);
Wrappers.prototype.ciSkip = util.generateKeyedObjectElementAccessor('array', 'ci-skip', CiSkip);
Wrappers.prototype.configFileProvider = util.generateKeyedObjectElementAccessor('array', 'config-file-provider', ConfigFileProvider);
Wrappers.prototype.copyToSlave = util.generateKeyedObjectElementAccessor('array', 'copy-to-slave', CopyToSlave);
Wrappers.prototype.credentialsBinding = util.generateKeyedObjectElementAccessor('array', 'credentials-binding', CredentialsBinding);
Wrappers.prototype.customTools = util.generateKeyedObjectElementAccessor('array', 'custom-tools', CustomTools);
Wrappers.prototype.deliveryPipeline = util.generateKeyedObjectElementAccessor('array', 'delivery-pipeline', DeliveryPipeline);
Wrappers.prototype.envFile = util.generateKeyedObjectElementAccessor('array', 'env-file', EnvFile);
Wrappers.prototype.envScript = util.generateKeyedObjectElementAccessor('array', 'env-script', EnvScript);
Wrappers.prototype.exclusion = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.inject = util.generateKeyedObjectElementAccessor('array', 'inject', Inject);
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
Wrappers.prototype.maskPasswords = util.generateKeyedObjectElementAccessor('array', 'mask-passwords', MaskPasswords);
Wrappers.prototype.matrixTieParent = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.mongoDb = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.pathIgnore = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.portAllocator = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.preScmBuildStep = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.rbEnv = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.release = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.rvmEnv = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.sauceOnDemand = util.generateToDoMember('Not implemented - complex structure');
Wrappers.prototype.sshAgentCredentials = util.generateKeyedObjectElementAccessor('array', 'ssh-agent-credentials', SshAgentCredentials);
Wrappers.prototype.timeout = util.generateKeyedObjectElementAccessor('array', 'timeout', Timeout);
Wrappers.prototype.timestamps = util.generateKeyedObjectElementAccessor('array', 'timestamps', Timestamps);
Wrappers.prototype.workspaceCleanup = util.generateKeyedObjectElementAccessor('array', 'workspace-cleanup', WorkspaceCleanup);
Wrappers.prototype.xvfb = util.generateKeyedObjectElementAccessor('array', 'xvfb', Xvfb);
Wrappers.prototype.xvnc = util.generateKeyedObjectElementAccessor('array', 'xvnc', Xvnc);

module.exports = Wrappers;
