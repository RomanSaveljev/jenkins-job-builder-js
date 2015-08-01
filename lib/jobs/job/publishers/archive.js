'use strict';
var util$890 = require('../../../misc/util.js');
var Archive$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
Archive$892.prototype.up = function () {
    return this.upper;
};
Archive$892.prototype.and = Archive$892.prototype.up;
module.exports = Archive$892;
Archive$892.prototype[util$890.camelize('artifacts')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'artifacts',
        value$900
    ]);
};
Archive$892.prototype[util$890.camelize('excludes')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'excludes',
        value$901
    ]);
};
Archive$892.prototype[util$890.camelize('latest-only')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'latest-only',
        value$902
    ]);
};
Archive$892.prototype[util$890.camelize('allow-empty')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'allow-empty',
        value$903
    ]);
};
Archive$892.prototype[util$890.camelize('fingerprint')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'fingerprint',
        value$904
    ]);
};