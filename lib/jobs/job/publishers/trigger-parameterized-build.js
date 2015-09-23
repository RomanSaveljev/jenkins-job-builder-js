'use strict';
var util$890 = require('../../../misc/util.js');
var TriggerParameterizedBuild$892 = function (upper$906, obj$907) {
    this.upper = upper$906;
    this.obj = obj$907;
};
TriggerParameterizedBuild$892.prototype.up = function () {
    return this.upper;
};
TriggerParameterizedBuild$892.prototype.and = TriggerParameterizedBuild$892.prototype.up;
module.exports = TriggerParameterizedBuild$892;
TriggerParameterizedBuild$892.prototype[util$890.camelize('project')] = function (value$908) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'project',
        value$908
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('predefined-parameters')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$909
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('current-parameters')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'current-parameters',
        value$910
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('node-parameters')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'node-parameters',
        value$911
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('svn-revision')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'svn-revision',
        value$912
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('git-revision')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'git-revision',
        value$913
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('condition')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'condition',
        value$914
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('property-file')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'property-file',
        value$915
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('fail-on-missing')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'fail-on-missing',
        value$916
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('trigger-with-no-params')] = function (value$917) {
    return util$890.primitiveAccessor.apply(this, [
        'trigger-with-no-params',
        value$917
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('restrict-matrix-project')] = function (value$918) {
    return util$890.primitiveAccessor.apply(this, [
        'restrict-matrix-project',
        value$918
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('node-label-name')] = function (value$919) {
    return util$890.primitiveAccessor.apply(this, [
        'node-label-name',
        value$919
    ]);
};
TriggerParameterizedBuild$892.prototype[util$890.camelize('node-label')] = function (value$920) {
    return util$890.primitiveAccessor.apply(this, [
        'node-label',
        value$920
    ]);
};