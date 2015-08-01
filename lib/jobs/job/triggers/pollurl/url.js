'use strict';
var util$890 = require('../../../../misc/util.js');
var CheckContent$891 = require('./url/check-content.js');
var Url$893 = function (upper$903, obj$904) {
    this.upper = upper$903;
    this.obj = obj$904;
};
Url$893.prototype.up = function () {
    return this.upper;
};
Url$893.prototype.and = Url$893.prototype.up;
module.exports = Url$893;
Url$893.prototype[util$890.camelize('url')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'url',
        value$905
    ]);
};
Url$893.prototype[util$890.camelize('proxy')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'proxy',
        value$906
    ]);
};
Url$893.prototype[util$890.camelize('timeout')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'timeout',
        value$907
    ]);
};
Url$893.prototype[util$890.camelize('username')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'username',
        value$908
    ]);
};
Url$893.prototype[util$890.camelize('password')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'password',
        value$909
    ]);
};
Url$893.prototype[util$890.camelize('check-status')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'check-status',
        value$910
    ]);
};
Url$893.prototype[util$890.camelize('check-etag')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'check-etag',
        value$911
    ]);
};
Url$893.prototype[util$890.camelize('check-date')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'check-date',
        value$912
    ]);
};
Url$893.prototype[util$890.camelize('check-content')] = function (value$913) {
    return util$890.objectArrayAccessor.apply(this, [
        'check-content',
        CheckContent$891,
        value$913
    ]);
};