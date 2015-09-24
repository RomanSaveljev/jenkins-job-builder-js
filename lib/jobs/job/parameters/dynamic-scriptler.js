'use strict';
var util$915 = require('../../../misc/util.js');
var Parameter$916 = require('./dynamic-scriptler/parameter.js');
var DynamicScriptler$918 = function (upper$925, obj$926) {
    this.upper = upper$925;
    this.obj = obj$926;
};
DynamicScriptler$918.prototype.up = function () {
    return this.upper;
};
DynamicScriptler$918.prototype.and = DynamicScriptler$918.prototype.up;
module.exports = DynamicScriptler$918;
DynamicScriptler$918.prototype[util$915.camelize('name')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$927
    ]);
};
DynamicScriptler$918.prototype[util$915.camelize('description')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'description',
        value$928
    ]);
};
DynamicScriptler$918.prototype[util$915.camelize('script-id')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'script-id',
        value$929
    ]);
};
DynamicScriptler$918.prototype[util$915.camelize('parameters')] = function (value$930) {
    return util$915.objectArrayAccessor.apply(this, [
        'parameters',
        Parameter$916,
        value$930
    ]);
};
DynamicScriptler$918.prototype[util$915.camelize('remote')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'remote',
        value$931
    ]);
};
DynamicScriptler$918.prototype[util$915.camelize('read-only')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'read-only',
        value$932
    ]);
};