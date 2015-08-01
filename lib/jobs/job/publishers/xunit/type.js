'use strict';
var util$890 = require('../../../../misc/util.js');
var Type$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
Type$892.prototype.up = function () {
    return this.upper;
};
Type$892.prototype.and = Type$892.prototype.up;
module.exports = Type$892;
Type$892.prototype[util$890.camelize('pattern')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'pattern',
        value$900
    ]);
};
Type$892.prototype[util$890.camelize('requireupdate')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'requireupdate',
        value$901
    ]);
};
Type$892.prototype[util$890.camelize('deleteoutput')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'deleteoutput',
        value$902
    ]);
};
Type$892.prototype[util$890.camelize('skip-if-no-test-files')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'skip-if-no-test-files',
        value$903
    ]);
};
Type$892.prototype[util$890.camelize('stoponerror')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'stoponerror',
        value$904
    ]);
};