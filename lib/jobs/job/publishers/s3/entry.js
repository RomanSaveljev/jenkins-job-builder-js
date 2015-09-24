'use strict';
var util$940 = require('../../../../misc/util.js');
var Entry$942 = function (upper$950, obj$951) {
    this.upper = upper$950;
    this.obj = obj$951;
};
Entry$942.prototype.up = function () {
    return this.upper;
};
Entry$942.prototype.and = Entry$942.prototype.up;
module.exports = Entry$942;
Entry$942.prototype[util$940.camelize('destination-bucket')] = function (value$952) {
    return util$940.primitiveAccessor.apply(this, [
        'destination-bucket',
        value$952
    ]);
};
Entry$942.prototype[util$940.camelize('source-files')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'source-files',
        value$953
    ]);
};
Entry$942.prototype[util$940.camelize('storage-class')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'storage-class',
        value$954
    ]);
};
Entry$942.prototype[util$940.camelize('bucket-region')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'bucket-region',
        value$955
    ]);
};
Entry$942.prototype[util$940.camelize('upload-on-failure')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'upload-on-failure',
        value$956
    ]);
};
Entry$942.prototype[util$940.camelize('upload-from-slave')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'upload-from-slave',
        value$957
    ]);
};
Entry$942.prototype[util$940.camelize('managed-artifacts')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'managed-artifacts',
        value$958
    ]);
};