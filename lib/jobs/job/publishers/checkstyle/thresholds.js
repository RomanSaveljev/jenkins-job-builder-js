'use strict';
var util$890 = require('../../../../misc/util.js');
var Unstable$891 = require('./threshold.js');
var Failed$892 = require('./threshold.js');
var Thresholds$894 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
Thresholds$894.prototype.up = function () {
    return this.upper;
};
Thresholds$894.prototype.and = Thresholds$894.prototype.up;
module.exports = Thresholds$894;
Thresholds$894.prototype[util$890.camelize('unstable')] = function (value$899) {
    return util$890.objectAccessor.apply(this, [
        'unstable',
        Unstable$891,
        value$899
    ]);
};
Thresholds$894.prototype[util$890.camelize('failed')] = function (value$900) {
    return util$890.objectAccessor.apply(this, [
        'failed',
        Failed$892,
        value$900
    ]);
};