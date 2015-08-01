'use strict';
var util$890 = require('../../misc/util.js');
var Ant$891 = require('./builders/ant.js');
var ArtifactResolver$892 = require('./builders/artifact-resolver.js');
var Beaker$893 = require('./builders/beaker.js');
var ChangeAssemblyVersion$894 = require('./builders/change-assembly-version.js');
var Cmake$895 = require('./builders/cmake.js');
var ConditionalStep$896 = require('./builders/conditional-step.js');
var ConfigFileProvider$897 = require('./wrappers/config-file-provider.js');
var CopyArtifact$898 = require('./builders/copy-artifact.js');
var CriticalBlockEnd$899 = require('../../misc/empty-proxy.js');
var CriticalBlockStart$900 = require('../../misc/empty-proxy.js');
var DSL$901 = require('./builders/dsl.js');
var GithubNotifier$902 = require('../../misc/empty-proxy.js');
var Gradle$903 = require('./builders/gradle.js');
var Groovy$904 = require('./builders/groovy.js');
var Inject$905 = require('./wrappers/inject.js');
var ManagedScript$906 = require('./builders/managed-script.js');
var MavenBuilder$907 = require('./builders/maven-builder.js');
var MavenTarget$908 = require('./builders/maven-target.js');
var Msbuild$909 = require('./builders/msbuild.js');
var Multijob$910 = require('./builders/multijob.js');
var SBT$911 = require('./builders/sbt.js');
var ShiningPanda$912 = require('./builders/shining-panda.js');
var Sonar$913 = require('./builders/sonar.js');
var SonatypeClm$914 = require('./builders/sonatype-clm.js');
var SshBuilder$915 = require('./builders/ssh-builder.js');
var SystemGroovy$916 = require('./builders/system-groovy.js');
var Project$917 = require('./builders/project.js');
var TriggerRemote$918 = require('./builders/trigger-remote.js');
var Builders$920 = function (upper$955, array$956) {
    this.upper = upper$955;
    this.array = array$956;
};
Builders$920.prototype.up = function () {
    return this.upper;
};
Builders$920.prototype.and = Builders$920.prototype.up;
module.exports = Builders$920;
Builders$920.prototype[util$890.camelize('ant')] = function (value$957) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'ant',
        Ant$891,
        value$957
    ]);
};
Builders$920.prototype[util$890.camelize('artifact-resolver')] = function (value$958) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'artifact-resolver',
        ArtifactResolver$892,
        value$958
    ]);
};
Builders$920.prototype[util$890.camelize('batch')] = function (value$959) {
    return util$890.keyedPrimitiveElementAccessor.apply(this, [
        'batch',
        value$959
    ]);
};
Builders$920.prototype[util$890.camelize('beaker')] = function (value$960) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'beaker',
        Beaker$893,
        value$960
    ]);
};
Builders$920.prototype[util$890.camelize('builders-from')] = function (value$961) {
    return util$890.keyedPrimitiveElementAccessor.apply(this, [
        'builders-from',
        value$961
    ]);
};
Builders$920.prototype[util$890.camelize('change-assembly-version')] = function (value$962) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'change-assembly-version',
        ChangeAssemblyVersion$894,
        value$962
    ]);
};
Builders$920.prototype[util$890.camelize('cmake')] = function (value$963) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'cmake',
        Cmake$895,
        value$963
    ]);
};
Builders$920.prototype[util$890.camelize('conditional-step')] = function (value$964) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'conditional-step',
        ConditionalStep$896,
        value$964
    ]);
};
Builders$920.prototype[util$890.camelize('config-file-provider')] = function (value$965) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'config-file-provider',
        ConfigFileProvider$897,
        value$965
    ]);
};
Builders$920.prototype[util$890.camelize('copy-artifact')] = function (value$966) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'copy-artifact',
        CopyArtifact$898,
        value$966
    ]);
};
Builders$920.prototype[util$890.camelize('critical-block-end')] = function (value$967) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'critical-block-end',
        CriticalBlockEnd$899,
        value$967
    ]);
};
Builders$920.prototype[util$890.camelize('critical-block-start')] = function (value$968) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'critical-block-start',
        CriticalBlockStart$900,
        value$968
    ]);
};
Builders$920.prototype[util$890.camelize('dsl')] = function (value$969) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'dsl',
        DSL$901,
        value$969
    ]);
};
Builders$920.prototype[util$890.camelize('github-notifier')] = function (value$970) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'github-notifier',
        GithubNotifier$902,
        value$970
    ]);
};
Builders$920.prototype[util$890.camelize('gradle')] = function (value$971) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'gradle',
        Gradle$903,
        value$971
    ]);
};
Builders$920.prototype[util$890.camelize('grails')] = function (value$972) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'grails',
        Grails,
        value$972
    ]);
};
Builders$920.prototype[util$890.camelize('groovy')] = function (value$973) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'groovy',
        Groovy$904,
        value$973
    ]);
};
Builders$920.prototype[util$890.camelize('inject')] = function (value$974) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'inject',
        Inject$905,
        value$974
    ]);
};
Builders$920.prototype[util$890.camelize('managed-script')] = function (value$975) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'managed-script',
        ManagedScript$906,
        value$975
    ]);
};
Builders$920.prototype[util$890.camelize('maven-builder')] = function (value$976) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'maven-builder',
        MavenBuilder$907,
        value$976
    ]);
};
Builders$920.prototype[util$890.camelize('maven-target')] = function (value$977) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'maven-target',
        MavenTarget$908,
        value$977
    ]);
};
Builders$920.prototype[util$890.camelize('msbuild')] = function (value$978) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'msbuild',
        Msbuild$909,
        value$978
    ]);
};
Builders$920.prototype[util$890.camelize('multijob')] = function (value$979) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'multijob',
        Multijob$910,
        value$979
    ]);
};
Builders$920.prototype[util$890.camelize('powershell')] = function (value$980) {
    return util$890.keyedPrimitiveElementAccessor.apply(this, [
        'powershell',
        value$980
    ]);
};
Builders$920.prototype[util$890.camelize('python')] = function (value$981) {
    return util$890.keyedPrimitiveElementAccessor.apply(this, [
        'python',
        value$981
    ]);
};
Builders$920.prototype[util$890.camelize('sbt')] = function (value$982) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'sbt',
        SBT$911,
        value$982
    ]);
};
Builders$920.prototype[util$890.camelize('shell')] = function (value$983) {
    return util$890.keyedPrimitiveElementAccessor.apply(this, [
        'shell',
        value$983
    ]);
};
Builders$920.prototype[util$890.camelize('shining-panda')] = function (value$984) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'shining-panda',
        ShiningPanda$912,
        value$984
    ]);
};
Builders$920.prototype[util$890.camelize('sonar')] = function (value$985) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'sonar',
        Sonar$913,
        value$985
    ]);
};
Builders$920.prototype[util$890.camelize('sonatype-clm')] = function (value$986) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'sonatype-clm',
        SonatypeClm$914,
        value$986
    ]);
};
Builders$920.prototype[util$890.camelize('ssh-builder')] = function (value$987) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'ssh-builder',
        SshBuilder$915,
        value$987
    ]);
};
Builders$920.prototype[util$890.camelize('system-groovy')] = function (value$988) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'system-groovy',
        SystemGroovy$916,
        value$988
    ]);
};
Builders$920.prototype[util$890.camelize('trigger-builds')] = function (value$989) {
    return util$890.keyedArrayElementAccessor.apply(this, [
        'trigger-builds',
        Project$917,
        value$989
    ]);
};
Builders$920.prototype[util$890.camelize('trigger-remote')] = function (value$990) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'trigger-remote',
        TriggerRemote$918,
        value$990
    ]);
};