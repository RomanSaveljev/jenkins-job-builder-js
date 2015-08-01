'use strict';
var util$890 = require('../../../misc/util.js');
var Thresholds$891 = require('./dry/thresholds.js');
var FindBugs$893 = function (upper$908, obj$909) {
    this.upper = upper$908;
    this.obj = obj$909;
};
FindBugs$893.prototype.up = function () {
    return this.upper;
};
FindBugs$893.prototype.and = FindBugs$893.prototype.up;
module.exports = FindBugs$893;
FindBugs$893.prototype[util$890.camelize('pattern')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'pattern',
        value$910
    ]);
};
FindBugs$893.prototype[util$890.camelize('rank-priority')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'rank-priority',
        value$911
    ]);
};
FindBugs$893.prototype[util$890.camelize('include-files')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'include-files',
        value$912
    ]);
};
FindBugs$893.prototype[util$890.camelize('exclude-files')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'exclude-files',
        value$913
    ]);
};
FindBugs$893.prototype[util$890.camelize('can-run-on-failed')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'can-run-on-failed',
        value$914
    ]);
};
FindBugs$893.prototype[util$890.camelize('should-detect-modules')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'should-detect-modules',
        value$915
    ]);
};
FindBugs$893.prototype[util$890.camelize('healthy')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'healthy',
        value$916
    ]);
};
FindBugs$893.prototype[util$890.camelize('unhealthy')] = function (value$917) {
    return util$890.primitiveAccessor.apply(this, [
        'unhealthy',
        value$917
    ]);
};
FindBugs$893.prototype[util$890.camelize('health-threshold')] = function (value$918) {
    return util$890.primitiveAccessor.apply(this, [
        'health-threshold',
        value$918
    ]);
};
FindBugs$893.prototype[util$890.camelize('dont-compute-new')] = function (value$919) {
    return util$890.primitiveAccessor.apply(this, [
        'dont-compute-new',
        value$919
    ]);
};
FindBugs$893.prototype[util$890.camelize('use-delta-values')] = function (value$920) {
    return util$890.primitiveAccessor.apply(this, [
        'use-delta-values',
        value$920
    ]);
};
FindBugs$893.prototype[util$890.camelize('use-previous-build-as-reference')] = function (value$921) {
    return util$890.primitiveAccessor.apply(this, [
        'use-previous-build-as-reference',
        value$921
    ]);
};
FindBugs$893.prototype[util$890.camelize('use-stable-build-as-reference')] = function (value$922) {
    return util$890.primitiveAccessor.apply(this, [
        'use-stable-build-as-reference',
        value$922
    ]);
};
FindBugs$893.prototype[util$890.camelize('thresholds')] = function (value$923) {
    return util$890.objectAccessor.apply(this, [
        'thresholds',
        Thresholds$891,
        value$923
    ]);
};