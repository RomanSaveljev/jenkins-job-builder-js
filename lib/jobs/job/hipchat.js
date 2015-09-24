'use strict';
var util$915 = require('../../misc/util.js');
var HipChat$917 = function (upper$927, obj$928) {
    this.upper = upper$927;
    this.obj = obj$928;
};
HipChat$917.prototype.up = function () {
    return this.upper;
};
HipChat$917.prototype.and = HipChat$917.prototype.up;
module.exports = HipChat$917;
HipChat$917.prototype[util$915.camelize('enabled')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'enabled',
        value$929
    ]);
};
HipChat$917.prototype[util$915.camelize('rooms')] = function (value$930) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'rooms',
        value$930
    ]);
};
HipChat$917.prototype[util$915.camelize('notify-start')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-start',
        value$931
    ]);
};
HipChat$917.prototype[util$915.camelize('notify-success')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-success',
        value$932
    ]);
};
HipChat$917.prototype[util$915.camelize('notify-aborted')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-aborted',
        value$933
    ]);
};
HipChat$917.prototype[util$915.camelize('notify-not-built')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-not-built',
        value$934
    ]);
};
HipChat$917.prototype[util$915.camelize('notify-unstable')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-unstable',
        value$935
    ]);
};
HipChat$917.prototype[util$915.camelize('notify-failure')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-failure',
        value$936
    ]);
};
HipChat$917.prototype[util$915.camelize('notify-back-to-normal')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-back-to-normal',
        value$937
    ]);
};