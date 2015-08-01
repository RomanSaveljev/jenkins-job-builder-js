'use strict';
var util$890 = require('../../../misc/util.js');
var Thresholds$891 = require('./dry/thresholds.js');
var Dry$893 = function (upper$908, obj$909) {
    this.upper = upper$908;
    this.obj = obj$909;
};
Dry$893.prototype.up = function () {
    return this.upper;
};
Dry$893.prototype.and = Dry$893.prototype.up;
module.exports = Dry$893;
Dry$893.prototype[util$890.camelize('pattern')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'pattern',
        value$910
    ]);
};
Dry$893.prototype[util$890.camelize('can-run-on-failed')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'can-run-on-failed',
        value$911
    ]);
};
Dry$893.prototype[util$890.camelize('should-detect-modules')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'should-detect-modules',
        value$912
    ]);
};
Dry$893.prototype[util$890.camelize('healthy')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'healthy',
        value$913
    ]);
};
Dry$893.prototype[util$890.camelize('unhealthy')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'unhealthy',
        value$914
    ]);
};
Dry$893.prototype[util$890.camelize('health-threshold')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'health-threshold',
        value$915
    ]);
};
Dry$893.prototype[util$890.camelize('high-threshold')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'high-threshold',
        value$916
    ]);
};
Dry$893.prototype[util$890.camelize('normal-threshold')] = function (value$917) {
    return util$890.primitiveAccessor.apply(this, [
        'normal-threshold',
        value$917
    ]);
};
Dry$893.prototype[util$890.camelize('thresholds')] = function (value$918) {
    return util$890.objectAccessor.apply(this, [
        'thresholds',
        Thresholds$891,
        value$918
    ]);
};
Dry$893.prototype[util$890.camelize('default-encoding')] = function (value$919) {
    return util$890.primitiveAccessor.apply(this, [
        'default-encoding',
        value$919
    ]);
};
Dry$893.prototype[util$890.camelize('do-not-resolve-relative-paths')] = function (value$920) {
    return util$890.primitiveAccessor.apply(this, [
        'do-not-resolve-relative-paths',
        value$920
    ]);
};
Dry$893.prototype[util$890.camelize('dont-compute-new')] = function (value$921) {
    return util$890.primitiveAccessor.apply(this, [
        'dont-compute-new',
        value$921
    ]);
};
Dry$893.prototype[util$890.camelize('use-stable-build-as-reference')] = function (value$922) {
    return util$890.primitiveAccessor.apply(this, [
        'use-stable-build-as-reference',
        value$922
    ]);
};
Dry$893.prototype[util$890.camelize('use-delta-values')] = function (value$923) {
    return util$890.primitiveAccessor.apply(this, [
        'use-delta-values',
        value$923
    ]);
};