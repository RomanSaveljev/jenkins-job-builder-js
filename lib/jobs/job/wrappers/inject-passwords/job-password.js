'use strict';
var util$915 = require('../../../../misc/util.js');
var JobPassword$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
JobPassword$917.prototype.up = function () {
    return this.upper;
};
JobPassword$917.prototype.and = JobPassword$917.prototype.up;
module.exports = JobPassword$917;
JobPassword$917.prototype[util$915.camelize('name')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$922
    ]);
};
JobPassword$917.prototype[util$915.camelize('password')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'password',
        value$923
    ]);
};