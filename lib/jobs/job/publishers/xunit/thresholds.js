'use strict';
var util$890 = require('../../../../misc/util.js');
var Threshold$891 = require('./threshold.js');
var Thresholds$893 = function (upper$896, array$897) {
    this.upper = upper$896;
    this.array = array$897;
};
Thresholds$893.prototype.up = function () {
    return this.upper;
};
Thresholds$893.prototype.and = Thresholds$893.prototype.up;
module.exports = Thresholds$893;
Thresholds$893.prototype[util$890.camelize('failed')] = function (value$898) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'failed',
        Threshold$891,
        value$898
    ]);
};
Thresholds$893.prototype[util$890.camelize('skipped')] = function (value$899) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'skipped',
        Threshold$891,
        value$899
    ]);
};