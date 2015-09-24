'use strict';
var util$915 = require('../../../../misc/util.js');
var Series$917 = function (upper$927, obj$928) {
    this.upper = upper$927;
    this.obj = obj$928;
};
Series$917.prototype.up = function () {
    return this.upper;
};
Series$917.prototype.and = Series$917.prototype.up;
module.exports = Series$917;
Series$917.prototype[util$915.camelize('file')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'file',
        value$929
    ]);
};
Series$917.prototype[util$915.camelize('inclusion-flag')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'inclusion-flag',
        value$930
    ]);
};
Series$917.prototype[util$915.camelize('exclude')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'exclude',
        value$931
    ]);
};
Series$917.prototype[util$915.camelize('url')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'url',
        value$932
    ]);
};
Series$917.prototype[util$915.camelize('display-table')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'display-table',
        value$933
    ]);
};
Series$917.prototype[util$915.camelize('label')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'label',
        value$934
    ]);
};
Series$917.prototype[util$915.camelize('format')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'format',
        value$935
    ]);
};
Series$917.prototype[util$915.camelize('xpath-type')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'xpath-type',
        value$936
    ]);
};
Series$917.prototype[util$915.camelize('xpath')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'xpath',
        value$937
    ]);
};