'use strict';
var util$890 = require('../../../misc/util.js');
var Bool$891 = require('./project/bool.js');
var BlockThresholds$892 = require('./project/block-thresholds.js');
var Project$894 = function (upper$909, obj$910) {
    this.upper = upper$909;
    this.obj = obj$910;
};
Project$894.prototype.up = function () {
    return this.upper;
};
Project$894.prototype.and = Project$894.prototype.up;
module.exports = Project$894;
Project$894.prototype[util$890.camelize('project')] = function (value$911) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'project',
        value$911
    ]);
};
Project$894.prototype[util$890.camelize('predefined-parameters')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$912
    ]);
};
Project$894.prototype[util$890.camelize('bool-parameters')] = function (value$913) {
    return util$890.objectArrayAccessor.apply(this, [
        'bool-parameters',
        Bool$891,
        value$913
    ]);
};
Project$894.prototype[util$890.camelize('property-file')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'property-file',
        value$914
    ]);
};
Project$894.prototype[util$890.camelize('property-file-fail-on-missing')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'property-file-fail-on-missing',
        value$915
    ]);
};
Project$894.prototype[util$890.camelize('current-parameters')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'current-parameters',
        value$916
    ]);
};
Project$894.prototype[util$890.camelize('node-label-name')] = function (value$917) {
    return util$890.primitiveAccessor.apply(this, [
        'node-label-name',
        value$917
    ]);
};
Project$894.prototype[util$890.camelize('node-label')] = function (value$918) {
    return util$890.primitiveAccessor.apply(this, [
        'node-label',
        value$918
    ]);
};
Project$894.prototype[util$890.camelize('svn-revision')] = function (value$919) {
    return util$890.primitiveAccessor.apply(this, [
        'svn-revision',
        value$919
    ]);
};
Project$894.prototype[util$890.camelize('git-revision')] = function (value$920) {
    return util$890.primitiveAccessor.apply(this, [
        'git-revision',
        value$920
    ]);
};
Project$894.prototype[util$890.camelize('block')] = function (value$921) {
    return util$890.primitiveAccessor.apply(this, [
        'block',
        value$921
    ]);
};
Project$894.prototype[util$890.camelize('block-thresholds')] = function (value$922) {
    return util$890.objectAccessor.apply(this, [
        'block-thresholds',
        BlockThresholds$892,
        value$922
    ]);
};
Project$894.prototype[util$890.camelize('same-node')] = function (value$923) {
    return util$890.primitiveAccessor.apply(this, [
        'same-node',
        value$923
    ]);
};
Project$894.prototype[util$890.camelize('parameter-factories')] = function (value$924) {
    return util$890.objectArrayAccessor.apply(this, [
        'parameter-factories',
        ParameterFactories,
        value$924
    ]);
};