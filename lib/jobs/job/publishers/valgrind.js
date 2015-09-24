'use strict';
var util$915 = require('../../../misc/util.js');
var Thresholds$916 = require('./valgrind/thresholds.js');
var Valgrind$918 = function (upper$925, obj$926) {
    this.upper = upper$925;
    this.obj = obj$926;
};
Valgrind$918.prototype.up = function () {
    return this.upper;
};
Valgrind$918.prototype.and = Valgrind$918.prototype.up;
module.exports = Valgrind$918;
Valgrind$918.prototype[util$915.camelize('pattern')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'pattern',
        value$927
    ]);
};
Valgrind$918.prototype[util$915.camelize('thresholds')] = function (value$928) {
    return util$915.objectAccessor.apply(this, [
        'thresholds',
        Thresholds$916,
        value$928
    ]);
};
Valgrind$918.prototype[util$915.camelize('fail-no-reports')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'fail-no-reports',
        value$929
    ]);
};
Valgrind$918.prototype[util$915.camelize('fail-invalid-reports')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'fail-invalid-reports',
        value$930
    ]);
};
Valgrind$918.prototype[util$915.camelize('publish-if-aborted')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'publish-if-aborted',
        value$931
    ]);
};
Valgrind$918.prototype[util$915.camelize('publish-if-failed')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'publish-if-failed',
        value$932
    ]);
};