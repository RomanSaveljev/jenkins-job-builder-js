'use strict';
var util$915 = require('../../../../misc/util.js');
var NewThreshold$916 = require('./new-threshold.js');
var NewThresholds$918 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
NewThresholds$918.prototype.up = function () {
    return this.upper;
};
NewThresholds$918.prototype.and = NewThresholds$918.prototype.up;
module.exports = NewThresholds$918;
NewThresholds$918.prototype[util$915.camelize('unstable')] = function (value$923) {
    return util$915.objectAccessor.apply(this, [
        'unstable',
        NewThreshold$916,
        value$923
    ]);
};
NewThresholds$918.prototype[util$915.camelize('failed')] = function (value$924) {
    return util$915.objectAccessor.apply(this, [
        'failed',
        NewThreshold$916,
        value$924
    ]);
};