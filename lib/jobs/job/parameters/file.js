'use strict';
var util$915 = require('../../../misc/util.js');
var File$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
File$917.prototype.up = function () {
    return this.upper;
};
File$917.prototype.and = File$917.prototype.up;
module.exports = File$917;
File$917.prototype[util$915.camelize('name')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$922
    ]);
};
File$917.prototype[util$915.camelize('description')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'description',
        value$923
    ]);
};