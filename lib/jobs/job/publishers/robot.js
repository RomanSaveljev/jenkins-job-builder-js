'use strict';
var util$915 = require('../../../misc/util.js');
var Robot$917 = function (upper$928, obj$929) {
    this.upper = upper$928;
    this.obj = obj$929;
};
Robot$917.prototype.up = function () {
    return this.upper;
};
Robot$917.prototype.and = Robot$917.prototype.up;
module.exports = Robot$917;
Robot$917.prototype[util$915.camelize('output-path')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'output-path',
        value$930
    ]);
};
Robot$917.prototype[util$915.camelize('log-file-link')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'log-file-link',
        value$931
    ]);
};
Robot$917.prototype[util$915.camelize('report-html')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'report-html',
        value$932
    ]);
};
Robot$917.prototype[util$915.camelize('log-html')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'log-html',
        value$933
    ]);
};
Robot$917.prototype[util$915.camelize('output-xml')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'output-xml',
        value$934
    ]);
};
Robot$917.prototype[util$915.camelize('pass-threshold')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'pass-threshold',
        value$935
    ]);
};
Robot$917.prototype[util$915.camelize('unstable-threshold')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'unstable-threshold',
        value$936
    ]);
};
Robot$917.prototype[util$915.camelize('only-critical')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'only-critical',
        value$937
    ]);
};
Robot$917.prototype[util$915.camelize('other-files')] = function (value$938) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'other-files',
        value$938
    ]);
};
Robot$917.prototype[util$915.camelize('archive-output-xml')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'archive-output-xml',
        value$939
    ]);
};