'use strict';
var util$915 = require('../../../misc/util.js');
var Targets$916 = require('./cobertura/targets.js');
var Cobertura$918 = function (upper$929, obj$930) {
    this.upper = upper$929;
    this.obj = obj$930;
};
Cobertura$918.prototype.up = function () {
    return this.upper;
};
Cobertura$918.prototype.and = Cobertura$918.prototype.up;
module.exports = Cobertura$918;
Cobertura$918.prototype[util$915.camelize('report-file')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'report-file',
        value$931
    ]);
};
Cobertura$918.prototype[util$915.camelize('only-stable')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'only-stable',
        value$932
    ]);
};
Cobertura$918.prototype[util$915.camelize('fail-no-reports')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'fail-no-reports',
        value$933
    ]);
};
Cobertura$918.prototype[util$915.camelize('fail-unhealthy')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'fail-unhealthy',
        value$934
    ]);
};
Cobertura$918.prototype[util$915.camelize('fail-unstable')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'fail-unstable',
        value$935
    ]);
};
Cobertura$918.prototype[util$915.camelize('health-auto-update')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'health-auto-update',
        value$936
    ]);
};
Cobertura$918.prototype[util$915.camelize('stability-auto-update')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'stability-auto-update',
        value$937
    ]);
};
Cobertura$918.prototype[util$915.camelize('zoom-coverage-chart')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'zoom-coverage-chart',
        value$938
    ]);
};
Cobertura$918.prototype[util$915.camelize('source-encoding')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'source-encoding',
        value$939
    ]);
};
Cobertura$918.prototype[util$915.camelize('targets')] = function (value$940) {
    return util$915.customArrayAccessor.apply(this, [
        'targets',
        Targets$916,
        value$940
    ]);
};