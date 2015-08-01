'use strict';
var util$890 = require('../../../misc/util.js');
var EmailExt$892 = function (upper$918, obj$919) {
    this.upper = upper$918;
    this.obj = obj$919;
};
EmailExt$892.prototype.up = function () {
    return this.upper;
};
EmailExt$892.prototype.and = EmailExt$892.prototype.up;
module.exports = EmailExt$892;
EmailExt$892.prototype[util$890.camelize('recipients')] = function (value$920) {
    return util$890.primitiveAccessor.apply(this, [
        'recipients',
        value$920
    ]);
};
EmailExt$892.prototype[util$890.camelize('reply-to')] = function (value$921) {
    return util$890.primitiveAccessor.apply(this, [
        'reply-to',
        value$921
    ]);
};
EmailExt$892.prototype[util$890.camelize('content-type')] = function (value$922) {
    return util$890.primitiveAccessor.apply(this, [
        'content-type',
        value$922
    ]);
};
EmailExt$892.prototype[util$890.camelize('subject')] = function (value$923) {
    return util$890.primitiveAccessor.apply(this, [
        'subject',
        value$923
    ]);
};
EmailExt$892.prototype[util$890.camelize('body')] = function (value$924) {
    return util$890.primitiveAccessor.apply(this, [
        'body',
        value$924
    ]);
};
EmailExt$892.prototype[util$890.camelize('attach-build-log')] = function (value$925) {
    return util$890.primitiveAccessor.apply(this, [
        'attach-build-log',
        value$925
    ]);
};
EmailExt$892.prototype[util$890.camelize('attachments')] = function (value$926) {
    return util$890.primitiveAccessor.apply(this, [
        'attachments',
        value$926
    ]);
};
EmailExt$892.prototype[util$890.camelize('always')] = function (value$927) {
    return util$890.primitiveAccessor.apply(this, [
        'always',
        value$927
    ]);
};
EmailExt$892.prototype[util$890.camelize('unstable')] = function (value$928) {
    return util$890.primitiveAccessor.apply(this, [
        'unstable',
        value$928
    ]);
};
EmailExt$892.prototype[util$890.camelize('first-failure')] = function (value$929) {
    return util$890.primitiveAccessor.apply(this, [
        'first-failure',
        value$929
    ]);
};
EmailExt$892.prototype[util$890.camelize('not-built')] = function (value$930) {
    return util$890.primitiveAccessor.apply(this, [
        'not-built',
        value$930
    ]);
};
EmailExt$892.prototype[util$890.camelize('aborted')] = function (value$931) {
    return util$890.primitiveAccessor.apply(this, [
        'aborted',
        value$931
    ]);
};
EmailExt$892.prototype[util$890.camelize('regression')] = function (value$932) {
    return util$890.primitiveAccessor.apply(this, [
        'regression',
        value$932
    ]);
};
EmailExt$892.prototype[util$890.camelize('failure')] = function (value$933) {
    return util$890.primitiveAccessor.apply(this, [
        'failure',
        value$933
    ]);
};
EmailExt$892.prototype[util$890.camelize('second-failure')] = function (value$934) {
    return util$890.primitiveAccessor.apply(this, [
        'second-failure',
        value$934
    ]);
};
EmailExt$892.prototype[util$890.camelize('improvement')] = function (value$935) {
    return util$890.primitiveAccessor.apply(this, [
        'improvement',
        value$935
    ]);
};
EmailExt$892.prototype[util$890.camelize('still-failing')] = function (value$936) {
    return util$890.primitiveAccessor.apply(this, [
        'still-failing',
        value$936
    ]);
};
EmailExt$892.prototype[util$890.camelize('success')] = function (value$937) {
    return util$890.primitiveAccessor.apply(this, [
        'success',
        value$937
    ]);
};
EmailExt$892.prototype[util$890.camelize('fixed')] = function (value$938) {
    return util$890.primitiveAccessor.apply(this, [
        'fixed',
        value$938
    ]);
};
EmailExt$892.prototype[util$890.camelize('still-unstable')] = function (value$939) {
    return util$890.primitiveAccessor.apply(this, [
        'still-unstable',
        value$939
    ]);
};
EmailExt$892.prototype[util$890.camelize('pre-build')] = function (value$940) {
    return util$890.primitiveAccessor.apply(this, [
        'pre-build',
        value$940
    ]);
};
EmailExt$892.prototype[util$890.camelize('presend-script')] = function (value$941) {
    return util$890.primitiveAccessor.apply(this, [
        'presend-script',
        value$941
    ]);
};
EmailExt$892.prototype[util$890.camelize('save-output')] = function (value$942) {
    return util$890.primitiveAccessor.apply(this, [
        'save-output',
        value$942
    ]);
};
EmailExt$892.prototype[util$890.camelize('matrix-trigger')] = function (value$943) {
    return util$890.primitiveAccessor.apply(this, [
        'matrix-trigger',
        value$943
    ]);
};
EmailExt$892.prototype[util$890.camelize('send-to')] = function (value$944) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'send-to',
        value$944
    ]);
};