'use strict';
var util$915 = require('../../../misc/util.js');
var Parameters$916 = require('../parameters.js');
var Builders$917 = require('../builders.js');
var Release$919 = function (upper$928, obj$929) {
    this.upper = upper$928;
    this.obj = obj$929;
};
Release$919.prototype.up = function () {
    return this.upper;
};
Release$919.prototype.and = Release$919.prototype.up;
module.exports = Release$919;
Release$919.prototype[util$915.camelize('keep-forever')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'keep-forever',
        value$930
    ]);
};
Release$919.prototype[util$915.camelize('override-build-parameters')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'override-build-parameters',
        value$931
    ]);
};
Release$919.prototype[util$915.camelize('version-template')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'version-template',
        value$932
    ]);
};
Release$919.prototype[util$915.camelize('parameters')] = function (value$933) {
    return util$915.customArrayAccessor.apply(this, [
        'parameters',
        Parameters$916,
        value$933
    ]);
};
Release$919.prototype[util$915.camelize('pre-build')] = function (value$934) {
    return util$915.customArrayAccessor.apply(this, [
        'pre-build',
        Builders$917,
        value$934
    ]);
};
Release$919.prototype[util$915.camelize('post-build')] = function (value$935) {
    return util$915.customArrayAccessor.apply(this, [
        'post-build',
        Builders$917,
        value$935
    ]);
};
Release$919.prototype[util$915.camelize('post-success')] = function (value$936) {
    return util$915.customArrayAccessor.apply(this, [
        'post-success',
        Builders$917,
        value$936
    ]);
};
Release$919.prototype[util$915.camelize('post-failed')] = function (value$937) {
    return util$915.customArrayAccessor.apply(this, [
        'post-failed',
        Builders$917,
        value$937
    ]);
};