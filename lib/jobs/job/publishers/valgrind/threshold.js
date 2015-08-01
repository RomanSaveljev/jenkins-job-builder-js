'use strict';
var util$890 = require('../../../../misc/util.js');
var Threshold$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Threshold$892.prototype.up = function () {
    return this.upper;
};
Threshold$892.prototype.and = Threshold$892.prototype.up;
module.exports = Threshold$892;
Threshold$892.prototype[util$890.camelize('invalid-read-write')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'invalid-read-write',
        value$898
    ]);
};
Threshold$892.prototype[util$890.camelize('definitely-lost')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'definitely-lost',
        value$899
    ]);
};
Threshold$892.prototype[util$890.camelize('total')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'total',
        value$900
    ]);
};