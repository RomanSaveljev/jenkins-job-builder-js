'use strict';
var util$915 = require('../../misc/util.js');
var Ant$916 = require('./builders/ant.js');
var ArtifactResolver$917 = require('./builders/artifact-resolver.js');
var Beaker$918 = require('./builders/beaker.js');
var ChangeAssemblyVersion$919 = require('./builders/change-assembly-version.js');
var Cmake$920 = require('./builders/cmake.js');
var ConditionalStep$921 = require('./builders/conditional-step.js');
var ConfigFileProvider$922 = require('./wrappers/config-file-provider.js');
var CopyArtifact$923 = require('./builders/copyartifact.js');
var CriticalBlockEnd$924 = require('../../misc/empty-proxy.js');
var CriticalBlockStart$925 = require('../../misc/empty-proxy.js');
var DSL$926 = require('./builders/dsl.js');
var GithubNotifier$927 = require('../../misc/empty-proxy.js');
var Gradle$928 = require('./builders/gradle.js');
var Groovy$929 = require('./builders/groovy.js');
var Inject$930 = require('./wrappers/inject.js');
var ManagedScript$931 = require('./builders/managed-script.js');
var MavenBuilder$932 = require('./builders/maven-builder.js');
var MavenTarget$933 = require('./builders/maven-target.js');
var Msbuild$934 = require('./builders/msbuild.js');
var Multijob$935 = require('./builders/multijob.js');
var SBT$936 = require('./builders/sbt.js');
var ShiningPanda$937 = require('./builders/shining-panda.js');
var Sonar$938 = require('./builders/sonar.js');
var SonatypeClm$939 = require('./builders/sonatype-clm.js');
var SshBuilder$940 = require('./builders/ssh-builder.js');
var SystemGroovy$941 = require('./builders/system-groovy.js');
var Project$942 = require('./builders/project.js');
var TriggerRemote$943 = require('./builders/trigger-remote.js');
var Grails$944 = require('./builders/grails.js');
var Builders$946 = function (upper$981, array$982) {
    this.upper = upper$981;
    this.array = array$982;
};
Builders$946.prototype.up = function () {
    return this.upper;
};
Builders$946.prototype.and = Builders$946.prototype.up;
module.exports = Builders$946;
Builders$946.prototype[util$915.camelize('ant')] = function (value$983) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'ant',
        Ant$916,
        value$983
    ]);
};
Builders$946.prototype[util$915.camelize('artifact-resolver')] = function (value$984) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'artifact-resolver',
        ArtifactResolver$917,
        value$984
    ]);
};
Builders$946.prototype[util$915.camelize('batch')] = function (value$985) {
    return util$915.keyedPrimitiveElementAccessor.apply(this, [
        'batch',
        value$985
    ]);
};
Builders$946.prototype[util$915.camelize('beaker')] = function (value$986) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'beaker',
        Beaker$918,
        value$986
    ]);
};
Builders$946.prototype[util$915.camelize('builders-from')] = function (value$987) {
    return util$915.keyedPrimitiveElementAccessor.apply(this, [
        'builders-from',
        value$987
    ]);
};
Builders$946.prototype[util$915.camelize('change-assembly-version')] = function (value$988) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'change-assembly-version',
        ChangeAssemblyVersion$919,
        value$988
    ]);
};
Builders$946.prototype[util$915.camelize('cmake')] = function (value$989) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'cmake',
        Cmake$920,
        value$989
    ]);
};
Builders$946.prototype[util$915.camelize('conditional-step')] = function (value$990) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'conditional-step',
        ConditionalStep$921,
        value$990
    ]);
};
Builders$946.prototype[util$915.camelize('config-file-provider')] = function (value$991) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'config-file-provider',
        ConfigFileProvider$922,
        value$991
    ]);
};
Builders$946.prototype[util$915.camelize('copyartifact')] = function (value$992) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'copyartifact',
        CopyArtifact$923,
        value$992
    ]);
};
Builders$946.prototype[util$915.camelize('critical-block-end')] = function (value$993) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'critical-block-end',
        CriticalBlockEnd$924,
        value$993
    ]);
};
Builders$946.prototype[util$915.camelize('critical-block-start')] = function (value$994) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'critical-block-start',
        CriticalBlockStart$925,
        value$994
    ]);
};
Builders$946.prototype[util$915.camelize('dsl')] = function (value$995) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'dsl',
        DSL$926,
        value$995
    ]);
};
Builders$946.prototype[util$915.camelize('github-notifier')] = function (value$996) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'github-notifier',
        GithubNotifier$927,
        value$996
    ]);
};
Builders$946.prototype[util$915.camelize('gradle')] = function (value$997) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'gradle',
        Gradle$928,
        value$997
    ]);
};
Builders$946.prototype[util$915.camelize('grails')] = function (value$998) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'grails',
        Grails$944,
        value$998
    ]);
};
Builders$946.prototype[util$915.camelize('groovy')] = function (value$999) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'groovy',
        Groovy$929,
        value$999
    ]);
};
Builders$946.prototype[util$915.camelize('inject')] = function (value$1000) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'inject',
        Inject$930,
        value$1000
    ]);
};
Builders$946.prototype[util$915.camelize('managed-script')] = function (value$1001) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'managed-script',
        ManagedScript$931,
        value$1001
    ]);
};
Builders$946.prototype[util$915.camelize('maven-builder')] = function (value$1002) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'maven-builder',
        MavenBuilder$932,
        value$1002
    ]);
};
Builders$946.prototype[util$915.camelize('maven-target')] = function (value$1003) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'maven-target',
        MavenTarget$933,
        value$1003
    ]);
};
Builders$946.prototype[util$915.camelize('msbuild')] = function (value$1004) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'msbuild',
        Msbuild$934,
        value$1004
    ]);
};
Builders$946.prototype[util$915.camelize('multijob')] = function (value$1005) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'multijob',
        Multijob$935,
        value$1005
    ]);
};
Builders$946.prototype[util$915.camelize('powershell')] = function (value$1006) {
    return util$915.keyedPrimitiveElementAccessor.apply(this, [
        'powershell',
        value$1006
    ]);
};
Builders$946.prototype[util$915.camelize('python')] = function (value$1007) {
    return util$915.keyedPrimitiveElementAccessor.apply(this, [
        'python',
        value$1007
    ]);
};
Builders$946.prototype[util$915.camelize('sbt')] = function (value$1008) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'sbt',
        SBT$936,
        value$1008
    ]);
};
Builders$946.prototype[util$915.camelize('shell')] = function (value$1009) {
    return util$915.keyedPrimitiveElementAccessor.apply(this, [
        'shell',
        value$1009
    ]);
};
Builders$946.prototype[util$915.camelize('shining-panda')] = function (value$1010) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'shining-panda',
        ShiningPanda$937,
        value$1010
    ]);
};
Builders$946.prototype[util$915.camelize('sonar')] = function (value$1011) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'sonar',
        Sonar$938,
        value$1011
    ]);
};
Builders$946.prototype[util$915.camelize('sonatype-clm')] = function (value$1012) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'sonatype-clm',
        SonatypeClm$939,
        value$1012
    ]);
};
Builders$946.prototype[util$915.camelize('ssh-builder')] = function (value$1013) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'ssh-builder',
        SshBuilder$940,
        value$1013
    ]);
};
Builders$946.prototype[util$915.camelize('system-groovy')] = function (value$1014) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'system-groovy',
        SystemGroovy$941,
        value$1014
    ]);
};
Builders$946.prototype[util$915.camelize('trigger-builds')] = function (value$1015) {
    return util$915.keyedArrayElementAccessor.apply(this, [
        'trigger-builds',
        Project$942,
        value$1015
    ]);
};
Builders$946.prototype[util$915.camelize('trigger-remote')] = function (value$1016) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'trigger-remote',
        TriggerRemote$943,
        value$1016
    ]);
};