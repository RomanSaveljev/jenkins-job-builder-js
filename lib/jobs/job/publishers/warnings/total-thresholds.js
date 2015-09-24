'use strict';
var util$915 = require('../../../../misc/util.js');
var TotalThreshold$916 = require('./total-threshold.js');
var TotalThresholds$918 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
TotalThresholds$918.prototype.up = function () {
    return this.upper;
};
TotalThresholds$918.prototype.and = TotalThresholds$918.prototype.up;
module.exports = TotalThresholds$918;
TotalThresholds$918.prototype[util$915.camelize('unstable')] = function (value$923) {
    return util$915.objectAccessor.apply(this, [
        'unstable',
        TotalThreshold$916,
        value$923
    ]);
};
TotalThresholds$918.prototype[util$915.camelize('failed')] = function (value$924) {
    return util$915.objectAccessor.apply(this, [
        'failed',
        TotalThreshold$916,
        value$924
    ]);
};