'use strict';
var util$915 = require('../../../misc/util.js');
var Axis$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
Axis$917.prototype.up = function () {
    return this.upper;
};
Axis$917.prototype.and = Axis$917.prototype.up;
module.exports = Axis$917;
Axis$917.prototype[util$915.camelize('type')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'type',
        value$923
    ]);
};
Axis$917.prototype[util$915.camelize('name')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$924
    ]);
};
Axis$917.prototype[util$915.camelize('values')] = function (value$925) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'values',
        value$925
    ]);
};