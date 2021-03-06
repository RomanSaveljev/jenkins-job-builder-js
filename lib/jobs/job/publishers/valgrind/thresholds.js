'use strict';
var util$940 = require('../../../../misc/util.js');
var Threshold$941 = require('./threshold.js');
var Thresholds$943 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
Thresholds$943.prototype.up = function () {
    return this.upper;
};
Thresholds$943.prototype.and = Thresholds$943.prototype.up;
module.exports = Thresholds$943;
Thresholds$943.prototype[util$940.camelize('unstable')] = function (value$948) {
    return util$940.objectAccessor.apply(this, [
        'unstable',
        Threshold$941,
        value$948
    ]);
};
Thresholds$943.prototype[util$940.camelize('failed')] = function (value$949) {
    return util$940.objectAccessor.apply(this, [
        'failed',
        Threshold$941,
        value$949
    ]);
};