'use strict';
var util$915 = require('../../../../misc/util.js');
var Entry$917 = function (upper$927, obj$928) {
    this.upper = upper$927;
    this.obj = obj$928;
};
Entry$917.prototype.up = function () {
    return this.upper;
};
Entry$917.prototype.and = Entry$917.prototype.up;
module.exports = Entry$917;
Entry$917.prototype[util$915.camelize('files')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'files',
        value$929
    ]);
};
Entry$917.prototype[util$915.camelize('basedir')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'basedir',
        value$930
    ]);
};
Entry$917.prototype[util$915.camelize('excludes')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'excludes',
        value$931
    ]);
};
Entry$917.prototype[util$915.camelize('remote')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'remote',
        value$932
    ]);
};
Entry$917.prototype[util$915.camelize('flatten')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'flatten',
        value$933
    ]);
};
Entry$917.prototype[util$915.camelize('delete-remote')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'delete-remote',
        value$934
    ]);
};
Entry$917.prototype[util$915.camelize('delete-remote-artifacts')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'delete-remote-artifacts',
        value$935
    ]);
};
Entry$917.prototype[util$915.camelize('fail-no-files')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'fail-no-files',
        value$936
    ]);
};
Entry$917.prototype[util$915.camelize('groovy-script')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'groovy-script',
        value$937
    ]);
};