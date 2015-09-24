'use strict';
var util$915 = require('../../../misc/util.js');
var Thresholds$916 = require('./dry/thresholds.js');
var Pmd$918 = function (upper$931, obj$932) {
    this.upper = upper$931;
    this.obj = obj$932;
};
Pmd$918.prototype.up = function () {
    return this.upper;
};
Pmd$918.prototype.and = Pmd$918.prototype.up;
module.exports = Pmd$918;
Pmd$918.prototype[util$915.camelize('pattern')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'pattern',
        value$933
    ]);
};
Pmd$918.prototype[util$915.camelize('can-run-on-failed')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'can-run-on-failed',
        value$934
    ]);
};
Pmd$918.prototype[util$915.camelize('should-detect-modules')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'should-detect-modules',
        value$935
    ]);
};
Pmd$918.prototype[util$915.camelize('healthy')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'healthy',
        value$936
    ]);
};
Pmd$918.prototype[util$915.camelize('unhealthy')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'unhealthy',
        value$937
    ]);
};
Pmd$918.prototype[util$915.camelize('health-threshold')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'health-threshold',
        value$938
    ]);
};
Pmd$918.prototype[util$915.camelize('thresholds')] = function (value$939) {
    return util$915.objectAccessor.apply(this, [
        'thresholds',
        Thresholds$916,
        value$939
    ]);
};
Pmd$918.prototype[util$915.camelize('default-encoding')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'default-encoding',
        value$940
    ]);
};
Pmd$918.prototype[util$915.camelize('do-not-resolve-relative-paths')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'do-not-resolve-relative-paths',
        value$941
    ]);
};
Pmd$918.prototype[util$915.camelize('dont-compute-new')] = function (value$942) {
    return util$915.primitiveAccessor.apply(this, [
        'dont-compute-new',
        value$942
    ]);
};
Pmd$918.prototype[util$915.camelize('use-stable-build-as-reference')] = function (value$943) {
    return util$915.primitiveAccessor.apply(this, [
        'use-stable-build-as-reference',
        value$943
    ]);
};
Pmd$918.prototype[util$915.camelize('use-delta-values')] = function (value$944) {
    return util$915.primitiveAccessor.apply(this, [
        'use-delta-values',
        value$944
    ]);
};