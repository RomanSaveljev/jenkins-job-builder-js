'use strict';
var util$890 = require('../../../misc/util.js');
var CopyToSlave$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
CopyToSlave$892.prototype.up = function () {
    return this.upper;
};
CopyToSlave$892.prototype.and = CopyToSlave$892.prototype.up;
module.exports = CopyToSlave$892;
CopyToSlave$892.prototype[util$890.camelize('includes')] = function (value$900) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'includes',
        value$900
    ]);
};
CopyToSlave$892.prototype[util$890.camelize('excludes')] = function (value$901) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'excludes',
        value$901
    ]);
};
CopyToSlave$892.prototype[util$890.camelize('flatten')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'flatten',
        value$902
    ]);
};
CopyToSlave$892.prototype[util$890.camelize('relative-to')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'relative-to',
        value$903
    ]);
};
CopyToSlave$892.prototype[util$890.camelize('include-ant-excludes')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'include-ant-excludes',
        value$904
    ]);
};