'use strict';
var util$890 = require('../../../misc/util.js');
var Msbuild$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
Msbuild$892.prototype.up = function () {
    return this.upper;
};
Msbuild$892.prototype.and = Msbuild$892.prototype.up;
module.exports = Msbuild$892;
Msbuild$892.prototype[util$890.camelize('msbuild-version')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'msbuild-version',
        value$900
    ]);
};
Msbuild$892.prototype[util$890.camelize('solution-file')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'solution-file',
        value$901
    ]);
};
Msbuild$892.prototype[util$890.camelize('extra-parameters')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'extra-parameters',
        value$902
    ]);
};
Msbuild$892.prototype[util$890.camelize('pass-build-variables')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'pass-build-variables',
        value$903
    ]);
};
Msbuild$892.prototype[util$890.camelize('continue-on-build-failure')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'continue-on-build-failure',
        value$904
    ]);
};