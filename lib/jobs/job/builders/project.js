'use strict';
var util$890 = require('../../../misc/util.js');
var Bool$891 = require('./project/bool.js');
var BlockThresholds$892 = require('./project/block-thresholds.js');
var ParameterFactories$893 = require('./project/parameter-factories.js');
var Project$895 = function (upper$910, obj$911) {
    this.upper = upper$910;
    this.obj = obj$911;
};
Project$895.prototype.up = function () {
    return this.upper;
};
Project$895.prototype.and = Project$895.prototype.up;
module.exports = Project$895;
Project$895.prototype[util$890.camelize('project')] = function (value$912) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'project',
        value$912
    ]);
};
Project$895.prototype[util$890.camelize('predefined-parameters')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$913
    ]);
};
Project$895.prototype[util$890.camelize('bool-parameters')] = function (value$914) {
    return util$890.objectArrayAccessor.apply(this, [
        'bool-parameters',
        Bool$891,
        value$914
    ]);
};
Project$895.prototype[util$890.camelize('property-file')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'property-file',
        value$915
    ]);
};
Project$895.prototype[util$890.camelize('property-file-fail-on-missing')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'property-file-fail-on-missing',
        value$916
    ]);
};
Project$895.prototype[util$890.camelize('current-parameters')] = function (value$917) {
    return util$890.primitiveAccessor.apply(this, [
        'current-parameters',
        value$917
    ]);
};
Project$895.prototype[util$890.camelize('node-label-name')] = function (value$918) {
    return util$890.primitiveAccessor.apply(this, [
        'node-label-name',
        value$918
    ]);
};
Project$895.prototype[util$890.camelize('node-label')] = function (value$919) {
    return util$890.primitiveAccessor.apply(this, [
        'node-label',
        value$919
    ]);
};
Project$895.prototype[util$890.camelize('svn-revision')] = function (value$920) {
    return util$890.primitiveAccessor.apply(this, [
        'svn-revision',
        value$920
    ]);
};
Project$895.prototype[util$890.camelize('git-revision')] = function (value$921) {
    return util$890.primitiveAccessor.apply(this, [
        'git-revision',
        value$921
    ]);
};
Project$895.prototype[util$890.camelize('block')] = function (value$922) {
    return util$890.primitiveAccessor.apply(this, [
        'block',
        value$922
    ]);
};
Project$895.prototype[util$890.camelize('block-thresholds')] = function (value$923) {
    return util$890.objectAccessor.apply(this, [
        'block-thresholds',
        BlockThresholds$892,
        value$923
    ]);
};
Project$895.prototype[util$890.camelize('same-node')] = function (value$924) {
    return util$890.primitiveAccessor.apply(this, [
        'same-node',
        value$924
    ]);
};
Project$895.prototype[util$890.camelize('parameter-factories')] = function (value$925) {
    return util$890.objectArrayAccessor.apply(this, [
        'parameter-factories',
        ParameterFactories$893,
        value$925
    ]);
};