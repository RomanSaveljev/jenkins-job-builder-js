'use strict';
var util$915 = require('../../../misc/util.js');
var Value$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
Value$917.prototype.up = function () {
    return this.upper;
};
Value$917.prototype.and = Value$917.prototype.up;
module.exports = Value$917;
Value$917.prototype[util$915.camelize('name')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$923
    ]);
};
Value$917.prototype[util$915.camelize('default')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'default',
        value$924
    ]);
};
Value$917.prototype[util$915.camelize('description')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'description',
        value$925
    ]);
};