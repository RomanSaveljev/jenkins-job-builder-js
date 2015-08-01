'use strict';
var util$890 = require('../misc/util.js');
var Wrappers$891 = require('./wrappers.js');
var Builders$892 = require('./builders.js');
var HipChat$893 = require('./hipchat.js');
var Maven$894 = require('./maven.js');
var ExecutionStrategy$895 = require('./execution-strategy.js');
var Axes$896 = require('./axes.js');
var Metadata$897 = require('./metadata.js');
var Notifications$898 = require('./notifications.js');
var Parameters$899 = require('./parameters.js');
var Properties$900 = require('./properties.js');
var Publishers$901 = require('./publishers.js');
var Reportes$902 = require('./reporters.js');
var Scm$903 = require('./scm.js');
var Triggers$904 = require('./triggers.js');
var Job$906 = function (upper$928, obj$929) {
    this.upper = upper$928;
    this.obj = obj$929;
};
Job$906.prototype.up = function () {
    return this.upper;
};
Job$906.prototype.and = Job$906.prototype.up;
module.exports = Job$906;
Job$906.prototype.clone = function () {
    var job$930 = new Job$906();
    job$930.job = fancyDeepClone(this.job);
    return job$930;
};
Job$906.prototype[util$890.camelize('name')] = function (value$931) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$931
    ]);
};
Job$906.prototype[util$890.camelize('description')] = function (value$932) {
    return util$890.primitiveAccessor.apply(this, [
        'description',
        value$932
    ]);
};
Job$906.prototype[util$890.camelize('node')] = function (value$933) {
    return util$890.primitiveAccessor.apply(this, [
        'node',
        value$933
    ]);
};
Job$906.prototype[util$890.camelize('project-type')] = function (value$934) {
    return util$890.primitiveAccessor.apply(this, [
        'project-type',
        value$934
    ]);
};
Job$906.prototype[util$890.camelize('dsl')] = function (value$935) {
    return util$890.primitiveAccessor.apply(this, [
        'dsl',
        value$935
    ]);
};
Job$906.prototype[util$890.camelize('needs-workspace')] = function (value$936) {
    return util$890.primitiveAccessor.apply(this, [
        'needs-workspace',
        value$936
    ]);
};
Job$906.prototype[util$890.camelize('dsl-file')] = function (value$937) {
    return util$890.primitiveAccessor.apply(this, [
        'dsl-file',
        value$937
    ]);
};
Job$906.prototype[util$890.camelize('maven')] = function (value$938) {
    return util$890.objectAccessor.apply(this, [
        'maven',
        Maven$894,
        value$938
    ]);
};
Job$906.prototype[util$890.camelize('wrappers')] = function (value$939) {
    return util$890.customArrayAccessor.apply(this, [
        'wrappers',
        Wrappers$891,
        value$939
    ]);
};
Job$906.prototype[util$890.camelize('builders')] = function (value$940) {
    return util$890.customArrayAccessor.apply(this, [
        'builders',
        Builders$892,
        value$940
    ]);
};
Job$906.prototype[util$890.camelize('hipchat')] = function (value$941) {
    return util$890.objectAccessor.apply(this, [
        'hipchat',
        HipChat$893,
        value$941
    ]);
};
Job$906.prototype[util$890.camelize('execution-strategy')] = function (value$942) {
    return util$890.objectAccessor.apply(this, [
        'execution-strategy',
        ExecutionStrategy$895,
        value$942
    ]);
};
Job$906.prototype[util$890.camelize('axes')] = function (value$943) {
    return util$890.customArrayAccessor.apply(this, [
        'axes',
        Axes$896,
        value$943
    ]);
};
Job$906.prototype[util$890.camelize('metadata')] = function (value$944) {
    return util$890.customArrayAccessor.apply(this, [
        'metadata',
        Metadata$897,
        value$944
    ]);
};
Job$906.prototype[util$890.camelize('notifications')] = function (value$945) {
    return util$890.customArrayAccessor.apply(this, [
        'notifications',
        Notifications$898,
        value$945
    ]);
};
Job$906.prototype[util$890.camelize('parameters')] = function (value$946) {
    return util$890.customArrayAccessor.apply(this, [
        'parameters',
        Parameters$899,
        value$946
    ]);
};
Job$906.prototype[util$890.camelize('properties')] = function (value$947) {
    return util$890.customArrayAccessor.apply(this, [
        'properties',
        Properties$900,
        value$947
    ]);
};
Job$906.prototype[util$890.camelize('publishers')] = function (value$948) {
    return util$890.customArrayAccessor.apply(this, [
        'publishers',
        Publishers$901,
        value$948
    ]);
};
Job$906.prototype[util$890.camelize('reporters')] = function (value$949) {
    return util$890.customArrayAccessor.apply(this, [
        'reporters',
        Reporters,
        value$949
    ]);
};
Job$906.prototype[util$890.camelize('scm')] = function (value$950) {
    return util$890.customArrayAccessor.apply(this, [
        'scm',
        Scm$903,
        value$950
    ]);
};
Job$906.prototype[util$890.camelize('triggers')] = function (value$951) {
    return util$890.customArrayAccessor.apply(this, [
        'triggers',
        Triggers$904,
        value$951
    ]);
};