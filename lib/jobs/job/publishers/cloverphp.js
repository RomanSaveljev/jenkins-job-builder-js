'use strict';
var util$890 = require('../../../misc/util.js');
var Html$891 = require('./cloverphp/html.js');
var MetricTargets$892 = require('./cloverphp/metric-targets.js');
var Cloverphp$894 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
Cloverphp$894.prototype.up = function () {
    return this.upper;
};
Cloverphp$894.prototype.and = Cloverphp$894.prototype.up;
module.exports = Cloverphp$894;
Cloverphp$894.prototype[util$890.camelize('xml-location')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'xml-location',
        value$900
    ]);
};
Cloverphp$894.prototype[util$890.camelize('html')] = function (value$901) {
    return util$890.objectAccessor.apply(this, [
        'html',
        Html$891,
        value$901
    ]);
};
Cloverphp$894.prototype[util$890.camelize('metric-targets')] = function (value$902) {
    return util$890.customArrayAccessor.apply(this, [
        'metric-targets',
        MetricTargets$892,
        value$902
    ]);
};