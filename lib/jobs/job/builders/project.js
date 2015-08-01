'use strict';
var util$740 = require('../../../misc/util.js');
var Bool$741 = require('./project/bool.js');
var BlockThresholds$742 = require('./project/block-thresholds.js');
var Project$744 = function (upper$759, obj$760) {
    this.upper = upper$759;
    this.obj = obj$760;
};
Project$744.prototype.up = function () {
    return this.upper;
};
Project$744.prototype.and = Project$744.prototype.up;
module.exports = Project$744;
Project$744.prototype[util$740.camelize('project')] = function (value$761) {
    return util$740.primitiveArrayAccessor.apply(this, [
        'project',
        value$761
    ]);
};
Project$744.prototype[util$740.camelize('predefined-parameters')] = function (value$762) {
    return util$740.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$762
    ]);
};
Project$744.prototype[util$740.camelize('bool-parameters')] = function (value$763) {
    return util$740.objectArrayAccessor.apply(this, [
        'bool-parameters',
        Bool$741,
        value$763
    ]);
};
Project$744.prototype[util$740.camelize('property-file')] = function (value$764) {
    return util$740.primitiveAccessor.apply(this, [
        'property-file',
        value$764
    ]);
};
Project$744.prototype[util$740.camelize('property-file-fail-on-missing')] = function (value$765) {
    return util$740.primitiveAccessor.apply(this, [
        'property-file-fail-on-missing',
        value$765
    ]);
};
Project$744.prototype[util$740.camelize('current-parameters')] = function (value$766) {
    return util$740.primitiveAccessor.apply(this, [
        'current-parameters',
        value$766
    ]);
};
Project$744.prototype[util$740.camelize('node-label-name')] = function (value$767) {
    return util$740.primitiveAccessor.apply(this, [
        'node-label-name',
        value$767
    ]);
};
Project$744.prototype[util$740.camelize('node-label')] = function (value$768) {
    return util$740.primitiveAccessor.apply(this, [
        'node-label',
        value$768
    ]);
};
Project$744.prototype[util$740.camelize('svn-revision')] = function (value$769) {
    return util$740.primitiveAccessor.apply(this, [
        'svn-revision',
        value$769
    ]);
};
Project$744.prototype[util$740.camelize('git-revision')] = function (value$770) {
    return util$740.primitiveAccessor.apply(this, [
        'git-revision',
        value$770
    ]);
};
Project$744.prototype[util$740.camelize('block')] = function (value$771) {
    return util$740.primitiveAccessor.apply(this, [
        'block',
        value$771
    ]);
};
Project$744.prototype[util$740.camelize('block-thresholds')] = function (value$772) {
    return util$740.objectAccessor.apply(this, [
        'block-thresholds',
        BlockThresholds$742,
        value$772
    ]);
};
Project$744.prototype[util$740.camelize('same-node')] = function (value$773) {
    return util$740.primitiveAccessor.apply(this, [
        'same-node',
        value$773
    ]);
};
Project$744.prototype[util$740.camelize('parameter-factories')] = function (value$774) {
    return util$740.objectArrayAccessor.apply(this, [
        'parameter-factories',
        ParameterFactories,
        value$774
    ]);
};