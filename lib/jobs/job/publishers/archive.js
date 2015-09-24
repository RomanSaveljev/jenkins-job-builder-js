'use strict';
var util$915 = require('../../../misc/util.js');
var Archive$917 = function (upper$924, obj$925) {
    this.upper = upper$924;
    this.obj = obj$925;
};
Archive$917.prototype.up = function () {
    return this.upper;
};
Archive$917.prototype.and = Archive$917.prototype.up;
module.exports = Archive$917;
Archive$917.prototype[util$915.camelize('artifacts')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'artifacts',
        value$926
    ]);
};
Archive$917.prototype[util$915.camelize('excludes')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'excludes',
        value$927
    ]);
};
Archive$917.prototype[util$915.camelize('latest-only')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'latest-only',
        value$928
    ]);
};
Archive$917.prototype[util$915.camelize('allow-empty')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'allow-empty',
        value$929
    ]);
};
Archive$917.prototype[util$915.camelize('fingerprint')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'fingerprint',
        value$930
    ]);
};
Archive$917.prototype[util$915.camelize('only-if-success')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'only-if-success',
        value$931
    ]);
};