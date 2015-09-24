'use strict';
var util$915 = require('../../../misc/util.js');
var HeavyJob$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
HeavyJob$917.prototype.up = function () {
    return this.upper;
};
HeavyJob$917.prototype.and = HeavyJob$917.prototype.up;
module.exports = HeavyJob$917;
HeavyJob$917.prototype[util$915.camelize('weight')] = function (value$921) {
    return util$915.primitiveAccessor.apply(this, [
        'weight',
        value$921
    ]);
};