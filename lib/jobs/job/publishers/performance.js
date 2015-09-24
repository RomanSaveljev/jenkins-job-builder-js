'use strict';
var util$915 = require('../../../misc/util.js');
var Report$916 = require('./performance/report.js');
var Performance$918 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
Performance$918.prototype.up = function () {
    return this.upper;
};
Performance$918.prototype.and = Performance$918.prototype.up;
module.exports = Performance$918;
Performance$918.prototype[util$915.camelize('failed-threshold')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'failed-threshold',
        value$924
    ]);
};
Performance$918.prototype[util$915.camelize('unstable-threshold')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'unstable-threshold',
        value$925
    ]);
};
Performance$918.prototype[util$915.camelize('report')] = function (value$926) {
    return util$915.objectArrayAccessor.apply(this, [
        'report',
        Report$916,
        value$926
    ]);
};