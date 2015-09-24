'use strict';
var util$915 = require('../../../misc/util.js');
var ManagedScript$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
ManagedScript$917.prototype.up = function () {
    return this.upper;
};
ManagedScript$917.prototype.and = ManagedScript$917.prototype.up;
module.exports = ManagedScript$917;
ManagedScript$917.prototype[util$915.camelize('script-id')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'script-id',
        value$923
    ]);
};
ManagedScript$917.prototype[util$915.camelize('type')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'type',
        value$924
    ]);
};
ManagedScript$917.prototype[util$915.camelize('args')] = function (value$925) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'args',
        value$925
    ]);
};