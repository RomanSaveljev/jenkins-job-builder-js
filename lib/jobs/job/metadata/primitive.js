'use strict';
var util$915 = require('../../../misc/util.js');
var Primitive$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
Primitive$917.prototype.up = function () {
    return this.upper;
};
Primitive$917.prototype.and = Primitive$917.prototype.up;
module.exports = Primitive$917;
Primitive$917.prototype[util$915.camelize('name')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$923
    ]);
};
Primitive$917.prototype[util$915.camelize('value')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'value',
        value$924
    ]);
};
Primitive$917.prototype[util$915.camelize('expose-to-env')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'expose-to-env',
        value$925
    ]);
};