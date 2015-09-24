'use strict';
var util$915 = require('../../../misc/util.js');
var Bool$916 = require('./project/bool.js');
var BlockThresholds$917 = require('./project/block-thresholds.js');
var ParameterFactories$918 = require('./project/parameter-factories.js');
var Project$920 = function (upper$935, obj$936) {
    this.upper = upper$935;
    this.obj = obj$936;
};
Project$920.prototype.up = function () {
    return this.upper;
};
Project$920.prototype.and = Project$920.prototype.up;
module.exports = Project$920;
Project$920.prototype[util$915.camelize('project')] = function (value$937) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'project',
        value$937
    ]);
};
Project$920.prototype[util$915.camelize('predefined-parameters')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$938
    ]);
};
Project$920.prototype[util$915.camelize('bool-parameters')] = function (value$939) {
    return util$915.objectArrayAccessor.apply(this, [
        'bool-parameters',
        Bool$916,
        value$939
    ]);
};
Project$920.prototype[util$915.camelize('property-file')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'property-file',
        value$940
    ]);
};
Project$920.prototype[util$915.camelize('property-file-fail-on-missing')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'property-file-fail-on-missing',
        value$941
    ]);
};
Project$920.prototype[util$915.camelize('current-parameters')] = function (value$942) {
    return util$915.primitiveAccessor.apply(this, [
        'current-parameters',
        value$942
    ]);
};
Project$920.prototype[util$915.camelize('node-label-name')] = function (value$943) {
    return util$915.primitiveAccessor.apply(this, [
        'node-label-name',
        value$943
    ]);
};
Project$920.prototype[util$915.camelize('node-label')] = function (value$944) {
    return util$915.primitiveAccessor.apply(this, [
        'node-label',
        value$944
    ]);
};
Project$920.prototype[util$915.camelize('svn-revision')] = function (value$945) {
    return util$915.primitiveAccessor.apply(this, [
        'svn-revision',
        value$945
    ]);
};
Project$920.prototype[util$915.camelize('git-revision')] = function (value$946) {
    return util$915.primitiveAccessor.apply(this, [
        'git-revision',
        value$946
    ]);
};
Project$920.prototype[util$915.camelize('block')] = function (value$947) {
    return util$915.primitiveAccessor.apply(this, [
        'block',
        value$947
    ]);
};
Project$920.prototype[util$915.camelize('block-thresholds')] = function (value$948) {
    return util$915.objectAccessor.apply(this, [
        'block-thresholds',
        BlockThresholds$917,
        value$948
    ]);
};
Project$920.prototype[util$915.camelize('same-node')] = function (value$949) {
    return util$915.primitiveAccessor.apply(this, [
        'same-node',
        value$949
    ]);
};
Project$920.prototype[util$915.camelize('parameter-factories')] = function (value$950) {
    return util$915.objectArrayAccessor.apply(this, [
        'parameter-factories',
        ParameterFactories$918,
        value$950
    ]);
};