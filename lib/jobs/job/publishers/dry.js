'use strict';
var util$915 = require('../../../misc/util.js');
var Thresholds$916 = require('./dry/thresholds.js');
var Dry$918 = function (upper$933, obj$934) {
    this.upper = upper$933;
    this.obj = obj$934;
};
Dry$918.prototype.up = function () {
    return this.upper;
};
Dry$918.prototype.and = Dry$918.prototype.up;
module.exports = Dry$918;
Dry$918.prototype[util$915.camelize('pattern')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'pattern',
        value$935
    ]);
};
Dry$918.prototype[util$915.camelize('can-run-on-failed')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'can-run-on-failed',
        value$936
    ]);
};
Dry$918.prototype[util$915.camelize('should-detect-modules')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'should-detect-modules',
        value$937
    ]);
};
Dry$918.prototype[util$915.camelize('healthy')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'healthy',
        value$938
    ]);
};
Dry$918.prototype[util$915.camelize('unhealthy')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'unhealthy',
        value$939
    ]);
};
Dry$918.prototype[util$915.camelize('health-threshold')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'health-threshold',
        value$940
    ]);
};
Dry$918.prototype[util$915.camelize('high-threshold')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'high-threshold',
        value$941
    ]);
};
Dry$918.prototype[util$915.camelize('normal-threshold')] = function (value$942) {
    return util$915.primitiveAccessor.apply(this, [
        'normal-threshold',
        value$942
    ]);
};
Dry$918.prototype[util$915.camelize('thresholds')] = function (value$943) {
    return util$915.objectAccessor.apply(this, [
        'thresholds',
        Thresholds$916,
        value$943
    ]);
};
Dry$918.prototype[util$915.camelize('default-encoding')] = function (value$944) {
    return util$915.primitiveAccessor.apply(this, [
        'default-encoding',
        value$944
    ]);
};
Dry$918.prototype[util$915.camelize('do-not-resolve-relative-paths')] = function (value$945) {
    return util$915.primitiveAccessor.apply(this, [
        'do-not-resolve-relative-paths',
        value$945
    ]);
};
Dry$918.prototype[util$915.camelize('dont-compute-new')] = function (value$946) {
    return util$915.primitiveAccessor.apply(this, [
        'dont-compute-new',
        value$946
    ]);
};
Dry$918.prototype[util$915.camelize('use-stable-build-as-reference')] = function (value$947) {
    return util$915.primitiveAccessor.apply(this, [
        'use-stable-build-as-reference',
        value$947
    ]);
};
Dry$918.prototype[util$915.camelize('use-delta-values')] = function (value$948) {
    return util$915.primitiveAccessor.apply(this, [
        'use-delta-values',
        value$948
    ]);
};