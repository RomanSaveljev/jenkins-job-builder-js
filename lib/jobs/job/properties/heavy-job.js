'use strict';
var util$890 = require('../../../misc/util.js');
var HeavyJob$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
HeavyJob$892.prototype.up = function () {
    return this.upper;
};
HeavyJob$892.prototype.and = HeavyJob$892.prototype.up;
module.exports = HeavyJob$892;
HeavyJob$892.prototype[util$890.camelize('weight')] = function (value$896) {
    return util$890.primitiveAccessor.apply(this, [
        'weight',
        value$896
    ]);
};