'use strict';
var util$915 = require('../../../../misc/util.js');
var CheckContent$916 = require('./url/check-content.js');
var Url$918 = function (upper$928, obj$929) {
    this.upper = upper$928;
    this.obj = obj$929;
};
Url$918.prototype.up = function () {
    return this.upper;
};
Url$918.prototype.and = Url$918.prototype.up;
module.exports = Url$918;
Url$918.prototype[util$915.camelize('url')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'url',
        value$930
    ]);
};
Url$918.prototype[util$915.camelize('proxy')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'proxy',
        value$931
    ]);
};
Url$918.prototype[util$915.camelize('timeout')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'timeout',
        value$932
    ]);
};
Url$918.prototype[util$915.camelize('username')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'username',
        value$933
    ]);
};
Url$918.prototype[util$915.camelize('password')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'password',
        value$934
    ]);
};
Url$918.prototype[util$915.camelize('check-status')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'check-status',
        value$935
    ]);
};
Url$918.prototype[util$915.camelize('check-etag')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'check-etag',
        value$936
    ]);
};
Url$918.prototype[util$915.camelize('check-date')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'check-date',
        value$937
    ]);
};
Url$918.prototype[util$915.camelize('check-content')] = function (value$938) {
    return util$915.objectArrayAccessor.apply(this, [
        'check-content',
        CheckContent$916,
        value$938
    ]);
};