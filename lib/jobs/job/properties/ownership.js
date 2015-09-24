'use strict';
var util$915 = require('../../../misc/util.js');
var Ownership$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
Ownership$917.prototype.up = function () {
    return this.upper;
};
Ownership$917.prototype.and = Ownership$917.prototype.up;
module.exports = Ownership$917;
Ownership$917.prototype[util$915.camelize('enabled')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'enabled',
        value$923
    ]);
};
Ownership$917.prototype[util$915.camelize('owner')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'owner',
        value$924
    ]);
};
Ownership$917.prototype[util$915.camelize('co-owners')] = function (value$925) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'co-owners',
        value$925
    ]);
};