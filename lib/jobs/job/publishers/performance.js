'use strict';
var util$890 = require('../../../misc/util.js');
var Report$891 = require('./performance/report.js');
var Performance$893 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
Performance$893.prototype.up = function () {
    return this.upper;
};
Performance$893.prototype.and = Performance$893.prototype.up;
module.exports = Performance$893;
Performance$893.prototype[util$890.camelize('failed-threshold')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'failed-threshold',
        value$899
    ]);
};
Performance$893.prototype[util$890.camelize('unstable-threshold')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'unstable-threshold',
        value$900
    ]);
};
Performance$893.prototype[util$890.camelize('report')] = function (value$901) {
    return util$890.objectArrayAccessor.apply(this, [
        'report',
        Report$891,
        value$901
    ]);
};