'use strict';
var util$890 = require('../../../misc/util.js');
var TriggerParameterizedBuild$892 = function (upper$905, obj$906) {
    this.upper = upper$905;
    this.obj = obj$906;
};
TriggerParameterizedBuild$892.prototype.up = function () {
    return this.upper;
};
TriggerParameterizedBuild$892.prototype.and = TriggerParameterizedBuild$892.prototype.up;
module.exports = TriggerParameterizedBuild$892;
TriggerParameterizedBuild$892.prototype[util$890.camelize('project')] = function (value$907) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'project',
        value$907
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('predefined-parameters')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$908
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('current-parameters')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'current-parameters',
        value$909
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('node-parameters')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'node-parameters',
        value$910
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('svn-revision')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'svn-revision',
        value$911
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('git-revision')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'git-revision',
        value$912
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('condition')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'condition',
        value$913
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('property-file')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'property-file',
        value$914
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('fail-on-missing')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'fail-on-missing',
        value$915
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('restrict-matrix-project')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'restrict-matrix-project',
        value$916
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('node-label-name')] = function (value$917) {
    return util$890.primitiveAccessor.apply(this, [
        'node-label-name',
        value$917
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('node-label')] = function (value$918) {
    return util$890.primitiveAccessor.apply(this, [
        'node-label',
        value$918
    ]);
};