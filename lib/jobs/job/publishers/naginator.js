'use strict';
var util$890 = require('../../../misc/util.js');
var Naginator$892 = function (upper$899, obj$900) {
    this.upper = upper$899;
    this.obj = obj$900;
};
Naginator$892.prototype.up = function () {
    return this.upper;
};
Naginator$892.prototype.and = Naginator$892.prototype.up;
module.exports = Naginator$892;
Naginator$892.prototype[util$890.camelize('rerun-unstable-builds')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'rerun-unstable-builds',
        value$901
    ]);
};
Naginator$892.prototype[util$890.camelize('fixed-delay')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'fixed-delay',
        value$902
    ]);
};
Naginator$892.prototype[util$890.camelize('progressive-delay-increment')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'progressive-delay-increment',
        value$903
    ]);
};
Naginator$892.prototype[util$890.camelize('progressive-delay-maximum')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'progressive-delay-maximum',
        value$904
    ]);
};
Naginator$892.prototype[util$890.camelize('max-failed-builds')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'max-failed-builds',
        value$905
    ]);
};
Naginator$892.prototype[util$890.camelize('regular-expression')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'regular-expression',
        value$906
    ]);
};