'use strict';
var util$915 = require('../../../misc/util.js');
var Choice$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
Choice$917.prototype.up = function () {
    return this.upper;
};
Choice$917.prototype.and = Choice$917.prototype.up;
module.exports = Choice$917;
Choice$917.prototype[util$915.camelize('name')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$923
    ]);
};
Choice$917.prototype[util$915.camelize('choices')] = function (value$924) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'choices',
        value$924
    ]);
};
Choice$917.prototype[util$915.camelize('description')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'description',
        value$925
    ]);
};