'use strict';
var util$915 = require('../../../../misc/util.js');
var Threshold$917 = function (upper$926, obj$927) {
    this.upper = upper$926;
    this.obj = obj$927;
};
Threshold$917.prototype.up = function () {
    return this.upper;
};
Threshold$917.prototype.and = Threshold$917.prototype.up;
module.exports = Threshold$917;
Threshold$917.prototype[util$915.camelize('total-all')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'total-all',
        value$928
    ]);
};
Threshold$917.prototype[util$915.camelize('total-high')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'total-high',
        value$929
    ]);
};
Threshold$917.prototype[util$915.camelize('total-normal')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'total-normal',
        value$930
    ]);
};
Threshold$917.prototype[util$915.camelize('total-low')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'total-low',
        value$931
    ]);
};
Threshold$917.prototype[util$915.camelize('new-all')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'new-all',
        value$932
    ]);
};
Threshold$917.prototype[util$915.camelize('new-high')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'new-high',
        value$933
    ]);
};
Threshold$917.prototype[util$915.camelize('new-normal')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'new-normal',
        value$934
    ]);
};
Threshold$917.prototype[util$915.camelize('new-low')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'new-low',
        value$935
    ]);
};