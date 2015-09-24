'use strict';
var util$915 = require('../../../../misc/util.js');
var MetricTarget$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
MetricTarget$917.prototype.up = function () {
    return this.upper;
};
MetricTarget$917.prototype.and = MetricTarget$917.prototype.up;
module.exports = MetricTarget$917;
MetricTarget$917.prototype[util$915.camelize('method')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'method',
        value$922
    ]);
};
MetricTarget$917.prototype[util$915.camelize('statement')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'statement',
        value$923
    ]);
};