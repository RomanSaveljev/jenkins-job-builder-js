'use strict';
var util$940 = require('../../../../misc/util.js');
var Entry$942 = function (upper$951, obj$952) {
    this.upper = upper$951;
    this.obj = obj$952;
};
Entry$942.prototype.up = function () {
    return this.upper;
};
Entry$942.prototype.and = Entry$942.prototype.up;
module.exports = Entry$942;
Entry$942.prototype[util$940.camelize('destination-bucket')] = function (value$953) {
    return util$940.primitiveAccessor.apply(this, [
        'destination-bucket',
        value$953
    ]);
};
Entry$942.prototype[util$940.camelize('source-files')] = function (value$954) {
    return util$940.primitiveAccessor.apply(this, [
        'source-files',
        value$954
    ]);
};
Entry$942.prototype[util$940.camelize('storage-class')] = function (value$955) {
    return util$940.primitiveAccessor.apply(this, [
        'storage-class',
        value$955
    ]);
};
Entry$942.prototype[util$940.camelize('bucket-region')] = function (value$956) {
    return util$940.primitiveAccessor.apply(this, [
        'bucket-region',
        value$956
    ]);
};
Entry$942.prototype[util$940.camelize('upload-on-failure')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'upload-on-failure',
        value$957
    ]);
};
Entry$942.prototype[util$940.camelize('upload-from-slave')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'upload-from-slave',
        value$958
    ]);
};
Entry$942.prototype[util$940.camelize('managed-artifacts')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'managed-artifacts',
        value$959
    ]);
};
Entry$942.prototype[util$940.camelize('flatten')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'flatten',
        value$960
    ]);
};