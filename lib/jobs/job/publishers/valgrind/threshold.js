'use strict';
var util$915 = require('../../../../misc/util.js');
var Threshold$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
Threshold$917.prototype.up = function () {
    return this.upper;
};
Threshold$917.prototype.and = Threshold$917.prototype.up;
module.exports = Threshold$917;
Threshold$917.prototype[util$915.camelize('invalid-read-write')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'invalid-read-write',
        value$923
    ]);
};
Threshold$917.prototype[util$915.camelize('definitely-lost')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'definitely-lost',
        value$924
    ]);
};
Threshold$917.prototype[util$915.camelize('total')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'total',
        value$925
    ]);
};