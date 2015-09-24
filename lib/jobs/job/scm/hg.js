'use strict';
var util$915 = require('../../../misc/util.js');
var Hg$917 = function (upper$928, obj$929) {
    this.upper = upper$928;
    this.obj = obj$929;
};
Hg$917.prototype.up = function () {
    return this.upper;
};
Hg$917.prototype.and = Hg$917.prototype.up;
module.exports = Hg$917;
Hg$917.prototype[util$915.camelize('url')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'url',
        value$930
    ]);
};
Hg$917.prototype[util$915.camelize('credentials-id')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'credentials-id',
        value$931
    ]);
};
Hg$917.prototype[util$915.camelize('revision-type')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'revision-type',
        value$932
    ]);
};
Hg$917.prototype[util$915.camelize('revision')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'revision',
        value$933
    ]);
};
Hg$917.prototype[util$915.camelize('modules')] = function (value$934) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'modules',
        value$934
    ]);
};
Hg$917.prototype[util$915.camelize('clean')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'clean',
        value$935
    ]);
};
Hg$917.prototype[util$915.camelize('subdir')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'subdir',
        value$936
    ]);
};
Hg$917.prototype[util$915.camelize('disable-changelog')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'disable-changelog',
        value$937
    ]);
};
Hg$917.prototype[util$915.camelize('browser')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'browser',
        value$938
    ]);
};
Hg$917.prototype[util$915.camelize('browser-url')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'browser-url',
        value$939
    ]);
};