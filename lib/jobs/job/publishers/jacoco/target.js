'use strict';
var util$915 = require('../../../../misc/util.js');
var Target$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
Target$917.prototype.up = function () {
    return this.upper;
};
Target$917.prototype.and = Target$917.prototype.up;
module.exports = Target$917;
Target$917.prototype[util$915.camelize('healthy')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'healthy',
        value$922
    ]);
};
Target$917.prototype[util$915.camelize('unhealthy')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'unhealthy',
        value$923
    ]);
};