'use strict';
var util$915 = require('../../../../misc/util.js');
var SparseCheckout$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
SparseCheckout$917.prototype.up = function () {
    return this.upper;
};
SparseCheckout$917.prototype.and = SparseCheckout$917.prototype.up;
module.exports = SparseCheckout$917;
SparseCheckout$917.prototype[util$915.camelize('paths')] = function (value$921) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'paths',
        value$921
    ]);
};