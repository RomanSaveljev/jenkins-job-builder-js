'use strict';
var util$915 = require('../../../../misc/util.js');
var Entry$917 = function (upper$925, obj$926) {
    this.upper = upper$925;
    this.obj = obj$926;
};
Entry$917.prototype.up = function () {
    return this.upper;
};
Entry$917.prototype.and = Entry$917.prototype.up;
module.exports = Entry$917;
Entry$917.prototype[util$915.camelize('destination-bucket')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'destination-bucket',
        value$927
    ]);
};
Entry$917.prototype[util$915.camelize('source-files')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'source-files',
        value$928
    ]);
};
Entry$917.prototype[util$915.camelize('storage-class')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'storage-class',
        value$929
    ]);
};
Entry$917.prototype[util$915.camelize('bucket-region')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'bucket-region',
        value$930
    ]);
};
Entry$917.prototype[util$915.camelize('upload-on-failure')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'upload-on-failure',
        value$931
    ]);
};
Entry$917.prototype[util$915.camelize('upload-from-slave')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'upload-from-slave',
        value$932
    ]);
};
Entry$917.prototype[util$915.camelize('managed-artifacts')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'managed-artifacts',
        value$933
    ]);
};