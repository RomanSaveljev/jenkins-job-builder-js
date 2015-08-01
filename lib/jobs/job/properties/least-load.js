'use strict';
var util$890 = require('../../../misc/util.js');
var LeastLoad$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
LeastLoad$892.prototype.up = function () {
    return this.upper;
};
LeastLoad$892.prototype.and = LeastLoad$892.prototype.up;
module.exports = LeastLoad$892;
LeastLoad$892.prototype[util$890.camelize('disabled')] = function (value$896) {
    return util$890.primitiveAccessor.apply(this, [
        'disabled',
        value$896
    ]);
};