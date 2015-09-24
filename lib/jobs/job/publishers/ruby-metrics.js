'use strict';
var util$915 = require('../../../misc/util.js');
var Targets$916 = require('./ruby-metrics/targets.js');
var RubyMetrics$918 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
RubyMetrics$918.prototype.up = function () {
    return this.upper;
};
RubyMetrics$918.prototype.and = RubyMetrics$918.prototype.up;
module.exports = RubyMetrics$918;
RubyMetrics$918.prototype[util$915.camelize('report-dir')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'report-dir',
        value$923
    ]);
};
RubyMetrics$918.prototype[util$915.camelize('targets')] = function (value$924) {
    return util$915.customArrayAccessor.apply(this, [
        'targets',
        Targets$916,
        value$924
    ]);
};