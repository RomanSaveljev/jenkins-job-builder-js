'use strict';
var util$915 = require('../../../../misc/util.js');
var Bool$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
Bool$917.prototype.up = function () {
    return this.upper;
};
Bool$917.prototype.and = Bool$917.prototype.up;
module.exports = Bool$917;
Bool$917.prototype[util$915.camelize('name')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$922
    ]);
};
Bool$917.prototype[util$915.camelize('value')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'value',
        value$923
    ]);
};