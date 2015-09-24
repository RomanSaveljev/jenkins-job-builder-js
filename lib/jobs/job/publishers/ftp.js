'use strict';
var util$915 = require('../../../misc/util.js');
var Ftp$917 = function (upper$927, obj$928) {
    this.upper = upper$927;
    this.obj = obj$928;
};
Ftp$917.prototype.up = function () {
    return this.upper;
};
Ftp$917.prototype.and = Ftp$917.prototype.up;
module.exports = Ftp$917;
Ftp$917.prototype[util$915.camelize('site')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'site',
        value$929
    ]);
};
Ftp$917.prototype[util$915.camelize('target')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'target',
        value$930
    ]);
};
Ftp$917.prototype[util$915.camelize('target-is-date-format')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'target-is-date-format',
        value$931
    ]);
};
Ftp$917.prototype[util$915.camelize('clean-remote')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'clean-remote',
        value$932
    ]);
};
Ftp$917.prototype[util$915.camelize('source')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'source',
        value$933
    ]);
};
Ftp$917.prototype[util$915.camelize('excludes')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'excludes',
        value$934
    ]);
};
Ftp$917.prototype[util$915.camelize('remove-prefix')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'remove-prefix',
        value$935
    ]);
};
Ftp$917.prototype[util$915.camelize('fail-on-error')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'fail-on-error',
        value$936
    ]);
};
Ftp$917.prototype[util$915.camelize('flatten')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'flatten',
        value$937
    ]);
};