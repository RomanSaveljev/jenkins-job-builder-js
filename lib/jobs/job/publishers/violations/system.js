'use strict';
var util$915 = require('../../../../misc/util.js');
var System$917 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
System$917.prototype.up = function () {
    return this.upper;
};
System$917.prototype.and = System$917.prototype.up;
module.exports = System$917;
System$917.prototype[util$915.camelize('min')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'min',
        value$924
    ]);
};
System$917.prototype[util$915.camelize('max')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'max',
        value$925
    ]);
};
System$917.prototype[util$915.camelize('unstable')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'unstable',
        value$926
    ]);
};
System$917.prototype[util$915.camelize('pattern')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'pattern',
        value$927
    ]);
};