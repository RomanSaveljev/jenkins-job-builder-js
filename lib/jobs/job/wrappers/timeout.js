'use strict';
var util$890 = require('../../../misc/util.js');
var Timeout$892 = function (upper$902, obj$903) {
    this.upper = upper$902;
    this.obj = obj$903;
};
Timeout$892.prototype.up = function () {
    return this.upper;
};
Timeout$892.prototype.and = Timeout$892.prototype.up;
module.exports = Timeout$892;
Timeout$892.prototype[util$890.camelize('fail')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'fail',
        value$904
    ]);
};
Timeout$892.prototype[util$890.camelize('abort')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'abort',
        value$905
    ]);
};
Timeout$892.prototype[util$890.camelize('write-description')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'write-description',
        value$906
    ]);
};
Timeout$892.prototype[util$890.camelize('timeout')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'timeout',
        value$907
    ]);
};
Timeout$892.prototype[util$890.camelize('timeout-var')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'timeout-var',
        value$908
    ]);
};
Timeout$892.prototype[util$890.camelize('type')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'type',
        value$909
    ]);
};
Timeout$892.prototype[util$890.camelize('elastic-percentage')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'elastic-percentage',
        value$910
    ]);
};
Timeout$892.prototype[util$890.camelize('elastic-number-builds')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'elastic-number-builds',
        value$911
    ]);
};
Timeout$892.prototype[util$890.camelize('elastic-default-timeout')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'elastic-default-timeout',
        value$912
    ]);
};