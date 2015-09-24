'use strict';
var util$915 = require('../../../misc/util.js');
var Inject$917 = function (upper$928, obj$929) {
    this.upper = upper$928;
    this.obj = obj$929;
};
Inject$917.prototype.up = function () {
    return this.upper;
};
Inject$917.prototype.and = Inject$917.prototype.up;
module.exports = Inject$917;
Inject$917.prototype[util$915.camelize('properties-file')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'properties-file',
        value$930
    ]);
};
Inject$917.prototype[util$915.camelize('properties-content')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'properties-content',
        value$931
    ]);
};
Inject$917.prototype[util$915.camelize('script-file')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'script-file',
        value$932
    ]);
};
Inject$917.prototype[util$915.camelize('script-content')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'script-content',
        value$933
    ]);
};
Inject$917.prototype[util$915.camelize('groovy-content')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'groovy-content',
        value$934
    ]);
};
Inject$917.prototype[util$915.camelize('load-from-master')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'load-from-master',
        value$935
    ]);
};
Inject$917.prototype[util$915.camelize('enabled')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'enabled',
        value$936
    ]);
};
Inject$917.prototype[util$915.camelize('keep-system-variables')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'keep-system-variables',
        value$937
    ]);
};
Inject$917.prototype[util$915.camelize('keep-build-variables')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'keep-build-variables',
        value$938
    ]);
};
Inject$917.prototype[util$915.camelize('override-build-parameters')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'override-build-parameters',
        value$939
    ]);
};