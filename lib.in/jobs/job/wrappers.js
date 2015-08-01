/*!
 * wrappers - lib/wrappers.js
 * Copyright(c) 2015 Roman Saveljev <roman.saveljev@haltian.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */
var util = require('../../misc/util.js');
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
var BuildUserVars = require('../../misc/empty-proxy.js');
var CiSkip = require('../../misc/empty-proxy.js');
var MaskPasswords = require('../../misc/empty-proxy.js');
var Timestamps = require('../../misc/empty-proxy.js');
var Exclusion = require('./wrappers/exclusion.js');
var InjectOwnershipVariables = require('./wrappers/inject-ownership-variables.js');
var InjectPasswords = require('./wrappers/inject-passwords.js');
var JClouds = require('./wrappers/jclouds.js');
var JobLogLogger = require('./wrappers/job-log-logger.js');
var LiveScreenshot = require('./wrappers/live-screenshot.js');
var LogFileSize = require('./wrappers/log-file-size.js');
var LogStash = require('./wrappers/log-stash.js');
var M2RepositoryCleanup = require('./wrappers/m2-repository-cleanup.js');
var MatrixTieParent = require('./wrappers/matrix-tie-parent.js');
var MongoDb = require('./wrappers/mongo-db.js');
var PathIgnore = require('./wrappers/path-ignore.js');
var PortAllocator = require('./wrappers/port-allocator.js');
var Rbenv = require('./wrappers/rbenv.js');
var PreScmBuildstep = require('../builders.js');
var Release = require('./wrappers/release.js');
var RvmEnv = require('./wrappers/rvm-env.js');
var SauceOndemand = require('./wrappers/sauce-ondemand.js');


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
Wrappers.prototype.exclusion = util.generateKeyedObjectElementAccessor('array', 'exclusion', Exclusion);
Wrappers.prototype.inject = util.generateKeyedObjectElementAccessor('array', 'inject', Inject);
Wrappers.prototype.injectOwnershipVariables = util.generateKeyedObjectElementAccessor('array', 'inject-ownership-variables', InjectOwnershipVariables);
Wrappers.prototype.injectPasswords = util.generateKeyedObjectElementAccessor('array', 'inject-passwords', InjectPasswords);
Wrappers.prototype.jclouds = util.generateKeyedObjectElementAccessor('array', 'jclouds', JClouds);
Wrappers.prototype.jobLogLogger = util.generateKeyedObjectElementAccessor('array', 'job-log-logger', JobLogLogger);
Wrappers.prototype.liveScreenshot = util.generateKeyedObjectElementAccessor('array', 'live-screenshot', LiveScreenshot);
Wrappers.prototype.locks = util.generatePrimitiveArrayAccessor('array', 'locks');
Wrappers.prototype.logFileSize = util.generateKeyedObjectElementAccessor('array', 'logfilesize', LogFileSize);
Wrappers.prototype.logStash = util.generateKeyedObjectElementAccessor('array', 'logstash', LogStash);
Wrappers.prototype.m2RepositoryCleanup = util.generateKeyedObjectElementAccessor('array', 'm2-repository-cleanup', M2RepositoryCleanup);
Wrappers.prototype.maskPasswords = util.generateKeyedObjectElementAccessor('array', 'mask-passwords', MaskPasswords);
Wrappers.prototype.matrixTieParent = util.generateKeyedObjectElementAccessor('array', 'matrix-tie-parent', MatrixTieParent);
Wrappers.prototype.mongoDb = util.generateKeyedObjectElementAccessor('array', 'mongo-db', MongoDb);
Wrappers.prototype.pathIgnore = util.generateKeyedObjectElementAccessor('array', 'pathignore', PathIgnore);
Wrappers.prototype.portAllocator = util.generateKeyedObjectElementAccessor('array', 'port-allocator', PortAllocator);
Wrappers.prototype.preScmBuildStep = util.generateKeyedObjectElementAccessor('array', 'pre-scm-buildstep', PreScmBuildstep);
Wrappers.prototype.rbEnv = util.generateKeyedObjectElementAccessor('array', 'rbenv', Rbenv);
Wrappers.prototype.release = util.generateKeyedObjectElementAccessor('array', 'release', Release);
Wrappers.prototype.rvmEnv = util.generateKeyedObjectElementAccessor('array', 'rvm-env', RvmEnv);
Wrappers.prototype.sauceOnDemand = util.generateKeyedObjectElementAccessor('array', 'sauce-ondemand', SauceOndemand);
Wrappers.prototype.sshAgentCredentials = util.generateKeyedObjectElementAccessor('array', 'ssh-agent-credentials', SshAgentCredentials);
Wrappers.prototype.timeout = util.generateKeyedObjectElementAccessor('array', 'timeout', Timeout);
Wrappers.prototype.timestamps = util.generateKeyedObjectElementAccessor('array', 'timestamps', Timestamps);
Wrappers.prototype.workspaceCleanup = util.generateKeyedObjectElementAccessor('array', 'workspace-cleanup', WorkspaceCleanup);
Wrappers.prototype.xvfb = util.generateKeyedObjectElementAccessor('array', 'xvfb', Xvfb);
Wrappers.prototype.xvnc = util.generateKeyedObjectElementAccessor('array', 'xvnc', Xvnc);

module.exports = Wrappers;
