'use strict';
var util$890 = require('../../../../misc/util.js');
var System$892 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
System$892.prototype.up = function () {
    return this.upper;
};
System$892.prototype.and = System$892.prototype.up;
module.exports = System$892;
System$892.prototype[util$890.camelize('min')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'min',
        value$899
    ]);
};
System$892.prototype[util$890.camelize('max')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'max',
        value$900
    ]);
};
System$892.prototype[util$890.camelize('unstable')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'unstable',
        value$901
    ]);
};
System$892.prototype[util$890.camelize('pattern')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'pattern',
        value$902
    ]);
};