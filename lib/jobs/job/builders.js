'use strict';
var util$940 = require('../../misc/util.js');
var Ant$941 = require('./builders/ant.js');
var ArtifactResolver$942 = require('./builders/artifact-resolver.js');
var Beaker$943 = require('./builders/beaker.js');
var ChangeAssemblyVersion$944 = require('./builders/change-assembly-version.js');
var Cmake$945 = require('./builders/cmake.js');
var ConditionalStep$946 = require('./builders/conditional-step.js');
var ConfigFileProvider$947 = require('./wrappers/config-file-provider.js');
var CopyArtifact$948 = require('./builders/copyartifact.js');
var CriticalBlockEnd$949 = require('../../misc/empty-proxy.js');
var CriticalBlockStart$950 = require('../../misc/empty-proxy.js');
var DSL$951 = require('./builders/dsl.js');
var GithubNotifier$952 = require('../../misc/empty-proxy.js');
var Gradle$953 = require('./builders/gradle.js');
var Groovy$954 = require('./builders/groovy.js');
var Inject$955 = require('./wrappers/inject.js');
var ManagedScript$956 = require('./builders/managed-script.js');
var MavenBuilder$957 = require('./builders/maven-builder.js');
var MavenTarget$958 = require('./builders/maven-target.js');
var Msbuild$959 = require('./builders/msbuild.js');
var Multijob$960 = require('./builders/multijob.js');
var SBT$961 = require('./builders/sbt.js');
var ShiningPanda$962 = require('./builders/shining-panda.js');
var Sonar$963 = require('./builders/sonar.js');
var SonatypeClm$964 = require('./builders/sonatype-clm.js');
var SshBuilder$965 = require('./builders/ssh-builder.js');
var SystemGroovy$966 = require('./builders/system-groovy.js');
var Project$967 = require('./builders/project.js');
var TriggerRemote$968 = require('./builders/trigger-remote.js');
var Grails$969 = require('./builders/grails.js');
var Runscope$970 = require('./builders/runscope.js');
var OpenShiftSvcVerify$971 = require('./builders/openshift-svc-verify.js');
var OpenShiftScaler$972 = require('./builders/openshift-scaler.js');
var Builders$974 = function (upper$1012, array$1013) {
    this.upper = upper$1012;
    this.array = array$1013;
};
Builders$974.prototype.up = function () {
    return this.upper;
};
Builders$974.prototype.and = Builders$974.prototype.up;
module.exports = Builders$974;
Builders$974.prototype[util$940.camelize('ant')] = function (value$1014) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'ant',
        Ant$941,
        value$1014
    ]);
};
Builders$974.prototype[util$940.camelize('artifact-resolver')] = function (value$1015) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'artifact-resolver',
        ArtifactResolver$942,
        value$1015
    ]);
};
Builders$974.prototype[util$940.camelize('batch')] = function (value$1016) {
    return util$940.keyedPrimitiveElementAccessor.apply(this, [
        'batch',
        value$1016
    ]);
};
Builders$974.prototype[util$940.camelize('beaker')] = function (value$1017) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'beaker',
        Beaker$943,
        value$1017
    ]);
};
Builders$974.prototype[util$940.camelize('builders-from')] = function (value$1018) {
    return util$940.keyedPrimitiveElementAccessor.apply(this, [
        'builders-from',
        value$1018
    ]);
};
Builders$974.prototype[util$940.camelize('change-assembly-version')] = function (value$1019) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'change-assembly-version',
        ChangeAssemblyVersion$944,
        value$1019
    ]);
};
Builders$974.prototype[util$940.camelize('cmake')] = function (value$1020) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'cmake',
        Cmake$945,
        value$1020
    ]);
};
Builders$974.prototype[util$940.camelize('conditional-step')] = function (value$1021) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'conditional-step',
        ConditionalStep$946,
        value$1021
    ]);
};
Builders$974.prototype[util$940.camelize('config-file-provider')] = function (value$1022) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'config-file-provider',
        ConfigFileProvider$947,
        value$1022
    ]);
};
Builders$974.prototype[util$940.camelize('copyartifact')] = function (value$1023) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'copyartifact',
        CopyArtifact$948,
        value$1023
    ]);
};
Builders$974.prototype[util$940.camelize('critical-block-end')] = function (value$1024) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'critical-block-end',
        CriticalBlockEnd$949,
        value$1024
    ]);
};
Builders$974.prototype[util$940.camelize('critical-block-start')] = function (value$1025) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'critical-block-start',
        CriticalBlockStart$950,
        value$1025
    ]);
};
Builders$974.prototype[util$940.camelize('dsl')] = function (value$1026) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'dsl',
        DSL$951,
        value$1026
    ]);
};
Builders$974.prototype[util$940.camelize('github-notifier')] = function (value$1027) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'github-notifier',
        GithubNotifier$952,
        value$1027
    ]);
};
Builders$974.prototype[util$940.camelize('gradle')] = function (value$1028) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'gradle',
        Gradle$953,
        value$1028
    ]);
};
Builders$974.prototype[util$940.camelize('grails')] = function (value$1029) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'grails',
        Grails$969,
        value$1029
    ]);
};
Builders$974.prototype[util$940.camelize('groovy')] = function (value$1030) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'groovy',
        Groovy$954,
        value$1030
    ]);
};
Builders$974.prototype[util$940.camelize('inject')] = function (value$1031) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'inject',
        Inject$955,
        value$1031
    ]);
};
Builders$974.prototype[util$940.camelize('managed-script')] = function (value$1032) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'managed-script',
        ManagedScript$956,
        value$1032
    ]);
};
Builders$974.prototype[util$940.camelize('maven-builder')] = function (value$1033) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'maven-builder',
        MavenBuilder$957,
        value$1033
    ]);
};
Builders$974.prototype[util$940.camelize('maven-target')] = function (value$1034) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'maven-target',
        MavenTarget$958,
        value$1034
    ]);
};
Builders$974.prototype[util$940.camelize('msbuild')] = function (value$1035) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'msbuild',
        Msbuild$959,
        value$1035
    ]);
};
Builders$974.prototype[util$940.camelize('multijob')] = function (value$1036) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'multijob',
        Multijob$960,
        value$1036
    ]);
};
Builders$974.prototype[util$940.camelize('powershell')] = function (value$1037) {
    return util$940.keyedPrimitiveElementAccessor.apply(this, [
        'powershell',
        value$1037
    ]);
};
Builders$974.prototype[util$940.camelize('python')] = function (value$1038) {
    return util$940.keyedPrimitiveElementAccessor.apply(this, [
        'python',
        value$1038
    ]);
};
Builders$974.prototype[util$940.camelize('sbt')] = function (value$1039) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'sbt',
        SBT$961,
        value$1039
    ]);
};
Builders$974.prototype[util$940.camelize('shell')] = function (value$1040) {
    return util$940.keyedPrimitiveElementAccessor.apply(this, [
        'shell',
        value$1040
    ]);
};
Builders$974.prototype[util$940.camelize('shining-panda')] = function (value$1041) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'shining-panda',
        ShiningPanda$962,
        value$1041
    ]);
};
Builders$974.prototype[util$940.camelize('sonar')] = function (value$1042) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'sonar',
        Sonar$963,
        value$1042
    ]);
};
Builders$974.prototype[util$940.camelize('sonatype-clm')] = function (value$1043) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'sonatype-clm',
        SonatypeClm$964,
        value$1043
    ]);
};
Builders$974.prototype[util$940.camelize('ssh-builder')] = function (value$1044) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'ssh-builder',
        SshBuilder$965,
        value$1044
    ]);
};
Builders$974.prototype[util$940.camelize('system-groovy')] = function (value$1045) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'system-groovy',
        SystemGroovy$966,
        value$1045
    ]);
};
Builders$974.prototype[util$940.camelize('trigger-builds')] = function (value$1046) {
    return util$940.keyedArrayElementAccessor.apply(this, [
        'trigger-builds',
        Project$967,
        value$1046
    ]);
};
Builders$974.prototype[util$940.camelize('trigger-remote')] = function (value$1047) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'trigger-remote',
        TriggerRemote$968,
        value$1047
    ]);
};
Builders$974.prototype[util$940.camelize('runscope')] = function (value$1048) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'runscope',
        Runscope$970,
        value$1048
    ]);
};
Builders$974.prototype[util$940.camelize('openshift-svc-verify')] = function (value$1049) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'openshift-svc-verify',
        OpenShiftSvcVerify$971,
        value$1049
    ]);
};
Builders$974.prototype[util$940.camelize('openshift-scaler')] = function (value$1050) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'openshift-scaler',
        OpenShiftScaler$972,
        value$1050
    ]);
};