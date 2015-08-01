'use strict';
var util$890 = require('../../../../misc/util.js');
var TotalThreshold$892 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
TotalThreshold$892.prototype.up = function () {
    return this.upper;
};
TotalThreshold$892.prototype.and = TotalThreshold$892.prototype.up;
module.exports = TotalThreshold$892;
TotalThreshold$892.prototype[util$890.camelize('total-all')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'total-all',
        value$899
    ]);
};
TotalThreshold$892.prototype[util$890.camelize('total-high')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'total-high',
        value$900
    ]);
};
TotalThreshold$892.prototype[util$890.camelize('total-normal')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'total-normal',
        value$901
    ]);
};
TotalThreshold$892.prototype[util$890.camelize('total-low')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'total-low',
        value$902
    ]);
};