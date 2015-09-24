'use strict';
var util$915 = require('../../misc/util.js');
var Inject$916 = require('./wrappers/inject.js');
var BuildName$917 = require('./wrappers/build-name.js');
var Xvnc$918 = require('./wrappers/xvnc.js');
var Xvfb$919 = require('./wrappers/xvfb.js');
var WorkspaceCleanup$920 = require('./wrappers/workspace-cleanup.js');
var Timeout$921 = require('./wrappers/timeout.js');
var SshAgentCredentials$922 = require('./wrappers/ssh-agent-credentials.js');
var CopyToSlave$923 = require('./wrappers/copy-to-slave.js');
var CustomTools$924 = require('./wrappers/custom-tools.js');
var DeliveryPipeline$925 = require('./wrappers/delivery-pipeline.js');
var ConfigFileProvider$926 = require('./wrappers/config-file-provider.js');
var Ansicolor$927 = require('./wrappers/ansicolor.js');
var CredentialsBinding$928 = require('./wrappers/credentials-binding.js');
var EnvFile$929 = require('./wrappers/env-file.js');
var EnvScript$930 = require('./wrappers/env-script.js');
var BuildUserVars$931 = require('../../misc/empty-proxy.js');
var CiSkip$932 = require('../../misc/empty-proxy.js');
var MaskPasswords$933 = require('../../misc/empty-proxy.js');
var Timestamps$934 = require('../../misc/empty-proxy.js');
var Exclusion$935 = require('./wrappers/exclusion.js');
var InjectOwnershipVariables$936 = require('./wrappers/inject-ownership-variables.js');
var InjectPasswords$937 = require('./wrappers/inject-passwords.js');
var JClouds$938 = require('./wrappers/jclouds.js');
var JobLogLogger$939 = require('./wrappers/job-log-logger.js');
var LiveScreenshot$940 = require('./wrappers/live-screenshot.js');
var LogFileSize$941 = require('./wrappers/logfilesize.js');
var LogStash$942 = require('./wrappers/logstash.js');
var M2RepositoryCleanup$943 = require('./wrappers/m2-repository-cleanup.js');
var MatrixTieParent$944 = require('./wrappers/matrix-tie-parent.js');
var MongoDb$945 = require('./wrappers/mongo-db.js');
var PathIgnore$946 = require('./wrappers/pathignore.js');
var PortAllocator$947 = require('./wrappers/port-allocator.js');
var Rbenv$948 = require('./wrappers/rbenv.js');
var PreScmBuildstep$949 = require('./builders.js');
var Release$950 = require('./wrappers/release.js');
var RvmEnv$951 = require('./wrappers/rvm-env.js');
var SauceOndemand$952 = require('./wrappers/sauce-ondemand.js');
var Wrappers$954 = function (upper$993, array$994) {
    this.upper = upper$993;
    this.array = array$994;
};
Wrappers$954.prototype.up = function () {
    return this.upper;
};
Wrappers$954.prototype.and = Wrappers$954.prototype.up;
module.exports = Wrappers$954;
Wrappers$954.prototype[util$915.camelize('ansicolor')] = function (value$995) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'ansicolor',
        Ansicolor$927,
        value$995
    ]);
};
Wrappers$954.prototype[util$915.camelize('build-name')] = function (value$996) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'build-name',
        BuildName$917,
        value$996
    ]);
};
Wrappers$954.prototype[util$915.camelize('build-user-vars')] = function (value$997) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'build-user-vars',
        BuildUserVars$931,
        value$997
    ]);
};
Wrappers$954.prototype[util$915.camelize('ci-skip')] = function (value$998) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'ci-skip',
        CiSkip$932,
        value$998
    ]);
};
Wrappers$954.prototype[util$915.camelize('config-file-provider')] = function (value$999) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'config-file-provider',
        ConfigFileProvider$926,
        value$999
    ]);
};
Wrappers$954.prototype[util$915.camelize('copy-to-slave')] = function (value$1000) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'copy-to-slave',
        CopyToSlave$923,
        value$1000
    ]);
};
Wrappers$954.prototype[util$915.camelize('credentials-binding')] = function (value$1001) {
    return util$915.keyedArrayElementAccessor.apply(this, [
        'credentials-binding',
        CredentialsBinding$928,
        value$1001
    ]);
};
Wrappers$954.prototype[util$915.camelize('custom-tools')] = function (value$1002) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'custom-tools',
        CustomTools$924,
        value$1002
    ]);
};
Wrappers$954.prototype[util$915.camelize('delivery-pipeline')] = function (value$1003) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'delivery-pipeline',
        DeliveryPipeline$925,
        value$1003
    ]);
};
Wrappers$954.prototype[util$915.camelize('env-file')] = function (value$1004) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'env-file',
        EnvFile$929,
        value$1004
    ]);
};
Wrappers$954.prototype[util$915.camelize('env-script')] = function (value$1005) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'env-script',
        EnvScript$930,
        value$1005
    ]);
};
Wrappers$954.prototype[util$915.camelize('exclusion')] = function (value$1006) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'exclusion',
        Exclusion$935,
        value$1006
    ]);
};
Wrappers$954.prototype[util$915.camelize('inject')] = function (value$1007) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'inject',
        Inject$916,
        value$1007
    ]);
};
Wrappers$954.prototype[util$915.camelize('inject-ownership-variables')] = function (value$1008) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'inject-ownership-variables',
        InjectOwnershipVariables$936,
        value$1008
    ]);
};
Wrappers$954.prototype[util$915.camelize('inject-passwords')] = function (value$1009) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'inject-passwords',
        InjectPasswords$937,
        value$1009
    ]);
};
Wrappers$954.prototype[util$915.camelize('jclouds')] = function (value$1010) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'jclouds',
        JClouds$938,
        value$1010
    ]);
};
Wrappers$954.prototype[util$915.camelize('job-log-logger')] = function (value$1011) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'job-log-logger',
        JobLogLogger$939,
        value$1011
    ]);
};
Wrappers$954.prototype[util$915.camelize('live-screenshot')] = function (value$1012) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'live-screenshot',
        LiveScreenshot$940,
        value$1012
    ]);
};
Wrappers$954.prototype[util$915.camelize('locks')] = function (value$1013) {
    return util$915.keyedPrimitiveArrayElementAccessor.apply(this, [
        'locks',
        value$1013
    ]);
};
Wrappers$954.prototype[util$915.camelize('logfilesize')] = function (value$1014) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'logfilesize',
        LogFileSize$941,
        value$1014
    ]);
};
Wrappers$954.prototype[util$915.camelize('logstash')] = function (value$1015) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'logstash',
        LogStash$942,
        value$1015
    ]);
};
Wrappers$954.prototype[util$915.camelize('m2-repository-cleanup')] = function (value$1016) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'm2-repository-cleanup',
        M2RepositoryCleanup$943,
        value$1016
    ]);
};
Wrappers$954.prototype[util$915.camelize('mask-passwords')] = function (value$1017) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'mask-passwords',
        MaskPasswords$933,
        value$1017
    ]);
};
Wrappers$954.prototype[util$915.camelize('matrix-tie-parent')] = function (value$1018) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'matrix-tie-parent',
        MatrixTieParent$944,
        value$1018
    ]);
};
Wrappers$954.prototype[util$915.camelize('mongo-db')] = function (value$1019) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'mongo-db',
        MongoDb$945,
        value$1019
    ]);
};
Wrappers$954.prototype[util$915.camelize('pathignore')] = function (value$1020) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'pathignore',
        PathIgnore$946,
        value$1020
    ]);
};
Wrappers$954.prototype[util$915.camelize('port-allocator')] = function (value$1021) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'port-allocator',
        PortAllocator$947,
        value$1021
    ]);
};
Wrappers$954.prototype[util$915.camelize('pre-scm-buildstep')] = function (value$1022) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'pre-scm-buildstep',
        PreScmBuildstep$949,
        value$1022
    ]);
};
Wrappers$954.prototype[util$915.camelize('rbenv')] = function (value$1023) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'rbenv',
        Rbenv$948,
        value$1023
    ]);
};
Wrappers$954.prototype[util$915.camelize('release')] = function (value$1024) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'release',
        Release$950,
        value$1024
    ]);
};
Wrappers$954.prototype[util$915.camelize('rvm-env')] = function (value$1025) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'rvm-env',
        RvmEnv$951,
        value$1025
    ]);
};
Wrappers$954.prototype[util$915.camelize('sauce-ondemand')] = function (value$1026) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'sauce-ondemand',
        SauceOndemand$952,
        value$1026
    ]);
};
Wrappers$954.prototype[util$915.camelize('ssh-agent-credentials')] = function (value$1027) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'ssh-agent-credentials',
        SshAgentCredentials$922,
        value$1027
    ]);
};
Wrappers$954.prototype[util$915.camelize('timeout')] = function (value$1028) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'timeout',
        Timeout$921,
        value$1028
    ]);
};
Wrappers$954.prototype[util$915.camelize('timestamps')] = function (value$1029) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'timestamps',
        Timestamps$934,
        value$1029
    ]);
};
Wrappers$954.prototype[util$915.camelize('workspace-cleanup')] = function (value$1030) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'workspace-cleanup',
        WorkspaceCleanup$920,
        value$1030
    ]);
};
Wrappers$954.prototype[util$915.camelize('xvfb')] = function (value$1031) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'xvfb',
        Xvfb$919,
        value$1031
    ]);
};
Wrappers$954.prototype[util$915.camelize('xvnc')] = function (value$1032) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'xvnc',
        Xvnc$918,
        value$1032
    ]);
};