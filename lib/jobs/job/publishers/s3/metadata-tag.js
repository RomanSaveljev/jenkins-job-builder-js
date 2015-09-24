'use strict';
var util$915 = require('../../../../misc/util.js');
var MetadataTag$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
MetadataTag$917.prototype.up = function () {
    return this.upper;
};
MetadataTag$917.prototype.and = MetadataTag$917.prototype.up;
module.exports = MetadataTag$917;
MetadataTag$917.prototype[util$915.camelize('key')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'key',
        value$922
    ]);
};
MetadataTag$917.prototype[util$915.camelize('value')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'value',
        value$923
    ]);
};