'use strict';
var util$915 = require('../../../../misc/util.js');
var Redis$917 = function (upper$924, obj$925) {
    this.upper = upper$924;
    this.obj = obj$925;
};
Redis$917.prototype.up = function () {
    return this.upper;
};
Redis$917.prototype.and = Redis$917.prototype.up;
module.exports = Redis$917;
Redis$917.prototype[util$915.camelize('host')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'host',
        value$926
    ]);
};
Redis$917.prototype[util$915.camelize('port')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'port',
        value$927
    ]);
};
Redis$917.prototype[util$915.camelize('database-number')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'database-number',
        value$928
    ]);
};
Redis$917.prototype[util$915.camelize('database-password')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'database-password',
        value$929
    ]);
};
Redis$917.prototype[util$915.camelize('data-type')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'data-type',
        value$930
    ]);
};
Redis$917.prototype[util$915.camelize('key')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'key',
        value$931
    ]);
};