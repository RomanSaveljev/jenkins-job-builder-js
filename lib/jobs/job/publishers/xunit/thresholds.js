'use strict';
var util$915 = require('../../../../misc/util.js');
var Threshold$916 = require('./threshold.js');
var Thresholds$918 = function (upper$921, array$922) {
    this.upper = upper$921;
    this.array = array$922;
};
Thresholds$918.prototype.up = function () {
    return this.upper;
};
Thresholds$918.prototype.and = Thresholds$918.prototype.up;
module.exports = Thresholds$918;
Thresholds$918.prototype[util$915.camelize('failed')] = function (value$923) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'failed',
        Threshold$916,
        value$923
    ]);
};
Thresholds$918.prototype[util$915.camelize('skipped')] = function (value$924) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'skipped',
        Threshold$916,
        value$924
    ]);
};