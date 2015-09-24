'use strict';
var util$915 = require('../../../../misc/util.js');
var Tag$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
Tag$917.prototype.up = function () {
    return this.upper;
};
Tag$917.prototype.and = Tag$917.prototype.up;
module.exports = Tag$917;
Tag$917.prototype[util$915.camelize('remote')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'remote',
        value$925
    ]);
};
Tag$917.prototype[util$915.camelize('name')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$926
    ]);
};
Tag$917.prototype[util$915.camelize('message')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'message',
        value$927
    ]);
};
Tag$917.prototype[util$915.camelize('create-tag')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'create-tag',
        value$928
    ]);
};
Tag$917.prototype[util$915.camelize('update-tag')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'update-tag',
        value$929
    ]);
};