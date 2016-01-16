'use strict';
var util$940 = require('../../../misc/util.js');
var BuildBlocker$942 = function (upper$946, obj$947) {
    this.upper = upper$946;
    this.obj = obj$947;
};
BuildBlocker$942.prototype.up = function () {
    return this.upper;
};
BuildBlocker$942.prototype.and = BuildBlocker$942.prototype.up;
module.exports = BuildBlocker$942;
BuildBlocker$942.prototype[util$940.camelize('use-build-blocker')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'use-build-blocker',
        value$948
    ]);
};
BuildBlocker$942.prototype[util$940.camelize('blocking-jobs')] = function (value$949) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'blocking-jobs',
        value$949
    ]);
};
BuildBlocker$942.prototype[util$940.camelize('queue-scanning')] = function (value$950) {
    return util$940.primitiveAccessor.apply(this, [
        'queue-scanning',
        value$950
    ]);
};