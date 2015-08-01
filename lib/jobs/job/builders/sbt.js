'use strict';
var util$890 = require('../../../misc/util.js');
var SBT$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
SBT$892.prototype.up = function () {
    return this.upper;
};
SBT$892.prototype.and = SBT$892.prototype.up;
module.exports = SBT$892;
SBT$892.prototype[util$890.camelize('name')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$900
    ]);
};
SBT$892.prototype[util$890.camelize('jvm-flags')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'jvm-flags',
        value$901
    ]);
};
SBT$892.prototype[util$890.camelize('actions')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'actions',
        value$902
    ]);
};
SBT$892.prototype[util$890.camelize('sbt-flags')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'sbt-flags',
        value$903
    ]);
};
SBT$892.prototype[util$890.camelize('subdir-path')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'subdir-path',
        value$904
    ]);
};