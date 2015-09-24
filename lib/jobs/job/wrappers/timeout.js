'use strict';
var util$915 = require('../../../misc/util.js');
var Timeout$917 = function (upper$927, obj$928) {
    this.upper = upper$927;
    this.obj = obj$928;
};
Timeout$917.prototype.up = function () {
    return this.upper;
};
Timeout$917.prototype.and = Timeout$917.prototype.up;
module.exports = Timeout$917;
Timeout$917.prototype[util$915.camelize('fail')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'fail',
        value$929
    ]);
};
Timeout$917.prototype[util$915.camelize('abort')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'abort',
        value$930
    ]);
};
Timeout$917.prototype[util$915.camelize('write-description')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'write-description',
        value$931
    ]);
};
Timeout$917.prototype[util$915.camelize('timeout')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'timeout',
        value$932
    ]);
};
Timeout$917.prototype[util$915.camelize('timeout-var')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'timeout-var',
        value$933
    ]);
};
Timeout$917.prototype[util$915.camelize('type')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'type',
        value$934
    ]);
};
Timeout$917.prototype[util$915.camelize('elastic-percentage')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'elastic-percentage',
        value$935
    ]);
};
Timeout$917.prototype[util$915.camelize('elastic-number-builds')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'elastic-number-builds',
        value$936
    ]);
};
Timeout$917.prototype[util$915.camelize('elastic-default-timeout')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'elastic-default-timeout',
        value$937
    ]);
};