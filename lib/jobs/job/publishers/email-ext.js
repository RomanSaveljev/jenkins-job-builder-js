'use strict';
var util$915 = require('../../../misc/util.js');
var EmailExt$917 = function (upper$943, obj$944) {
    this.upper = upper$943;
    this.obj = obj$944;
};
EmailExt$917.prototype.up = function () {
    return this.upper;
};
EmailExt$917.prototype.and = EmailExt$917.prototype.up;
module.exports = EmailExt$917;
EmailExt$917.prototype[util$915.camelize('recipients')] = function (value$945) {
    return util$915.primitiveAccessor.apply(this, [
        'recipients',
        value$945
    ]);
};
EmailExt$917.prototype[util$915.camelize('reply-to')] = function (value$946) {
    return util$915.primitiveAccessor.apply(this, [
        'reply-to',
        value$946
    ]);
};
EmailExt$917.prototype[util$915.camelize('content-type')] = function (value$947) {
    return util$915.primitiveAccessor.apply(this, [
        'content-type',
        value$947
    ]);
};
EmailExt$917.prototype[util$915.camelize('subject')] = function (value$948) {
    return util$915.primitiveAccessor.apply(this, [
        'subject',
        value$948
    ]);
};
EmailExt$917.prototype[util$915.camelize('body')] = function (value$949) {
    return util$915.primitiveAccessor.apply(this, [
        'body',
        value$949
    ]);
};
EmailExt$917.prototype[util$915.camelize('attach-build-log')] = function (value$950) {
    return util$915.primitiveAccessor.apply(this, [
        'attach-build-log',
        value$950
    ]);
};
EmailExt$917.prototype[util$915.camelize('attachments')] = function (value$951) {
    return util$915.primitiveAccessor.apply(this, [
        'attachments',
        value$951
    ]);
};
EmailExt$917.prototype[util$915.camelize('always')] = function (value$952) {
    return util$915.primitiveAccessor.apply(this, [
        'always',
        value$952
    ]);
};
EmailExt$917.prototype[util$915.camelize('unstable')] = function (value$953) {
    return util$915.primitiveAccessor.apply(this, [
        'unstable',
        value$953
    ]);
};
EmailExt$917.prototype[util$915.camelize('first-failure')] = function (value$954) {
    return util$915.primitiveAccessor.apply(this, [
        'first-failure',
        value$954
    ]);
};
EmailExt$917.prototype[util$915.camelize('not-built')] = function (value$955) {
    return util$915.primitiveAccessor.apply(this, [
        'not-built',
        value$955
    ]);
};
EmailExt$917.prototype[util$915.camelize('aborted')] = function (value$956) {
    return util$915.primitiveAccessor.apply(this, [
        'aborted',
        value$956
    ]);
};
EmailExt$917.prototype[util$915.camelize('regression')] = function (value$957) {
    return util$915.primitiveAccessor.apply(this, [
        'regression',
        value$957
    ]);
};
EmailExt$917.prototype[util$915.camelize('failure')] = function (value$958) {
    return util$915.primitiveAccessor.apply(this, [
        'failure',
        value$958
    ]);
};
EmailExt$917.prototype[util$915.camelize('second-failure')] = function (value$959) {
    return util$915.primitiveAccessor.apply(this, [
        'second-failure',
        value$959
    ]);
};
EmailExt$917.prototype[util$915.camelize('improvement')] = function (value$960) {
    return util$915.primitiveAccessor.apply(this, [
        'improvement',
        value$960
    ]);
};
EmailExt$917.prototype[util$915.camelize('still-failing')] = function (value$961) {
    return util$915.primitiveAccessor.apply(this, [
        'still-failing',
        value$961
    ]);
};
EmailExt$917.prototype[util$915.camelize('success')] = function (value$962) {
    return util$915.primitiveAccessor.apply(this, [
        'success',
        value$962
    ]);
};
EmailExt$917.prototype[util$915.camelize('fixed')] = function (value$963) {
    return util$915.primitiveAccessor.apply(this, [
        'fixed',
        value$963
    ]);
};
EmailExt$917.prototype[util$915.camelize('still-unstable')] = function (value$964) {
    return util$915.primitiveAccessor.apply(this, [
        'still-unstable',
        value$964
    ]);
};
EmailExt$917.prototype[util$915.camelize('pre-build')] = function (value$965) {
    return util$915.primitiveAccessor.apply(this, [
        'pre-build',
        value$965
    ]);
};
EmailExt$917.prototype[util$915.camelize('presend-script')] = function (value$966) {
    return util$915.primitiveAccessor.apply(this, [
        'presend-script',
        value$966
    ]);
};
EmailExt$917.prototype[util$915.camelize('save-output')] = function (value$967) {
    return util$915.primitiveAccessor.apply(this, [
        'save-output',
        value$967
    ]);
};
EmailExt$917.prototype[util$915.camelize('matrix-trigger')] = function (value$968) {
    return util$915.primitiveAccessor.apply(this, [
        'matrix-trigger',
        value$968
    ]);
};
EmailExt$917.prototype[util$915.camelize('send-to')] = function (value$969) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'send-to',
        value$969
    ]);
};