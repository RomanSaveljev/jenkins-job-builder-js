'use strict';
var util$890 = require('../../../../misc/util.js');
var MetricTarget$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
MetricTarget$892.prototype.up = function () {
    return this.upper;
};
MetricTarget$892.prototype.and = MetricTarget$892.prototype.up;
module.exports = MetricTarget$892;
MetricTarget$892.prototype[util$890.camelize('method')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'method',
        value$897
    ]);
};
MetricTarget$892.prototype[util$890.camelize('statement')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'statement',
        value$898
    ]);
};