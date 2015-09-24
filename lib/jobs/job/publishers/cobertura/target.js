'use strict';
var util$915 = require('../../../../misc/util.js');
var Target$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
Target$917.prototype.up = function () {
    return this.upper;
};
Target$917.prototype.and = Target$917.prototype.up;
module.exports = Target$917;
Target$917.prototype[util$915.camelize('healthy')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'healthy',
        value$923
    ]);
};
Target$917.prototype[util$915.camelize('unhealthy')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'unhealthy',
        value$924
    ]);
};
Target$917.prototype[util$915.camelize('failing')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'failing',
        value$925
    ]);
};