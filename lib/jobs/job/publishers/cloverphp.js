'use strict';
var util$915 = require('../../../misc/util.js');
var Html$916 = require('./cloverphp/html.js');
var MetricTargets$917 = require('./cloverphp/metric-targets.js');
var Cloverphp$919 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
Cloverphp$919.prototype.up = function () {
    return this.upper;
};
Cloverphp$919.prototype.and = Cloverphp$919.prototype.up;
module.exports = Cloverphp$919;
Cloverphp$919.prototype[util$915.camelize('xml-location')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'xml-location',
        value$925
    ]);
};
Cloverphp$919.prototype[util$915.camelize('html')] = function (value$926) {
    return util$915.objectAccessor.apply(this, [
        'html',
        Html$916,
        value$926
    ]);
};
Cloverphp$919.prototype[util$915.camelize('metric-targets')] = function (value$927) {
    return util$915.customArrayAccessor.apply(this, [
        'metric-targets',
        MetricTargets$917,
        value$927
    ]);
};