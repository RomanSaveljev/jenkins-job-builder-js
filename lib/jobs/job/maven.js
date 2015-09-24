'use strict';
var util$915 = require('../../misc/util.js');
var RootModule$916 = require('./maven/root-module.js');
var Maven$918 = function (upper$938, obj$939) {
    this.upper = upper$938;
    this.obj = obj$939;
};
Maven$918.prototype.up = function () {
    return this.upper;
};
Maven$918.prototype.and = Maven$918.prototype.up;
module.exports = Maven$918;
Maven$918.prototype[util$915.camelize('root-module')] = function (value$940) {
    return util$915.objectAccessor.apply(this, [
        'root-module',
        RootModule$916,
        value$940
    ]);
};
Maven$918.prototype[util$915.camelize('root-pom')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'root-pom',
        value$941
    ]);
};
Maven$918.prototype[util$915.camelize('goals')] = function (value$942) {
    return util$915.primitiveAccessor.apply(this, [
        'goals',
        value$942
    ]);
};
Maven$918.prototype[util$915.camelize('maven-opts')] = function (value$943) {
    return util$915.primitiveAccessor.apply(this, [
        'maven-opts',
        value$943
    ]);
};
Maven$918.prototype[util$915.camelize('maven-name')] = function (value$944) {
    return util$915.primitiveAccessor.apply(this, [
        'maven-name',
        value$944
    ]);
};
Maven$918.prototype[util$915.camelize('private-repository')] = function (value$945) {
    return util$915.primitiveAccessor.apply(this, [
        'private-repository',
        value$945
    ]);
};
Maven$918.prototype[util$915.camelize('ignore-upstream-changes')] = function (value$946) {
    return util$915.primitiveAccessor.apply(this, [
        'ignore-upstream-changes',
        value$946
    ]);
};
Maven$918.prototype[util$915.camelize('incremental-build')] = function (value$947) {
    return util$915.primitiveAccessor.apply(this, [
        'incremental-build',
        value$947
    ]);
};
Maven$918.prototype[util$915.camelize('automatic-archiving')] = function (value$948) {
    return util$915.primitiveAccessor.apply(this, [
        'automatic-archiving',
        value$948
    ]);
};
Maven$918.prototype[util$915.camelize('automatic-site-archiving')] = function (value$949) {
    return util$915.primitiveAccessor.apply(this, [
        'automatic-site-archiving',
        value$949
    ]);
};
Maven$918.prototype[util$915.camelize('automatic-fingerprinting')] = function (value$950) {
    return util$915.primitiveAccessor.apply(this, [
        'automatic-fingerprinting',
        value$950
    ]);
};
Maven$918.prototype[util$915.camelize('parallel-build-modules')] = function (value$951) {
    return util$915.primitiveAccessor.apply(this, [
        'parallel-build-modules',
        value$951
    ]);
};
Maven$918.prototype[util$915.camelize('resolve-dependencies')] = function (value$952) {
    return util$915.primitiveAccessor.apply(this, [
        'resolve-dependencies',
        value$952
    ]);
};
Maven$918.prototype[util$915.camelize('run-headless')] = function (value$953) {
    return util$915.primitiveAccessor.apply(this, [
        'run-headless',
        value$953
    ]);
};
Maven$918.prototype[util$915.camelize('process-plugins')] = function (value$954) {
    return util$915.primitiveAccessor.apply(this, [
        'process-plugins',
        value$954
    ]);
};
Maven$918.prototype[util$915.camelize('custom-workspace')] = function (value$955) {
    return util$915.primitiveAccessor.apply(this, [
        'custom-workspace',
        value$955
    ]);
};
Maven$918.prototype[util$915.camelize('settings')] = function (value$956) {
    return util$915.primitiveAccessor.apply(this, [
        'settings',
        value$956
    ]);
};
Maven$918.prototype[util$915.camelize('global-settings')] = function (value$957) {
    return util$915.primitiveAccessor.apply(this, [
        'global-settings',
        value$957
    ]);
};
Maven$918.prototype[util$915.camelize('post-step-run-condition')] = function (value$958) {
    return util$915.primitiveAccessor.apply(this, [
        'post-step-run-condition',
        value$958
    ]);
};