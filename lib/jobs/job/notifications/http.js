'use strict';
var util$890 = require('../../../misc/util.js');
var Http$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
Http$892.prototype.up = function () {
    return this.upper;
};
Http$892.prototype.and = Http$892.prototype.up;
module.exports = Http$892;
Http$892.prototype[util$890.camelize('format')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'format',
        value$900
    ]);
};
Http$892.prototype[util$890.camelize('event')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'event',
        value$901
    ]);
};
Http$892.prototype[util$890.camelize('url')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'url',
        value$902
    ]);
};
Http$892.prototype[util$890.camelize('timeout')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'timeout',
        value$903
    ]);
};
Http$892.prototype[util$890.camelize('log')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'log',
        value$904
    ]);
};