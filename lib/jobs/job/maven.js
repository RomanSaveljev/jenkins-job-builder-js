'use strict';
var util$890 = require('../../misc/util.js');
var RootModule$891 = require('./maven/root-module.js');
var Maven$893 = function (upper$913, obj$914) {
    this.upper = upper$913;
    this.obj = obj$914;
};
Maven$893.prototype.up = function () {
    return this.upper;
};
Maven$893.prototype.and = Maven$893.prototype.up;
module.exports = Maven$893;
Maven$893.prototype[util$890.camelize('root-module')] = function (value$915) {
    return util$890.objectAccessor.apply(this, [
        'root-module',
        RootModule$891,
        value$915
    ]);
};
Maven$893.prototype[util$890.camelize('root-pom')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'root-pom',
        value$916
    ]);
};
Maven$893.prototype[util$890.camelize('goals')] = function (value$917) {
    return util$890.primitiveAccessor.apply(this, [
        'goals',
        value$917
    ]);
};
Maven$893.prototype[util$890.camelize('maven-opts')] = function (value$918) {
    return util$890.primitiveAccessor.apply(this, [
        'maven-opts',
        value$918
    ]);
};
Maven$893.prototype[util$890.camelize('maven-name')] = function (value$919) {
    return util$890.primitiveAccessor.apply(this, [
        'maven-name',
        value$919
    ]);
};
Maven$893.prototype[util$890.camelize('private-repository')] = function (value$920) {
    return util$890.primitiveAccessor.apply(this, [
        'private-repository',
        value$920
    ]);
};
Maven$893.prototype[util$890.camelize('ignore-upstream-changes')] = function (value$921) {
    return util$890.primitiveAccessor.apply(this, [
        'ignore-upstream-changes',
        value$921
    ]);
};
Maven$893.prototype[util$890.camelize('incremental-build')] = function (value$922) {
    return util$890.primitiveAccessor.apply(this, [
        'incremental-build',
        value$922
    ]);
};
Maven$893.prototype[util$890.camelize('automatic-archiving')] = function (value$923) {
    return util$890.primitiveAccessor.apply(this, [
        'automatic-archiving',
        value$923
    ]);
};
Maven$893.prototype[util$890.camelize('automatic-site-archiving')] = function (value$924) {
    return util$890.primitiveAccessor.apply(this, [
        'automatic-site-archiving',
        value$924
    ]);
};
Maven$893.prototype[util$890.camelize('automatic-fingerprinting')] = function (value$925) {
    return util$890.primitiveAccessor.apply(this, [
        'automatic-fingerprinting',
        value$925
    ]);
};
Maven$893.prototype[util$890.camelize('parallel-build-modules')] = function (value$926) {
    return util$890.primitiveAccessor.apply(this, [
        'parallel-build-modules',
        value$926
    ]);
};
Maven$893.prototype[util$890.camelize('resolve-dependencies')] = function (value$927) {
    return util$890.primitiveAccessor.apply(this, [
        'resolve-dependencies',
        value$927
    ]);
};
Maven$893.prototype[util$890.camelize('run-headless')] = function (value$928) {
    return util$890.primitiveAccessor.apply(this, [
        'run-headless',
        value$928
    ]);
};
Maven$893.prototype[util$890.camelize('process-plugins')] = function (value$929) {
    return util$890.primitiveAccessor.apply(this, [
        'process-plugins',
        value$929
    ]);
};
Maven$893.prototype[util$890.camelize('custom-workspace')] = function (value$930) {
    return util$890.primitiveAccessor.apply(this, [
        'custom-workspace',
        value$930
    ]);
};
Maven$893.prototype[util$890.camelize('settings')] = function (value$931) {
    return util$890.primitiveAccessor.apply(this, [
        'settings',
        value$931
    ]);
};
Maven$893.prototype[util$890.camelize('global-settings')] = function (value$932) {
    return util$890.primitiveAccessor.apply(this, [
        'global-settings',
        value$932
    ]);
};
Maven$893.prototype[util$890.camelize('post-step-run-condition')] = function (value$933) {
    return util$890.primitiveAccessor.apply(this, [
        'post-step-run-condition',
        value$933
    ]);
};