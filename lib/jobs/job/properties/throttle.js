'use strict';
var util$915 = require('../../../misc/util.js');
var Throttle$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
Throttle$917.prototype.up = function () {
    return this.upper;
};
Throttle$917.prototype.and = Throttle$917.prototype.up;
module.exports = Throttle$917;
Throttle$917.prototype[util$915.camelize('max-per-node')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'max-per-node',
        value$925
    ]);
};
Throttle$917.prototype[util$915.camelize('max-total')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'max-total',
        value$926
    ]);
};
Throttle$917.prototype[util$915.camelize('enabled')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'enabled',
        value$927
    ]);
};
Throttle$917.prototype[util$915.camelize('option')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'option',
        value$928
    ]);
};
Throttle$917.prototype[util$915.camelize('categories')] = function (value$929) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'categories',
        value$929
    ]);
};