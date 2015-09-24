'use strict';
var util$915 = require('../../../../misc/util.js');
var Remote$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
Remote$917.prototype.up = function () {
    return this.upper;
};
Remote$917.prototype.and = Remote$917.prototype.up;
module.exports = Remote$917;
Remote$917.prototype[util$915.camelize('url')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'url',
        value$923
    ]);
};
Remote$917.prototype[util$915.camelize('refspec')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'refspec',
        value$924
    ]);
};
Remote$917.prototype[util$915.camelize('credentials-id')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'credentials-id',
        value$925
    ]);
};