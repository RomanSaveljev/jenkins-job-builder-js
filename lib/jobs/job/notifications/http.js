'use strict';
var util$915 = require('../../../misc/util.js');
var Http$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
Http$917.prototype.up = function () {
    return this.upper;
};
Http$917.prototype.and = Http$917.prototype.up;
module.exports = Http$917;
Http$917.prototype[util$915.camelize('format')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'format',
        value$925
    ]);
};
Http$917.prototype[util$915.camelize('event')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'event',
        value$926
    ]);
};
Http$917.prototype[util$915.camelize('url')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'url',
        value$927
    ]);
};
Http$917.prototype[util$915.camelize('timeout')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'timeout',
        value$928
    ]);
};
Http$917.prototype[util$915.camelize('log')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'log',
        value$929
    ]);
};