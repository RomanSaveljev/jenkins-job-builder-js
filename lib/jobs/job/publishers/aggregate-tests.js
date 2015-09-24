'use strict';
var util$915 = require('../../../misc/util.js');
var AggregateTests$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
AggregateTests$917.prototype.up = function () {
    return this.upper;
};
AggregateTests$917.prototype.and = AggregateTests$917.prototype.up;
module.exports = AggregateTests$917;
AggregateTests$917.prototype[util$915.camelize('include-failed-builds')] = function (value$921) {
    return util$915.primitiveAccessor.apply(this, [
        'include-failed-builds',
        value$921
    ]);
};