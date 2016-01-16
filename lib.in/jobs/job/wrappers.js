"use strict";

var util = require('../../misc/util.js');
var Inject = require('./wrappers/inject.js');
var AndroidEmulator = require('./wrappers/android-emulator.js');
var Ansicolor = require('./wrappers/ansicolor.js');
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
var LogFileSize = require('./wrappers/logfilesize.js');
var LogStash = require('./wrappers/logstash.js');
var M2RepositoryCleanup = require('./wrappers/m2-repository-cleanup.js');
var MatrixTieParent = require('./wrappers/matrix-tie-parent.js');
var MongoDb = require('./wrappers/mongo-db.js');
var PathIgnore = require('./wrappers/pathignore.js');
var PortAllocator = require('./wrappers/port-allocator.js');
var Rbenv = require('./wrappers/rbenv.js');
var PreScmBuildstep = require('./builders.js');
var Release = require('./wrappers/release.js');
var RvmEnv = require('./wrappers/rvm-env.js');
var SauceOndemand = require('./wrappers/sauce-ondemand.js');
var NodeJsInstallator = require('./wrappers/nodejs-installator.js');
var ArtifactoryMaven = require('./wrappers/artifactory-maven.js');

uppableArrayProxy(Wrappers)
keyedObjectElement(util, Wrappers, 'android-emulator', AndroidEmulator)
keyedObjectElement(util, Wrappers, 'ansicolor', Ansicolor)
keyedObjectElement(util, Wrappers, 'build-name', BuildName)
keyedObjectElement(util, Wrappers, 'build-user-vars', BuildUserVars)
keyedObjectElement(util, Wrappers, 'ci-skip', CiSkip)
keyedObjectElement(util, Wrappers, 'config-file-provider', ConfigFileProvider)
keyedObjectElement(util, Wrappers, 'copy-to-slave', CopyToSlave)
keyedArrayElement(util, Wrappers, 'credentials-binding', CredentialsBinding)
keyedObjectElement(util, Wrappers, 'custom-tools', CustomTools)
keyedObjectElement(util, Wrappers, 'delivery-pipeline', DeliveryPipeline)
keyedObjectElement(util, Wrappers, 'env-file', EnvFile)
keyedObjectElement(util, Wrappers, 'env-script', EnvScript)
keyedObjectElement(util, Wrappers, 'exclusion', Exclusion)
keyedObjectElement(util, Wrappers, 'inject', Inject)
keyedObjectElement(util, Wrappers, 'inject-ownership-variables', InjectOwnershipVariables)
keyedObjectElement(util, Wrappers, 'inject-passwords', InjectPasswords)
keyedObjectElement(util, Wrappers, 'jclouds', JClouds)
keyedObjectElement(util, Wrappers, 'job-log-logger', JobLogLogger)
keyedObjectElement(util, Wrappers, 'live-screenshot', LiveScreenshot)
keyedPrimitiveArrayElement(util, Wrappers, 'locks')
keyedObjectElement(util, Wrappers, 'logfilesize', LogFileSize)
keyedObjectElement(util, Wrappers, 'logstash', LogStash)
keyedObjectElement(util, Wrappers, 'm2-repository-cleanup', M2RepositoryCleanup)
keyedObjectElement(util, Wrappers, 'mask-passwords', MaskPasswords)
keyedObjectElement(util, Wrappers, 'matrix-tie-parent', MatrixTieParent)
keyedObjectElement(util, Wrappers, 'mongo-db', MongoDb)
keyedObjectElement(util, Wrappers, 'pathignore', PathIgnore)
keyedObjectElement(util, Wrappers, 'port-allocator', PortAllocator)
keyedObjectElement(util, Wrappers, 'pre-scm-buildstep', PreScmBuildstep)
keyedObjectElement(util, Wrappers, 'rbenv', Rbenv)
keyedObjectElement(util, Wrappers, 'release', Release)
keyedObjectElement(util, Wrappers, 'rvm-env', RvmEnv)
keyedObjectElement(util, Wrappers, 'sauce-ondemand', SauceOndemand)
keyedObjectElement(util, Wrappers, 'ssh-agent-credentials', SshAgentCredentials)
keyedObjectElement(util, Wrappers, 'timeout', Timeout)
keyedObjectElement(util, Wrappers, 'timestamps', Timestamps)
keyedObjectElement(util, Wrappers, 'workspace-cleanup', WorkspaceCleanup)
keyedObjectElement(util, Wrappers, 'xvfb', Xvfb)
keyedObjectElement(util, Wrappers, 'xvnc', Xvnc)
keyedObjectElement(util, Wrappers, 'nodejs-installator', NodeJsInstallator)
keyedObjectElement(util, Wrappers, 'artifactory-maven', ArtifactoryMaven)
