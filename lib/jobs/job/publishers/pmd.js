'use strict';
var util$890 = require('../../../misc/util.js');
var Thresholds$891 = require('./dry/thresholds.js');
var Pmd$893 = function (upper$906, obj$907) {
    this.upper = upper$906;
    this.obj = obj$907;
};
Pmd$893.prototype.up = function () {
    return this.upper;
};
Pmd$893.prototype.and = Pmd$893.prototype.up;
module.exports = Pmd$893;
Pmd$893.prototype[util$890.camelize('pattern')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'pattern',
        value$908
    ]);
};
Pmd$893.prototype[util$890.camelize('can-run-on-failed')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'can-run-on-failed',
        value$909
    ]);
};
Pmd$893.prototype[util$890.camelize('should-detect-modules')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'should-detect-modules',
        value$910
    ]);
};
Pmd$893.prototype[util$890.camelize('healthy')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'healthy',
        value$911
    ]);
};
Pmd$893.prototype[util$890.camelize('unhealthy')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'unhealthy',
        value$912
    ]);
};
Pmd$893.prototype[util$890.camelize('health-threshold')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'health-threshold',
        value$913
    ]);
};
Pmd$893.prototype[util$890.camelize('thresholds')] = function (value$914) {
    return util$890.objectAccessor.apply(this, [
        'thresholds',
        Thresholds$891,
        value$914
    ]);
};
Pmd$893.prototype[util$890.camelize('default-encoding')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'default-encoding',
        value$915
    ]);
};
Pmd$893.prototype[util$890.camelize('do-not-resolve-relative-paths')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'do-not-resolve-relative-paths',
        value$916
    ]);
};
Pmd$893.prototype[util$890.camelize('dont-compute-new')] = function (value$917) {
    return util$890.primitiveAccessor.apply(this, [
        'dont-compute-new',
        value$917
    ]);
};
Pmd$893.prototype[util$890.camelize('use-stable-build-as-reference')] = function (value$918) {
    return util$890.primitiveAccessor.apply(this, [
        'use-stable-build-as-reference',
        value$918
    ]);
};
Pmd$893.prototype[util$890.camelize('use-delta-values')] = function (value$919) {
    return util$890.primitiveAccessor.apply(this, [
        'use-delta-values',
        value$919
    ]);
};