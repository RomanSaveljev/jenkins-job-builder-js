'use strict';
var util$915 = require('../../../misc/util.js');
var Dynamic$917 = function (upper$924, obj$925) {
    this.upper = upper$924;
    this.obj = obj$925;
};
Dynamic$917.prototype.up = function () {
    return this.upper;
};
Dynamic$917.prototype.and = Dynamic$917.prototype.up;
module.exports = Dynamic$917;
Dynamic$917.prototype[util$915.camelize('name')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$926
    ]);
};
Dynamic$917.prototype[util$915.camelize('description')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'description',
        value$927
    ]);
};
Dynamic$917.prototype[util$915.camelize('script')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'script',
        value$928
    ]);
};
Dynamic$917.prototype[util$915.camelize('remote')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'remote',
        value$929
    ]);
};
Dynamic$917.prototype[util$915.camelize('classpath')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'classpath',
        value$930
    ]);
};
Dynamic$917.prototype[util$915.camelize('read-only')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'read-only',
        value$931
    ]);
};