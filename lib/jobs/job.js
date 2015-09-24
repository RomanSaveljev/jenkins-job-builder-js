'use strict';
var util$915 = require('../misc/util.js');
var Wrappers$916 = require('./job/wrappers.js');
var Builders$917 = require('./job/builders.js');
var HipChat$918 = require('./job/hipchat.js');
var Maven$919 = require('./job/maven.js');
var ExecutionStrategy$920 = require('./job/execution-strategy.js');
var Axes$921 = require('./job/axes.js');
var Metadata$922 = require('./job/metadata.js');
var Notifications$923 = require('./job/notifications.js');
var Parameters$924 = require('./job/parameters.js');
var Properties$925 = require('./job/properties.js');
var Publishers$926 = require('./job/publishers.js');
var Reporters$927 = require('./job/reporters.js');
var Scm$928 = require('./job/scm.js');
var Triggers$929 = require('./job/triggers.js');
var Job$931 = function (upper$953, obj$954) {
    this.upper = upper$953;
    this.obj = obj$954;
};
Job$931.prototype.up = function () {
    return this.upper;
};
Job$931.prototype.and = Job$931.prototype.up;
module.exports = Job$931;
Job$931.prototype.clone = function () {
    var job$955 = new Job$931();
    job$955.job = fancyDeepClone(this.job);
    return job$955;
};
Job$931.prototype[util$915.camelize('name')] = function (value$956) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$956
    ]);
};
Job$931.prototype[util$915.camelize('description')] = function (value$957) {
    return util$915.primitiveAccessor.apply(this, [
        'description',
        value$957
    ]);
};
Job$931.prototype[util$915.camelize('node')] = function (value$958) {
    return util$915.primitiveAccessor.apply(this, [
        'node',
        value$958
    ]);
};
Job$931.prototype[util$915.camelize('project-type')] = function (value$959) {
    return util$915.primitiveAccessor.apply(this, [
        'project-type',
        value$959
    ]);
};
Job$931.prototype[util$915.camelize('dsl')] = function (value$960) {
    return util$915.primitiveAccessor.apply(this, [
        'dsl',
        value$960
    ]);
};
Job$931.prototype[util$915.camelize('needs-workspace')] = function (value$961) {
    return util$915.primitiveAccessor.apply(this, [
        'needs-workspace',
        value$961
    ]);
};
Job$931.prototype[util$915.camelize('dsl-file')] = function (value$962) {
    return util$915.primitiveAccessor.apply(this, [
        'dsl-file',
        value$962
    ]);
};
Job$931.prototype[util$915.camelize('maven')] = function (value$963) {
    return util$915.objectAccessor.apply(this, [
        'maven',
        Maven$919,
        value$963
    ]);
};
Job$931.prototype[util$915.camelize('wrappers')] = function (value$964) {
    return util$915.customArrayAccessor.apply(this, [
        'wrappers',
        Wrappers$916,
        value$964
    ]);
};
Job$931.prototype[util$915.camelize('builders')] = function (value$965) {
    return util$915.customArrayAccessor.apply(this, [
        'builders',
        Builders$917,
        value$965
    ]);
};
Job$931.prototype[util$915.camelize('hipchat')] = function (value$966) {
    return util$915.objectAccessor.apply(this, [
        'hipchat',
        HipChat$918,
        value$966
    ]);
};
Job$931.prototype[util$915.camelize('execution-strategy')] = function (value$967) {
    return util$915.objectAccessor.apply(this, [
        'execution-strategy',
        ExecutionStrategy$920,
        value$967
    ]);
};
Job$931.prototype[util$915.camelize('axes')] = function (value$968) {
    return util$915.customArrayAccessor.apply(this, [
        'axes',
        Axes$921,
        value$968
    ]);
};
Job$931.prototype[util$915.camelize('metadata')] = function (value$969) {
    return util$915.customArrayAccessor.apply(this, [
        'metadata',
        Metadata$922,
        value$969
    ]);
};
Job$931.prototype[util$915.camelize('notifications')] = function (value$970) {
    return util$915.customArrayAccessor.apply(this, [
        'notifications',
        Notifications$923,
        value$970
    ]);
};
Job$931.prototype[util$915.camelize('parameters')] = function (value$971) {
    return util$915.customArrayAccessor.apply(this, [
        'parameters',
        Parameters$924,
        value$971
    ]);
};
Job$931.prototype[util$915.camelize('properties')] = function (value$972) {
    return util$915.customArrayAccessor.apply(this, [
        'properties',
        Properties$925,
        value$972
    ]);
};
Job$931.prototype[util$915.camelize('publishers')] = function (value$973) {
    return util$915.customArrayAccessor.apply(this, [
        'publishers',
        Publishers$926,
        value$973
    ]);
};
Job$931.prototype[util$915.camelize('reporters')] = function (value$974) {
    return util$915.customArrayAccessor.apply(this, [
        'reporters',
        Reporters$927,
        value$974
    ]);
};
Job$931.prototype[util$915.camelize('scm')] = function (value$975) {
    return util$915.customArrayAccessor.apply(this, [
        'scm',
        Scm$928,
        value$975
    ]);
};
Job$931.prototype[util$915.camelize('triggers')] = function (value$976) {
    return util$915.customArrayAccessor.apply(this, [
        'triggers',
        Triggers$929,
        value$976
    ]);
};