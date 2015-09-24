'use strict';
var util$915 = require('../../../../misc/util.js');
var BlockThresholds$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
BlockThresholds$917.prototype.up = function () {
    return this.upper;
};
BlockThresholds$917.prototype.and = BlockThresholds$917.prototype.up;
module.exports = BlockThresholds$917;
BlockThresholds$917.prototype[util$915.camelize('build-step-failure-threshold')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'build-step-failure-threshold',
        value$923
    ]);
};
BlockThresholds$917.prototype[util$915.camelize('unstable-threshold')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'unstable-threshold',
        value$924
    ]);
};
BlockThresholds$917.prototype[util$915.camelize('failure-threshold')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'failure-threshold',
        value$925
    ]);
};