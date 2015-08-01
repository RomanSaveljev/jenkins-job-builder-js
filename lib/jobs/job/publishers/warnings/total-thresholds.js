'use strict';
var util$890 = require('../../../../misc/util.js');
var TotalThreshold$891 = require('./total-threshold.js');
var TotalThresholds$893 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
TotalThresholds$893.prototype.up = function () {
    return this.upper;
};
TotalThresholds$893.prototype.and = TotalThresholds$893.prototype.up;
module.exports = TotalThresholds$893;
TotalThresholds$893.prototype[util$890.camelize('unstable')] = function (value$898) {
    return util$890.objectAccessor.apply(this, [
        'unstable',
        TotalThreshold$891,
        value$898
    ]);
};
TotalThresholds$893.prototype[util$890.camelize('failed')] = function (value$899) {
    return util$890.objectAccessor.apply(this, [
        'failed',
        TotalThreshold$891,
        value$899
    ]);
};