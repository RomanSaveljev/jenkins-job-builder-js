'use strict';
var util$940 = require('../../../misc/util.js');
var TriggerParameterizedBuild$942 = function (upper$960, obj$961) {
    this.upper = upper$960;
    this.obj = obj$961;
};
TriggerParameterizedBuild$942.prototype.up = function () {
    return this.upper;
};
TriggerParameterizedBuild$942.prototype.and = TriggerParameterizedBuild$942.prototype.up;
module.exports = TriggerParameterizedBuild$942;
TriggerParameterizedBuild$942.prototype[util$940.camelize('project')] = function (value$962) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'project',
        value$962
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('predefined-parameters')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$963
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('current-parameters')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'current-parameters',
        value$964
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('node-parameters')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'node-parameters',
        value$965
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('svn-revision')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'svn-revision',
        value$966
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('git-revision')] = function (value$967) {
    return util$940.primitiveAccessor.apply(this, [
        'git-revision',
        value$967
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('condition')] = function (value$968) {
    return util$940.primitiveAccessor.apply(this, [
        'condition',
        value$968
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('property-file')] = function (value$969) {
    return util$940.primitiveAccessor.apply(this, [
        'property-file',
        value$969
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('fail-on-missing')] = function (value$970) {
    return util$940.primitiveAccessor.apply(this, [
        'fail-on-missing',
        value$970
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('trigger-with-no-params')] = function (value$971) {
    return util$940.primitiveAccessor.apply(this, [
        'trigger-with-no-params',
        value$971
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('restrict-matrix-project')] = function (value$972) {
    return util$940.primitiveAccessor.apply(this, [
        'restrict-matrix-project',
        value$972
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('node-label-name')] = function (value$973) {
    return util$940.primitiveAccessor.apply(this, [
        'node-label-name',
        value$973
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('node-label')] = function (value$974) {
    return util$940.primitiveAccessor.apply(this, [
        'node-label',
        value$974
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('file-encoding')] = function (value$975) {
    return util$940.primitiveAccessor.apply(this, [
        'file-encoding',
        value$975
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('only-exact-matrix-child-runs')] = function (value$976) {
    return util$940.primitiveAccessor.apply(this, [
        'only-exact-matrix-child-runs',
        value$976
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('matrix-child-combination-filter')] = function (value$977) {
    return util$940.primitiveAccessor.apply(this, [
        'matrix-child-combination-filter',
        value$977
    ]);
};
TriggerParameterizedBuild$942.prototype[util$940.camelize('use-matrix-child-files')] = function (value$978) {
    return util$940.primitiveAccessor.apply(this, [
        'use-matrix-child-files',
        value$978
    ]);
};