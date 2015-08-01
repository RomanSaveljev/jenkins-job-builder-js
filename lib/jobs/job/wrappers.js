'use strict';
var util$890 = require('../../misc/util.js');
var Inject$891 = require('./wrappers/inject.js');
var BuildName$892 = require('./wrappers/build-name.js');
var Xvnc$893 = require('./wrappers/xvnc.js');
var Xvfb$894 = require('./wrappers/xvfb.js');
var WorkspaceCleanup$895 = require('./wrappers/workspace-cleanup.js');
var Timeout$896 = require('./wrappers/timeout.js');
var SshAgentCredentials$897 = require('./wrappers/ssh-agent-credentials.js');
var CopyToSlave$898 = require('./wrappers/copy-to-slave.js');
var CustomTools$899 = require('./wrappers/custom-tools.js');
var DeliveryPipeline$900 = require('./wrappers/delivery-pipeline.js');
var ConfigFileProvider$901 = require('./wrappers/config-file-provider.js');
var Ansicolor$902 = require('./wrappers/ansicolor.js');
var CredentialsBinding$903 = require('./wrappers/credentials-binding.js');
var EnvFile$904 = require('./wrappers/env-file.js');
var EnvScript$905 = require('./wrappers/env-script.js');
var BuildUserVars$906 = require('../../misc/empty-proxy.js');
var CiSkip$907 = require('../../misc/empty-proxy.js');
var MaskPasswords$908 = require('../../misc/empty-proxy.js');
var Timestamps$909 = require('../../misc/empty-proxy.js');
var Exclusion$910 = require('./wrappers/exclusion.js');
var InjectOwnershipVariables$911 = require('./wrappers/inject-ownership-variables.js');
var InjectPasswords$912 = require('./wrappers/inject-passwords.js');
var JClouds$913 = require('./wrappers/jclouds.js');
var JobLogLogger$914 = require('./wrappers/job-log-logger.js');
var LiveScreenshot$915 = require('./wrappers/live-screenshot.js');
var LogFileSize$916 = require('./wrappers/log-file-size.js');
var LogStash$917 = require('./wrappers/log-stash.js');
var M2RepositoryCleanup$918 = require('./wrappers/m2-repository-cleanup.js');
var MatrixTieParent$919 = require('./wrappers/matrix-tie-parent.js');
var MongoDb$920 = require('./wrappers/mongo-db.js');
var PathIgnore$921 = require('./wrappers/path-ignore.js');
var PortAllocator$922 = require('./wrappers/port-allocator.js');
var Rbenv$923 = require('./wrappers/rbenv.js');
var PreScmBuildstep$924 = require('../builders.js');
var Release$925 = require('./wrappers/release.js');
var RvmEnv$926 = require('./wrappers/rvm-env.js');
var SauceOndemand$927 = require('./wrappers/sauce-ondemand.js');
uppableArrayProxy(Wrappers);
Wrappers.prototype[util$890.camelize('ansicolor')] = function (value$966) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'ansicolor',
        Ansicolor$902,
        value$966
    ]);
};
Wrappers.prototype[util$890.camelize('build-name')] = function (value$967) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'build-name',
        BuildName$892,
        value$967
    ]);
};
Wrappers.prototype[util$890.camelize('build-user-vars')] = function (value$968) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'build-user-vars',
        BuildUserVars$906,
        value$968
    ]);
};
Wrappers.prototype[util$890.camelize('ci-skip')] = function (value$969) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'ci-skip',
        CiSkip$907,
        value$969
    ]);
};
Wrappers.prototype[util$890.camelize('config-file-provider')] = function (value$970) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'config-file-provider',
        ConfigFileProvider$901,
        value$970
    ]);
};
Wrappers.prototype[util$890.camelize('copy-to-slave')] = function (value$971) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'copy-to-slave',
        CopyToSlave$898,
        value$971
    ]);
};
Wrappers.prototype[util$890.camelize('credentials-binding')] = function (value$972) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'credentials-binding',
        CredentialsBinding$903,
        value$972
    ]);
};
Wrappers.prototype[util$890.camelize('custom-tools')] = function (value$973) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'custom-tools',
        CustomTools$899,
        value$973
    ]);
};
Wrappers.prototype[util$890.camelize('delivery-pipeline')] = function (value$974) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'delivery-pipeline',
        DeliveryPipeline$900,
        value$974
    ]);
};
Wrappers.prototype[util$890.camelize('env-file')] = function (value$975) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'env-file',
        EnvFile$904,
        value$975
    ]);
};
Wrappers.prototype[util$890.camelize('env-script')] = function (value$976) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'env-script',
        EnvScript$905,
        value$976
    ]);
};
Wrappers.prototype[util$890.camelize('exclusion')] = function (value$977) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'exclusion',
        Exclusion$910,
        value$977
    ]);
};
Wrappers.prototype[util$890.camelize('inject')] = function (value$978) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'inject',
        Inject$891,
        value$978
    ]);
};
Wrappers.prototype[util$890.camelize('inject-ownership-variables')] = function (value$979) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'inject-ownership-variables',
        InjectOwnershipVariables$911,
        value$979
    ]);
};
Wrappers.prototype[util$890.camelize('inject-passwords')] = function (value$980) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'inject-passwords',
        InjectPasswords$912,
        value$980
    ]);
};
Wrappers.prototype[util$890.camelize('jclouds')] = function (value$981) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'jclouds',
        JClouds$913,
        value$981
    ]);
};
Wrappers.prototype[util$890.camelize('job-log-logger')] = function (value$982) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'job-log-logger',
        JobLogLogger$914,
        value$982
    ]);
};
Wrappers.prototype[util$890.camelize('live-screenshot')] = function (value$983) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'live-screenshot',
        LiveScreenshot$915,
        value$983
    ]);
};
Wrappers.prototype[util$890.camelize('locks')] = function (value$984) {
    return util$890.keyedPrimitiveArrayElementAccessor.apply(this, [
        'locks',
        value$984
    ]);
};
Wrappers.prototype[util$890.camelize('logfilesize')] = function (value$985) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'logfilesize',
        LogFileSize$916,
        value$985
    ]);
};
Wrappers.prototype[util$890.camelize('logstash')] = function (value$986) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'logstash',
        LogStash$917,
        value$986
    ]);
};
Wrappers.prototype[util$890.camelize('m2-repository-cleanup')] = function (value$987) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'm2-repository-cleanup',
        M2RepositoryCleanup$918,
        value$987
    ]);
};
Wrappers.prototype[util$890.camelize('mask-passwords')] = function (value$988) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'mask-passwords',
        MaskPasswords$908,
        value$988
    ]);
};
Wrappers.prototype[util$890.camelize('matrix-tie-parent')] = function (value$989) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'matrix-tie-parent',
        MatrixTieParent$919,
        value$989
    ]);
};
Wrappers.prototype[util$890.camelize('mongo-db')] = function (value$990) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'mongo-db',
        MongoDb$920,
        value$990
    ]);
};
Wrappers.prototype[util$890.camelize('pathignore')] = function (value$991) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'pathignore',
        PathIgnore$921,
        value$991
    ]);
};
Wrappers.prototype[util$890.camelize('port-allocator')] = function (value$992) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'port-allocator',
        PortAllocator$922,
        value$992
    ]);
};
Wrappers.prototype[util$890.camelize('pre-scm-buildstep')] = function (value$993) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'pre-scm-buildstep',
        PreScmBuildstep$924,
        value$993
    ]);
};
Wrappers.prototype[util$890.camelize('rbenv')] = function (value$994) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'rbenv',
        Rbenv$923,
        value$994
    ]);
};
Wrappers.prototype[util$890.camelize('release')] = function (value$995) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'release',
        Release$925,
        value$995
    ]);
};
Wrappers.prototype[util$890.camelize('rvm-env')] = function (value$996) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'rvm-env',
        RvmEnv$926,
        value$996
    ]);
};
Wrappers.prototype[util$890.camelize('sauce-ondemand')] = function (value$997) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'sauce-ondemand',
        SauceOndemand$927,
        value$997
    ]);
};
Wrappers.prototype[util$890.camelize('ssh-agent-credentials')] = function (value$998) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'ssh-agent-credentials',
        SshAgentCredentials$897,
        value$998
    ]);
};
Wrappers.prototype[util$890.camelize('timeout')] = function (value$999) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'timeout',
        Timeout$896,
        value$999
    ]);
};
Wrappers.prototype[util$890.camelize('timestamps')] = function (value$1000) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'timestamps',
        Timestamps$909,
        value$1000
    ]);
};
Wrappers.prototype[util$890.camelize('workspace-cleanup')] = function (value$1001) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'workspace-cleanup',
        WorkspaceCleanup$895,
        value$1001
    ]);
};
Wrappers.prototype[util$890.camelize('xvfb')] = function (value$1002) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'xvfb',
        Xvfb$894,
        value$1002
    ]);
};
Wrappers.prototype[util$890.camelize('xvnc')] = function (value$1003) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'xvnc',
        Xvnc$893,
        value$1003
    ]);
};