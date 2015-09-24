'use strict';
var util$915 = require('../../../../misc/util.js');
var TotalThreshold$917 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
TotalThreshold$917.prototype.up = function () {
    return this.upper;
};
TotalThreshold$917.prototype.and = TotalThreshold$917.prototype.up;
module.exports = TotalThreshold$917;
TotalThreshold$917.prototype[util$915.camelize('total-all')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'total-all',
        value$924
    ]);
};
TotalThreshold$917.prototype[util$915.camelize('total-high')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'total-high',
        value$925
    ]);
};
TotalThreshold$917.prototype[util$915.camelize('total-normal')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'total-normal',
        value$926
    ]);
};
TotalThreshold$917.prototype[util$915.camelize('total-low')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'total-low',
        value$927
    ]);
};