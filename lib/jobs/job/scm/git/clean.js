'use strict';
var util$890 = require('../../../../misc/util.js');
var Clean$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Clean$892.prototype.up = function () {
    return this.upper;
};
Clean$892.prototype.and = Clean$892.prototype.up;
module.exports = Clean$892;
Clean$892.prototype[util$890.camelize('after')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'after',
        value$897
    ]);
};
Clean$892.prototype[util$890.camelize('before')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'before',
        value$898
    ]);
};