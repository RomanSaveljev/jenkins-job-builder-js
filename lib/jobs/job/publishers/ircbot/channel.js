'use strict';
var util$915 = require('../../../../misc/util.js');
var Channel$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
Channel$917.prototype.up = function () {
    return this.upper;
};
Channel$917.prototype.and = Channel$917.prototype.up;
module.exports = Channel$917;
Channel$917.prototype[util$915.camelize('name')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$923
    ]);
};
Channel$917.prototype[util$915.camelize('password')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'password',
        value$924
    ]);
};
Channel$917.prototype[util$915.camelize('notify-only')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-only',
        value$925
    ]);
};