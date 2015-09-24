'use strict';
var util$915 = require('../../../misc/util.js');
var Msbuild$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
Msbuild$917.prototype.up = function () {
    return this.upper;
};
Msbuild$917.prototype.and = Msbuild$917.prototype.up;
module.exports = Msbuild$917;
Msbuild$917.prototype[util$915.camelize('msbuild-version')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'msbuild-version',
        value$925
    ]);
};
Msbuild$917.prototype[util$915.camelize('solution-file')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'solution-file',
        value$926
    ]);
};
Msbuild$917.prototype[util$915.camelize('extra-parameters')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'extra-parameters',
        value$927
    ]);
};
Msbuild$917.prototype[util$915.camelize('pass-build-variables')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'pass-build-variables',
        value$928
    ]);
};
Msbuild$917.prototype[util$915.camelize('continue-on-build-failure')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'continue-on-build-failure',
        value$929
    ]);
};