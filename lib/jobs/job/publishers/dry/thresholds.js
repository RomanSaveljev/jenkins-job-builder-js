'use strict';
var util$890 = require('../../../../misc/util.js');
var Threshold$891 = require('./threshold.js');
var Thresholds$893 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Thresholds$893.prototype.up = function () {
    return this.upper;
};
Thresholds$893.prototype.and = Thresholds$893.prototype.up;
module.exports = Thresholds$893;
Thresholds$893.prototype[util$890.camelize('unstable')] = function (value$898) {
    return util$890.objectAccessor.apply(this, [
        'unstable',
        Threshold$891,
        value$898
    ]);
};
Thresholds$893.prototype[util$890.camelize('failed')] = function (value$899) {
    return util$890.objectAccessor.apply(this, [
        'failed',
        Threshold$891,
        value$899
    ]);
};