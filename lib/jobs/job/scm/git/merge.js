'use strict';
var util$890 = require('../../../../misc/util.js');
var Merge$892 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
Merge$892.prototype.up = function () {
    return this.upper;
};
Merge$892.prototype.and = Merge$892.prototype.up;
module.exports = Merge$892;
Merge$892.prototype[util$890.camelize('remote')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'remote',
        value$899
    ]);
};
Merge$892.prototype[util$890.camelize('branch')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'branch',
        value$900
    ]);
};
Merge$892.prototype[util$890.camelize('strategy')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'strategy',
        value$901
    ]);
};
Merge$892.prototype[util$890.camelize('fast-forward-mode')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'fast-forward-mode',
        value$902
    ]);
};