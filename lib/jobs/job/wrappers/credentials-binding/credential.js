'use strict';
var util$915 = require('../../../../misc/util.js');
var Credential$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
Credential$917.prototype.up = function () {
    return this.upper;
};
Credential$917.prototype.and = Credential$917.prototype.up;
module.exports = Credential$917;
Credential$917.prototype[util$915.camelize('credential-id')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'credential-id',
        value$922
    ]);
};
Credential$917.prototype[util$915.camelize('variable')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'variable',
        value$923
    ]);
};