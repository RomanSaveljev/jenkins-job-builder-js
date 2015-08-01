'use strict';
var util$890 = require('../../../misc/util.js');
var Primitive$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Primitive$892.prototype.up = function () {
    return this.upper;
};
Primitive$892.prototype.and = Primitive$892.prototype.up;
module.exports = Primitive$892;
Primitive$892.prototype[util$890.camelize('name')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$898
    ]);
};
Primitive$892.prototype[util$890.camelize('value')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'value',
        value$899
    ]);
};
Primitive$892.prototype[util$890.camelize('expose-to-env')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'expose-to-env',
        value$900
    ]);
};