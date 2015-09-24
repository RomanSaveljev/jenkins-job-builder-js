'use strict';
var util$915 = require('../../../misc/util.js');
var Thresholds$916 = require('./dry/thresholds.js');
var FindBugs$918 = function (upper$933, obj$934) {
    this.upper = upper$933;
    this.obj = obj$934;
};
FindBugs$918.prototype.up = function () {
    return this.upper;
};
FindBugs$918.prototype.and = FindBugs$918.prototype.up;
module.exports = FindBugs$918;
FindBugs$918.prototype[util$915.camelize('pattern')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'pattern',
        value$935
    ]);
};
FindBugs$918.prototype[util$915.camelize('rank-priority')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'rank-priority',
        value$936
    ]);
};
FindBugs$918.prototype[util$915.camelize('include-files')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'include-files',
        value$937
    ]);
};
FindBugs$918.prototype[util$915.camelize('exclude-files')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'exclude-files',
        value$938
    ]);
};
FindBugs$918.prototype[util$915.camelize('can-run-on-failed')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'can-run-on-failed',
        value$939
    ]);
};
FindBugs$918.prototype[util$915.camelize('should-detect-modules')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'should-detect-modules',
        value$940
    ]);
};
FindBugs$918.prototype[util$915.camelize('healthy')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'healthy',
        value$941
    ]);
};
FindBugs$918.prototype[util$915.camelize('unhealthy')] = function (value$942) {
    return util$915.primitiveAccessor.apply(this, [
        'unhealthy',
        value$942
    ]);
};
FindBugs$918.prototype[util$915.camelize('health-threshold')] = function (value$943) {
    return util$915.primitiveAccessor.apply(this, [
        'health-threshold',
        value$943
    ]);
};
FindBugs$918.prototype[util$915.camelize('dont-compute-new')] = function (value$944) {
    return util$915.primitiveAccessor.apply(this, [
        'dont-compute-new',
        value$944
    ]);
};
FindBugs$918.prototype[util$915.camelize('use-delta-values')] = function (value$945) {
    return util$915.primitiveAccessor.apply(this, [
        'use-delta-values',
        value$945
    ]);
};
FindBugs$918.prototype[util$915.camelize('use-previous-build-as-reference')] = function (value$946) {
    return util$915.primitiveAccessor.apply(this, [
        'use-previous-build-as-reference',
        value$946
    ]);
};
FindBugs$918.prototype[util$915.camelize('use-stable-build-as-reference')] = function (value$947) {
    return util$915.primitiveAccessor.apply(this, [
        'use-stable-build-as-reference',
        value$947
    ]);
};
FindBugs$918.prototype[util$915.camelize('thresholds')] = function (value$948) {
    return util$915.objectAccessor.apply(this, [
        'thresholds',
        Thresholds$916,
        value$948
    ]);
};