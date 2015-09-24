'use strict';
var util$915 = require('../../../../misc/util.js');
var CleanIf$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
CleanIf$917.prototype.up = function () {
    return this.upper;
};
CleanIf$917.prototype.and = CleanIf$917.prototype.up;
module.exports = CleanIf$917;
CleanIf$917.prototype[util$915.camelize('success')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'success',
        value$925
    ]);
};
CleanIf$917.prototype[util$915.camelize('unstable')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'unstable',
        value$926
    ]);
};
CleanIf$917.prototype[util$915.camelize('failure')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'failure',
        value$927
    ]);
};
CleanIf$917.prototype[util$915.camelize('aborted')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'aborted',
        value$928
    ]);
};
CleanIf$917.prototype[util$915.camelize('not-built')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'not-built',
        value$929
    ]);
};