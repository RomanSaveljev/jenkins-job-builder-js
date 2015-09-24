'use strict';
var util$915 = require('../../../misc/util.js');
var DateObject$917 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
DateObject$917.prototype.up = function () {
    return this.upper;
};
DateObject$917.prototype.and = DateObject$917.prototype.up;
module.exports = DateObject$917;
DateObject$917.prototype[util$915.camelize('name')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$924
    ]);
};
DateObject$917.prototype[util$915.camelize('time')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'time',
        value$925
    ]);
};
DateObject$917.prototype[util$915.camelize('timezone')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'timezone',
        value$926
    ]);
};
DateObject$917.prototype[util$915.camelize('expose-to-env')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'expose-to-env',
        value$927
    ]);
};