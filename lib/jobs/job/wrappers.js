'use strict';
var util$940 = require('../../misc/util.js');
var Inject$941 = require('./wrappers/inject.js');
var BuildName$942 = require('./wrappers/build-name.js');
var Xvnc$943 = require('./wrappers/xvnc.js');
var Xvfb$944 = require('./wrappers/xvfb.js');
var WorkspaceCleanup$945 = require('./wrappers/workspace-cleanup.js');
var Timeout$946 = require('./wrappers/timeout.js');
var SshAgentCredentials$947 = require('./wrappers/ssh-agent-credentials.js');
var CopyToSlave$948 = require('./wrappers/copy-to-slave.js');
var CustomTools$949 = require('./wrappers/custom-tools.js');
var DeliveryPipeline$950 = require('./wrappers/delivery-pipeline.js');
var ConfigFileProvider$951 = require('./wrappers/config-file-provider.js');
var Ansicolor$952 = require('./wrappers/ansicolor.js');
var CredentialsBinding$953 = require('./wrappers/credentials-binding.js');
var EnvFile$954 = require('./wrappers/env-file.js');
var EnvScript$955 = require('./wrappers/env-script.js');
var BuildUserVars$956 = require('../../misc/empty-proxy.js');
var CiSkip$957 = require('../../misc/empty-proxy.js');
var MaskPasswords$958 = require('../../misc/empty-proxy.js');
var Timestamps$959 = require('../../misc/empty-proxy.js');
var Exclusion$960 = require('./wrappers/exclusion.js');
var InjectOwnershipVariables$961 = require('./wrappers/inject-ownership-variables.js');
var InjectPasswords$962 = require('./wrappers/inject-passwords.js');
var JClouds$963 = require('./wrappers/jclouds.js');
var JobLogLogger$964 = require('./wrappers/job-log-logger.js');
var LiveScreenshot$965 = require('./wrappers/live-screenshot.js');
var LogFileSize$966 = require('./wrappers/logfilesize.js');
var LogStash$967 = require('./wrappers/logstash.js');
var M2RepositoryCleanup$968 = require('./wrappers/m2-repository-cleanup.js');
var MatrixTieParent$969 = require('./wrappers/matrix-tie-parent.js');
var MongoDb$970 = require('./wrappers/mongo-db.js');
var PathIgnore$971 = require('./wrappers/pathignore.js');
var PortAllocator$972 = require('./wrappers/port-allocator.js');
var Rbenv$973 = require('./wrappers/rbenv.js');
var PreScmBuildstep$974 = require('./builders.js');
var Release$975 = require('./wrappers/release.js');
var RvmEnv$976 = require('./wrappers/rvm-env.js');
var SauceOndemand$977 = require('./wrappers/sauce-ondemand.js');
var Wrappers$979 = function (upper$1018, array$1019) {
    this.upper = upper$1018;
    this.array = array$1019;
};
Wrappers$979.prototype.up = function () {
    return this.upper;
};
Wrappers$979.prototype.and = Wrappers$979.prototype.up;
module.exports = Wrappers$979;
Wrappers$979.prototype[util$940.camelize('ansicolor')] = function (value$1020) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'ansicolor',
        Ansicolor$952,
        value$1020
    ]);
};
Wrappers$979.prototype[util$940.camelize('build-name')] = function (value$1021) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'build-name',
        BuildName$942,
        value$1021
    ]);
};
Wrappers$979.prototype[util$940.camelize('build-user-vars')] = function (value$1022) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'build-user-vars',
        BuildUserVars$956,
        value$1022
    ]);
};
Wrappers$979.prototype[util$940.camelize('ci-skip')] = function (value$1023) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'ci-skip',
        CiSkip$957,
        value$1023
    ]);
};
Wrappers$979.prototype[util$940.camelize('config-file-provider')] = function (value$1024) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'config-file-provider',
        ConfigFileProvider$951,
        value$1024
    ]);
};
Wrappers$979.prototype[util$940.camelize('copy-to-slave')] = function (value$1025) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'copy-to-slave',
        CopyToSlave$948,
        value$1025
    ]);
};
Wrappers$979.prototype[util$940.camelize('credentials-binding')] = function (value$1026) {
    return util$940.keyedArrayElementAccessor.apply(this, [
        'credentials-binding',
        CredentialsBinding$953,
        value$1026
    ]);
};
Wrappers$979.prototype[util$940.camelize('custom-tools')] = function (value$1027) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'custom-tools',
        CustomTools$949,
        value$1027
    ]);
};
Wrappers$979.prototype[util$940.camelize('delivery-pipeline')] = function (value$1028) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'delivery-pipeline',
        DeliveryPipeline$950,
        value$1028
    ]);
};
Wrappers$979.prototype[util$940.camelize('env-file')] = function (value$1029) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'env-file',
        EnvFile$954,
        value$1029
    ]);
};
Wrappers$979.prototype[util$940.camelize('env-script')] = function (value$1030) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'env-script',
        EnvScript$955,
        value$1030
    ]);
};
Wrappers$979.prototype[util$940.camelize('exclusion')] = function (value$1031) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'exclusion',
        Exclusion$960,
        value$1031
    ]);
};
Wrappers$979.prototype[util$940.camelize('inject')] = function (value$1032) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'inject',
        Inject$941,
        value$1032
    ]);
};
Wrappers$979.prototype[util$940.camelize('inject-ownership-variables')] = function (value$1033) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'inject-ownership-variables',
        InjectOwnershipVariables$961,
        value$1033
    ]);
};
Wrappers$979.prototype[util$940.camelize('inject-passwords')] = function (value$1034) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'inject-passwords',
        InjectPasswords$962,
        value$1034
    ]);
};
Wrappers$979.prototype[util$940.camelize('jclouds')] = function (value$1035) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'jclouds',
        JClouds$963,
        value$1035
    ]);
};
Wrappers$979.prototype[util$940.camelize('job-log-logger')] = function (value$1036) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'job-log-logger',
        JobLogLogger$964,
        value$1036
    ]);
};
Wrappers$979.prototype[util$940.camelize('live-screenshot')] = function (value$1037) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'live-screenshot',
        LiveScreenshot$965,
        value$1037
    ]);
};
Wrappers$979.prototype[util$940.camelize('locks')] = function (value$1038) {
    return util$940.keyedPrimitiveArrayElementAccessor.apply(this, [
        'locks',
        value$1038
    ]);
};
Wrappers$979.prototype[util$940.camelize('logfilesize')] = function (value$1039) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'logfilesize',
        LogFileSize$966,
        value$1039
    ]);
};
Wrappers$979.prototype[util$940.camelize('logstash')] = function (value$1040) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'logstash',
        LogStash$967,
        value$1040
    ]);
};
Wrappers$979.prototype[util$940.camelize('m2-repository-cleanup')] = function (value$1041) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'm2-repository-cleanup',
        M2RepositoryCleanup$968,
        value$1041
    ]);
};
Wrappers$979.prototype[util$940.camelize('mask-passwords')] = function (value$1042) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'mask-passwords',
        MaskPasswords$958,
        value$1042
    ]);
};
Wrappers$979.prototype[util$940.camelize('matrix-tie-parent')] = function (value$1043) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'matrix-tie-parent',
        MatrixTieParent$969,
        value$1043
    ]);
};
Wrappers$979.prototype[util$940.camelize('mongo-db')] = function (value$1044) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'mongo-db',
        MongoDb$970,
        value$1044
    ]);
};
Wrappers$979.prototype[util$940.camelize('pathignore')] = function (value$1045) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'pathignore',
        PathIgnore$971,
        value$1045
    ]);
};
Wrappers$979.prototype[util$940.camelize('port-allocator')] = function (value$1046) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'port-allocator',
        PortAllocator$972,
        value$1046
    ]);
};
Wrappers$979.prototype[util$940.camelize('pre-scm-buildstep')] = function (value$1047) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'pre-scm-buildstep',
        PreScmBuildstep$974,
        value$1047
    ]);
};
Wrappers$979.prototype[util$940.camelize('rbenv')] = function (value$1048) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'rbenv',
        Rbenv$973,
        value$1048
    ]);
};
Wrappers$979.prototype[util$940.camelize('release')] = function (value$1049) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'release',
        Release$975,
        value$1049
    ]);
};
Wrappers$979.prototype[util$940.camelize('rvm-env')] = function (value$1050) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'rvm-env',
        RvmEnv$976,
        value$1050
    ]);
};
Wrappers$979.prototype[util$940.camelize('sauce-ondemand')] = function (value$1051) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'sauce-ondemand',
        SauceOndemand$977,
        value$1051
    ]);
};
Wrappers$979.prototype[util$940.camelize('ssh-agent-credentials')] = function (value$1052) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'ssh-agent-credentials',
        SshAgentCredentials$947,
        value$1052
    ]);
};
Wrappers$979.prototype[util$940.camelize('timeout')] = function (value$1053) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'timeout',
        Timeout$946,
        value$1053
    ]);
};
Wrappers$979.prototype[util$940.camelize('timestamps')] = function (value$1054) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'timestamps',
        Timestamps$959,
        value$1054
    ]);
};
Wrappers$979.prototype[util$940.camelize('workspace-cleanup')] = function (value$1055) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'workspace-cleanup',
        WorkspaceCleanup$945,
        value$1055
    ]);
};
Wrappers$979.prototype[util$940.camelize('xvfb')] = function (value$1056) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'xvfb',
        Xvfb$944,
        value$1056
    ]);
};
Wrappers$979.prototype[util$940.camelize('xvnc')] = function (value$1057) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'xvnc',
        Xvnc$943,
        value$1057
    ]);
};