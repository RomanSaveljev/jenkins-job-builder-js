'use strict';
var util$890 = require('../../../../misc/util.js');
var Parameter$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Parameter$892.prototype.up = function () {
    return this.upper;
};
Parameter$892.prototype.and = Parameter$892.prototype.up;
module.exports = Parameter$892;
Parameter$892.prototype[util$890.camelize('name')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$897
    ]);
};
Parameter$892.prototype[util$890.camelize('value')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'value',
        value$898
    ]);
};