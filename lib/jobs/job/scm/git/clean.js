'use strict';
var util$915 = require('../../../../misc/util.js');
var Clean$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
Clean$917.prototype.up = function () {
    return this.upper;
};
Clean$917.prototype.and = Clean$917.prototype.up;
module.exports = Clean$917;
Clean$917.prototype[util$915.camelize('after')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'after',
        value$922
    ]);
};
Clean$917.prototype[util$915.camelize('before')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'before',
        value$923
    ]);
};