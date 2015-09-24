'use strict';
var util$915 = require('../../../../misc/util.js');
var ParameterFactories$917 = function (upper$929, obj$930) {
    this.upper = upper$929;
    this.obj = obj$930;
};
ParameterFactories$917.prototype.up = function () {
    return this.upper;
};
ParameterFactories$917.prototype.and = ParameterFactories$917.prototype.up;
module.exports = ParameterFactories$917;
ParameterFactories$917.prototype[util$915.camelize('factory')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'factory',
        value$931
    ]);
};
ParameterFactories$917.prototype[util$915.camelize('file-pattern')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'file-pattern',
        value$932
    ]);
};
ParameterFactories$917.prototype[util$915.camelize('no-files-found-action')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'no-files-found-action',
        value$933
    ]);
};
ParameterFactories$917.prototype[util$915.camelize('from')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'from',
        value$934
    ]);
};
ParameterFactories$917.prototype[util$915.camelize('to')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'to',
        value$935
    ]);
};
ParameterFactories$917.prototype[util$915.camelize('step')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'step',
        value$936
    ]);
};
ParameterFactories$917.prototype[util$915.camelize('parameters')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'parameters',
        value$937
    ]);
};
ParameterFactories$917.prototype[util$915.camelize('validation-fail')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'validation-fail',
        value$938
    ]);
};
ParameterFactories$917.prototype[util$915.camelize('name')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$939
    ]);
};
ParameterFactories$917.prototype[util$915.camelize('node-label')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'node-label',
        value$940
    ]);
};
ParameterFactories$917.prototype[util$915.camelize('ignore-offline-nodes')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'ignore-offline-nodes',
        value$941
    ]);
};