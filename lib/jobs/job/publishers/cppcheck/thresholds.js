'use strict';
var util$915 = require('../../../../misc/util.js');
var Severity$916 = require('./thresholds/severity.js');
var Thresholds$918 = function (upper$924, obj$925) {
    this.upper = upper$924;
    this.obj = obj$925;
};
Thresholds$918.prototype.up = function () {
    return this.upper;
};
Thresholds$918.prototype.and = Thresholds$918.prototype.up;
module.exports = Thresholds$918;
Thresholds$918.prototype[util$915.camelize('unstable')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'unstable',
        value$926
    ]);
};
Thresholds$918.prototype[util$915.camelize('new-unstable')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'new-unstable',
        value$927
    ]);
};
Thresholds$918.prototype[util$915.camelize('failure')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'failure',
        value$928
    ]);
};
Thresholds$918.prototype[util$915.camelize('new-failure')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'new-failure',
        value$929
    ]);
};
Thresholds$918.prototype[util$915.camelize('severity')] = function (value$930) {
    return util$915.objectAccessor.apply(this, [
        'severity',
        Severity$916,
        value$930
    ]);
};