'use strict';
var util$890 = require('../../../misc/util.js');
var Targets$891 = require('./ruby-metrics/targets.js');
var RubyMetrics$893 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
RubyMetrics$893.prototype.up = function () {
    return this.upper;
};
RubyMetrics$893.prototype.and = RubyMetrics$893.prototype.up;
module.exports = RubyMetrics$893;
RubyMetrics$893.prototype[util$890.camelize('report-dir')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'report-dir',
        value$898
    ]);
};
RubyMetrics$893.prototype[util$890.camelize('targets')] = function (value$899) {
    return util$890.customArrayAccessor.apply(this, [
        'targets',
        Targets$891,
        value$899
    ]);
};