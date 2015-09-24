'use strict';
var util$915 = require('../../../../misc/util.js');
var NewThreshold$917 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
NewThreshold$917.prototype.up = function () {
    return this.upper;
};
NewThreshold$917.prototype.and = NewThreshold$917.prototype.up;
module.exports = NewThreshold$917;
NewThreshold$917.prototype[util$915.camelize('new-all')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'new-all',
        value$924
    ]);
};
NewThreshold$917.prototype[util$915.camelize('new-high')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'new-high',
        value$925
    ]);
};
NewThreshold$917.prototype[util$915.camelize('new-normal')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'new-normal',
        value$926
    ]);
};
NewThreshold$917.prototype[util$915.camelize('new-low')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'new-low',
        value$927
    ]);
};