'use strict';
var util$890 = require('../../../../misc/util.js');
var SparseCheckout$892 = function (upper$893, obj$894) {
    this.upper = upper$893;
    this.obj = obj$894;
};
SparseCheckout$892.prototype.up = function () {
    return this.upper;
};
SparseCheckout$892.prototype.and = SparseCheckout$892.prototype.up;
module.exports = SparseCheckout$892;
SparseCheckout$892.prototype.paths = util$890.generatePrimtiveArrayAccessor('obj', 'paths');