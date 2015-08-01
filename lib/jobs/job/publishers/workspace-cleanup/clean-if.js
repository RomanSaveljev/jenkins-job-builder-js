'use strict';
var util$890 = require('../../../../misc/util.js');
var CleanIf$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
CleanIf$892.prototype.up = function () {
    return this.upper;
};
CleanIf$892.prototype.and = CleanIf$892.prototype.up;
module.exports = CleanIf$892;
CleanIf$892.prototype[util$890.camelize('success')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'success',
        value$900
    ]);
};
CleanIf$892.prototype[util$890.camelize('unstable')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'unstable',
        value$901
    ]);
};
CleanIf$892.prototype[util$890.camelize('failure')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'failure',
        value$902
    ]);
};
CleanIf$892.prototype[util$890.camelize('aborted')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'aborted',
        value$903
    ]);
};
CleanIf$892.prototype[util$890.camelize('not-built')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'not-built',
        value$904
    ]);
};