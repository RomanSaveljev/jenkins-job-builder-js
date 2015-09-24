'use strict';
var util$940 = require('../misc/util.js');
var Wrappers$941 = require('./job/wrappers.js');
var Builders$942 = require('./job/builders.js');
var HipChat$943 = require('./job/hipchat.js');
var Maven$944 = require('./job/maven.js');
var ExecutionStrategy$945 = require('./job/execution-strategy.js');
var Axes$946 = require('./job/axes.js');
var Metadata$947 = require('./job/metadata.js');
var Notifications$948 = require('./job/notifications.js');
var Parameters$949 = require('./job/parameters.js');
var Properties$950 = require('./job/properties.js');
var Publishers$951 = require('./job/publishers.js');
var Reporters$952 = require('./job/reporters.js');
var Scm$953 = require('./job/scm.js');
var Triggers$954 = require('./job/triggers.js');
var Job$956 = function (upper$978, obj$979) {
    this.upper = upper$978;
    this.obj = obj$979;
};
Job$956.prototype.up = function () {
    return this.upper;
};
Job$956.prototype.and = Job$956.prototype.up;
module.exports = Job$956;
Job$956.prototype.clone = function () {
    var job$980 = new Job$956();
    job$980.job = fancyDeepClone(this.job);
    return job$980;
};
Job$956.prototype[util$940.camelize('name')] = function (value$981) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$981
    ]);
};
Job$956.prototype[util$940.camelize('description')] = function (value$982) {
    return util$940.primitiveAccessor.apply(this, [
        'description',
        value$982
    ]);
};
Job$956.prototype[util$940.camelize('node')] = function (value$983) {
    return util$940.primitiveAccessor.apply(this, [
        'node',
        value$983
    ]);
};
Job$956.prototype[util$940.camelize('project-type')] = function (value$984) {
    return util$940.primitiveAccessor.apply(this, [
        'project-type',
        value$984
    ]);
};
Job$956.prototype[util$940.camelize('dsl')] = function (value$985) {
    return util$940.primitiveAccessor.apply(this, [
        'dsl',
        value$985
    ]);
};
Job$956.prototype[util$940.camelize('needs-workspace')] = function (value$986) {
    return util$940.primitiveAccessor.apply(this, [
        'needs-workspace',
        value$986
    ]);
};
Job$956.prototype[util$940.camelize('dsl-file')] = function (value$987) {
    return util$940.primitiveAccessor.apply(this, [
        'dsl-file',
        value$987
    ]);
};
Job$956.prototype[util$940.camelize('maven')] = function (value$988) {
    return util$940.objectAccessor.apply(this, [
        'maven',
        Maven$944,
        value$988
    ]);
};
Job$956.prototype[util$940.camelize('wrappers')] = function (value$989) {
    return util$940.customArrayAccessor.apply(this, [
        'wrappers',
        Wrappers$941,
        value$989
    ]);
};
Job$956.prototype[util$940.camelize('builders')] = function (value$990) {
    return util$940.customArrayAccessor.apply(this, [
        'builders',
        Builders$942,
        value$990
    ]);
};
Job$956.prototype[util$940.camelize('hipchat')] = function (value$991) {
    return util$940.objectAccessor.apply(this, [
        'hipchat',
        HipChat$943,
        value$991
    ]);
};
Job$956.prototype[util$940.camelize('execution-strategy')] = function (value$992) {
    return util$940.objectAccessor.apply(this, [
        'execution-strategy',
        ExecutionStrategy$945,
        value$992
    ]);
};
Job$956.prototype[util$940.camelize('axes')] = function (value$993) {
    return util$940.customArrayAccessor.apply(this, [
        'axes',
        Axes$946,
        value$993
    ]);
};
Job$956.prototype[util$940.camelize('metadata')] = function (value$994) {
    return util$940.customArrayAccessor.apply(this, [
        'metadata',
        Metadata$947,
        value$994
    ]);
};
Job$956.prototype[util$940.camelize('notifications')] = function (value$995) {
    return util$940.customArrayAccessor.apply(this, [
        'notifications',
        Notifications$948,
        value$995
    ]);
};
Job$956.prototype[util$940.camelize('parameters')] = function (value$996) {
    return util$940.customArrayAccessor.apply(this, [
        'parameters',
        Parameters$949,
        value$996
    ]);
};
Job$956.prototype[util$940.camelize('properties')] = function (value$997) {
    return util$940.customArrayAccessor.apply(this, [
        'properties',
        Properties$950,
        value$997
    ]);
};
Job$956.prototype[util$940.camelize('publishers')] = function (value$998) {
    return util$940.customArrayAccessor.apply(this, [
        'publishers',
        Publishers$951,
        value$998
    ]);
};
Job$956.prototype[util$940.camelize('reporters')] = function (value$999) {
    return util$940.customArrayAccessor.apply(this, [
        'reporters',
        Reporters$952,
        value$999
    ]);
};
Job$956.prototype[util$940.camelize('scm')] = function (value$1000) {
    return util$940.customArrayAccessor.apply(this, [
        'scm',
        Scm$953,
        value$1000
    ]);
};
Job$956.prototype[util$940.camelize('triggers')] = function (value$1001) {
    return util$940.customArrayAccessor.apply(this, [
        'triggers',
        Triggers$954,
        value$1001
    ]);
};