'use strict';
var util$940 = require('../misc/util.js');
var Wrappers$941 = require('./job/wrappers.js');
var Builders$942 = require('./job/builders.js');
var HipChat$943 = require('./job/hipchat.js');
var LogRotate$944 = require('./job/logrotate.js');
var Maven$945 = require('./job/maven.js');
var ExecutionStrategy$946 = require('./job/execution-strategy.js');
var Axes$947 = require('./job/axes.js');
var Metadata$948 = require('./job/metadata.js');
var Notifications$949 = require('./job/notifications.js');
var Parameters$950 = require('./job/parameters.js');
var Properties$951 = require('./job/properties.js');
var Publishers$952 = require('./job/publishers.js');
var Reporters$953 = require('./job/reporters.js');
var Scm$954 = require('./job/scm.js');
var Triggers$955 = require('./job/triggers.js');
var Job$957 = function (upper$980, obj$981) {
    this.upper = upper$980;
    this.obj = obj$981;
};
Job$957.prototype.up = function () {
    return this.upper;
};
Job$957.prototype.and = Job$957.prototype.up;
module.exports = Job$957;
Job$957.prototype.clone = function () {
    var job$982 = new Job$957();
    job$982.job = fancyDeepClone(this.job);
    return job$982;
};
Job$957.prototype[util$940.camelize('name')] = function (value$983) {
    return util$940.primitiveAccessor.apply(this, [
        'name',
        value$983
    ]);
};
Job$957.prototype[util$940.camelize('description')] = function (value$984) {
    return util$940.primitiveAccessor.apply(this, [
        'description',
        value$984
    ]);
};
Job$957.prototype[util$940.camelize('node')] = function (value$985) {
    return util$940.primitiveAccessor.apply(this, [
        'node',
        value$985
    ]);
};
Job$957.prototype[util$940.camelize('project-type')] = function (value$986) {
    return util$940.primitiveAccessor.apply(this, [
        'project-type',
        value$986
    ]);
};
Job$957.prototype[util$940.camelize('dsl')] = function (value$987) {
    return util$940.primitiveAccessor.apply(this, [
        'dsl',
        value$987
    ]);
};
Job$957.prototype[util$940.camelize('needs-workspace')] = function (value$988) {
    return util$940.primitiveAccessor.apply(this, [
        'needs-workspace',
        value$988
    ]);
};
Job$957.prototype[util$940.camelize('dsl-file')] = function (value$989) {
    return util$940.primitiveAccessor.apply(this, [
        'dsl-file',
        value$989
    ]);
};
Job$957.prototype[util$940.camelize('logrotate')] = function (value$990) {
    return util$940.objectAccessor.apply(this, [
        'logrotate',
        LogRotate$944,
        value$990
    ]);
};
Job$957.prototype[util$940.camelize('maven')] = function (value$991) {
    return util$940.objectAccessor.apply(this, [
        'maven',
        Maven$945,
        value$991
    ]);
};
Job$957.prototype[util$940.camelize('wrappers')] = function (value$992) {
    return util$940.customArrayAccessor.apply(this, [
        'wrappers',
        Wrappers$941,
        value$992
    ]);
};
Job$957.prototype[util$940.camelize('builders')] = function (value$993) {
    return util$940.customArrayAccessor.apply(this, [
        'builders',
        Builders$942,
        value$993
    ]);
};
Job$957.prototype[util$940.camelize('hipchat')] = function (value$994) {
    return util$940.objectAccessor.apply(this, [
        'hipchat',
        HipChat$943,
        value$994
    ]);
};
Job$957.prototype[util$940.camelize('execution-strategy')] = function (value$995) {
    return util$940.objectAccessor.apply(this, [
        'execution-strategy',
        ExecutionStrategy$946,
        value$995
    ]);
};
Job$957.prototype[util$940.camelize('axes')] = function (value$996) {
    return util$940.customArrayAccessor.apply(this, [
        'axes',
        Axes$947,
        value$996
    ]);
};
Job$957.prototype[util$940.camelize('metadata')] = function (value$997) {
    return util$940.customArrayAccessor.apply(this, [
        'metadata',
        Metadata$948,
        value$997
    ]);
};
Job$957.prototype[util$940.camelize('notifications')] = function (value$998) {
    return util$940.customArrayAccessor.apply(this, [
        'notifications',
        Notifications$949,
        value$998
    ]);
};
Job$957.prototype[util$940.camelize('parameters')] = function (value$999) {
    return util$940.customArrayAccessor.apply(this, [
        'parameters',
        Parameters$950,
        value$999
    ]);
};
Job$957.prototype[util$940.camelize('properties')] = function (value$1000) {
    return util$940.customArrayAccessor.apply(this, [
        'properties',
        Properties$951,
        value$1000
    ]);
};
Job$957.prototype[util$940.camelize('publishers')] = function (value$1001) {
    return util$940.customArrayAccessor.apply(this, [
        'publishers',
        Publishers$952,
        value$1001
    ]);
};
Job$957.prototype[util$940.camelize('reporters')] = function (value$1002) {
    return util$940.customArrayAccessor.apply(this, [
        'reporters',
        Reporters$953,
        value$1002
    ]);
};
Job$957.prototype[util$940.camelize('scm')] = function (value$1003) {
    return util$940.customArrayAccessor.apply(this, [
        'scm',
        Scm$954,
        value$1003
    ]);
};
Job$957.prototype[util$940.camelize('triggers')] = function (value$1004) {
    return util$940.customArrayAccessor.apply(this, [
        'triggers',
        Triggers$955,
        value$1004
    ]);
};