'use strict';
var util$915 = require('../../../../misc/util.js');
var Merge$917 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
Merge$917.prototype.up = function () {
    return this.upper;
};
Merge$917.prototype.and = Merge$917.prototype.up;
module.exports = Merge$917;
Merge$917.prototype[util$915.camelize('remote')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'remote',
        value$924
    ]);
};
Merge$917.prototype[util$915.camelize('branch')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'branch',
        value$925
    ]);
};
Merge$917.prototype[util$915.camelize('strategy')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'strategy',
        value$926
    ]);
};
Merge$917.prototype[util$915.camelize('fast-forward-mode')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'fast-forward-mode',
        value$927
    ]);
};