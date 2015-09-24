'use strict';
var util$915 = require('../../../../misc/util.js');
var Healthy$916 = require('./metric-target.js');
var Unhealthy$917 = require('./metric-target.js');
var Failing$918 = require('./metric-target.js');
var MetricTargets$920 = function (upper$924, array$925) {
    this.upper = upper$924;
    this.array = array$925;
};
MetricTargets$920.prototype.up = function () {
    return this.upper;
};
MetricTargets$920.prototype.and = MetricTargets$920.prototype.up;
module.exports = MetricTargets$920;
MetricTargets$920.prototype[util$915.camelize('healthy')] = function (value$926) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'healthy',
        Healthy$916,
        value$926
    ]);
};
MetricTargets$920.prototype[util$915.camelize('unhealthy')] = function (value$927) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'unhealthy',
        Unhealthy$917,
        value$927
    ]);
};
MetricTargets$920.prototype[util$915.camelize('failing')] = function (value$928) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'failing',
        Failing$918,
        value$928
    ]);
};