'use strict';
var util$890 = require('../../../misc/util.js');
var Throttle$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
Throttle$892.prototype.up = function () {
    return this.upper;
};
Throttle$892.prototype.and = Throttle$892.prototype.up;
module.exports = Throttle$892;
Throttle$892.prototype[util$890.camelize('max-per-node')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'max-per-node',
        value$900
    ]);
};
Throttle$892.prototype[util$890.camelize('max-total')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'max-total',
        value$901
    ]);
};
Throttle$892.prototype[util$890.camelize('enabled')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'enabled',
        value$902
    ]);
};
Throttle$892.prototype[util$890.camelize('option')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'option',
        value$903
    ]);
};
Throttle$892.prototype[util$890.camelize('categories')] = function (value$904) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'categories',
        value$904
    ]);
};