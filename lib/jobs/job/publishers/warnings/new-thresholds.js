'use strict';
var util$890 = require('../../../../misc/util.js');
var NewThreshold$891 = require('./new-threshold.js');
var NewThresholds$893 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
NewThresholds$893.prototype.up = function () {
    return this.upper;
};
NewThresholds$893.prototype.and = NewThresholds$893.prototype.up;
module.exports = NewThresholds$893;
NewThresholds$893.prototype[util$890.camelize('unstable')] = function (value$898) {
    return util$890.objectAccessor.apply(this, [
        'unstable',
        NewThreshold$891,
        value$898
    ]);
};
NewThresholds$893.prototype[util$890.camelize('failed')] = function (value$899) {
    return util$890.objectAccessor.apply(this, [
        'failed',
        NewThreshold$891,
        value$899
    ]);
};