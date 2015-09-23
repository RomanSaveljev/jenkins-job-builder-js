'use strict';
var util$890 = require('../../../../misc/util.js');
var SparseCheckout$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
SparseCheckout$892.prototype.up = function () {
    return this.upper;
};
SparseCheckout$892.prototype.and = SparseCheckout$892.prototype.up;
module.exports = SparseCheckout$892;
SparseCheckout$892.prototype[util$890.camelize('paths')] = function (value$896) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'paths',
        value$896
    ]);
};