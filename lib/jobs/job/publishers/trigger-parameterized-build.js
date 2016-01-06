'use strict';
var util$940 = require('../../../misc/util.js');
var TriggerParameterizedBuild$942 = function (upper$958, obj$959) {
    this.upper = upper$958;
    this.obj = obj$959;
};
TriggerParameterizedBuild$942.prototype.up = function () {
    return this.upper;
};
TriggerParameterizedBuild$942.prototype.and = TriggerParameterizedBuild$942.prototype.up;
module.exports = TriggerParameterizedBuild$942;
TriggerParameterizedBuild$942.prototype[util$940.camelize('project')] = function (value$960) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'project',
        value$960
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('predefined-parameters')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$961
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('current-parameters')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'current-parameters',
        value$962
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('node-parameters')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'node-parameters',
        value$963
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('svn-revision')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'svn-revision',
        value$964
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('git-revision')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'git-revision',
        value$965
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('condition')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'condition',
        value$966
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('property-file')] = function (value$967) {
    return util$940.primitiveAccessor.apply(this, [
        'property-file',
        value$967
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('fail-on-missing')] = function (value$968) {
    return util$940.primitiveAccessor.apply(this, [
        'fail-on-missing',
        value$968
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('trigger-with-no-params')] = function (value$969) {
    return util$940.primitiveAccessor.apply(this, [
        'trigger-with-no-params',
        value$969
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('restrict-matrix-project')] = function (value$970) {
    return util$940.primitiveAccessor.apply(this, [
        'restrict-matrix-project',
        value$970
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('node-label-name')] = function (value$971) {
    return util$940.primitiveAccessor.apply(this, [
        'node-label-name',
        value$971
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('node-label')] = function (value$972) {
    return util$940.primitiveAccessor.apply(this, [
        'node-label',
        value$972
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('file-encoding')] = function (value$973) {
    return util$940.primitiveAccessor.apply(this, [
        'file-encoding',
        value$973
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('only-exact-matrix-child-runs')] = function (value$974) {
    return util$940.primitiveAccessor.apply(this, [
        'only-exact-matrix-child-runs',
        value$974
    ]);
};