'use strict';
var util$890 = require('../../../misc/util.js');
var Value$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Value$892.prototype.up = function () {
    return this.upper;
};
Value$892.prototype.and = Value$892.prototype.up;
module.exports = Value$892;
Value$892.prototype[util$890.camelize('name')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$898
    ]);
};
Value$892.prototype[util$890.camelize('default')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'default',
        value$899
    ]);
};
Value$892.prototype[util$890.camelize('description')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'description',
        value$900
    ]);
};