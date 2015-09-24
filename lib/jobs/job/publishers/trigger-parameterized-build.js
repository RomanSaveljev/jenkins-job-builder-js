'use strict';
var util$915 = require('../../../misc/util.js');
var TriggerParameterizedBuild$917 = function (upper$931, obj$932) {
    this.upper = upper$931;
    this.obj = obj$932;
};
TriggerParameterizedBuild$917.prototype.up = function () {
    return this.upper;
};
TriggerParameterizedBuild$917.prototype.and = TriggerParameterizedBuild$917.prototype.up;
module.exports = TriggerParameterizedBuild$917;
TriggerParameterizedBuild$917.prototype[util$915.camelize('project')] = function (value$933) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'project',
        value$933
    ]);
};
TriggerParameterizedBuild$917.prototype[util$915.camelize('predefined-parameters')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$934
    ]);
};
TriggerParameterizedBuild$917.prototype[util$915.camelize('current-parameters')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'current-parameters',
        value$935
    ]);
};
TriggerParameterizedBuild$917.prototype[util$915.camelize('node-parameters')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'node-parameters',
        value$936
    ]);
};
TriggerParameterizedBuild$917.prototype[util$915.camelize('svn-revision')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'svn-revision',
        value$937
    ]);
};
TriggerParameterizedBuild$917.prototype[util$915.camelize('git-revision')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'git-revision',
        value$938
    ]);
};
TriggerParameterizedBuild$917.prototype[util$915.camelize('condition')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'condition',
        value$939
    ]);
};
TriggerParameterizedBuild$917.prototype[util$915.camelize('property-file')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'property-file',
        value$940
    ]);
};
TriggerParameterizedBuild$917.prototype[util$915.camelize('fail-on-missing')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'fail-on-missing',
        value$941
    ]);
};
TriggerParameterizedBuild$917.prototype[util$915.camelize('trigger-with-no-params')] = function (value$942) {
    return util$915.primitiveAccessor.apply(this, [
        'trigger-with-no-params',
        value$942
    ]);
};
TriggerParameterizedBuild$917.prototype[util$915.camelize('restrict-matrix-project')] = function (value$943) {
    return util$915.primitiveAccessor.apply(this, [
        'restrict-matrix-project',
        value$943
    ]);
};
TriggerParameterizedBuild$917.prototype[util$915.camelize('node-label-name')] = function (value$944) {
    return util$915.primitiveAccessor.apply(this, [
        'node-label-name',
        value$944
    ]);
};
TriggerParameterizedBuild$917.prototype[util$915.camelize('node-label')] = function (value$945) {
    return util$915.primitiveAccessor.apply(this, [
        'node-label',
        value$945
    ]);
};