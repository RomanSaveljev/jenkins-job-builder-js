'use strict';
var util$890 = require('../../../../misc/util.js');
var Threshold$892 = function (upper$901, obj$902) {
    this.upper = upper$901;
    this.obj = obj$902;
};
Threshold$892.prototype.up = function () {
    return this.upper;
};
Threshold$892.prototype.and = Threshold$892.prototype.up;
module.exports = Threshold$892;
Threshold$892.prototype[util$890.camelize('total-all')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'total-all',
        value$903
    ]);
};
Threshold$892.prototype[util$890.camelize('total-high')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'total-high',
        value$904
    ]);
};
Threshold$892.prototype[util$890.camelize('total-normal')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'total-normal',
        value$905
    ]);
};
Threshold$892.prototype[util$890.camelize('total-low')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'total-low',
        value$906
    ]);
};
Threshold$892.prototype[util$890.camelize('new-all')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'new-all',
        value$907
    ]);
};
Threshold$892.prototype[util$890.camelize('new-high')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'new-high',
        value$908
    ]);
};
Threshold$892.prototype[util$890.camelize('new-normal')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'new-normal',
        value$909
    ]);
};
Threshold$892.prototype[util$890.camelize('new-low')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'new-low',
        value$910
    ]);
};