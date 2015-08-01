'use strict';
var util$890 = require('../../../misc/util.js');
var Targets$891 = require('./cobertura/targets.js');
var Cobertura$893 = function (upper$904, obj$905) {
    this.upper = upper$904;
    this.obj = obj$905;
};
Cobertura$893.prototype.up = function () {
    return this.upper;
};
Cobertura$893.prototype.and = Cobertura$893.prototype.up;
module.exports = Cobertura$893;
Cobertura$893.prototype[util$890.camelize('report-file')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'report-file',
        value$906
    ]);
};
Cobertura$893.prototype[util$890.camelize('only-stable')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'only-stable',
        value$907
    ]);
};
Cobertura$893.prototype[util$890.camelize('fail-no-reports')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'fail-no-reports',
        value$908
    ]);
};
Cobertura$893.prototype[util$890.camelize('fail-unhealthy')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'fail-unhealthy',
        value$909
    ]);
};
Cobertura$893.prototype[util$890.camelize('fail-unstable')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'fail-unstable',
        value$910
    ]);
};
Cobertura$893.prototype[util$890.camelize('health-auto-update')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'health-auto-update',
        value$911
    ]);
};
Cobertura$893.prototype[util$890.camelize('stability-auto-update')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'stability-auto-update',
        value$912
    ]);
};
Cobertura$893.prototype[util$890.camelize('zoom-coverage-chart')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'zoom-coverage-chart',
        value$913
    ]);
};
Cobertura$893.prototype[util$890.camelize('source-encoding')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'source-encoding',
        value$914
    ]);
};
Cobertura$893.prototype[util$890.camelize('targets')] = function (value$915) {
    return util$890.customArrayAccessor.apply(this, [
        'targets',
        Targets$891,
        value$915
    ]);
};