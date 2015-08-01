'use strict';
var util$890 = require('../../../../misc/util.js');
var Healthy$891 = require('./metric-target.js');
var Unhealthy$892 = require('./metric-target.js');
var Failing$893 = require('./metric-target.js');
var MetricTargets$895 = function (upper$899, array$900) {
    this.upper = upper$899;
    this.array = array$900;
};
MetricTargets$895.prototype.up = function () {
    return this.upper;
};
MetricTargets$895.prototype.and = MetricTargets$895.prototype.up;
module.exports = MetricTargets$895;
MetricTargets$895.prototype[util$890.camelize('healthy')] = function (value$901) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'healthy',
        Healthy$891,
        value$901
    ]);
};
MetricTargets$895.prototype[util$890.camelize('healthy')] = function (value$902) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'healthy',
        Unhealthy$892,
        value$902
    ]);
};
MetricTargets$895.prototype[util$890.camelize('failing')] = function (value$903) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'failing',
        Failing$893,
        value$903
    ]);
};