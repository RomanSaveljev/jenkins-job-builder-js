'use strict';
var util$890 = require('../../../misc/util.js');
var Parameters$891 = require('../parameters.js');
var Builders$892 = require('../builders.js');
var Release$894 = function (upper$903, obj$904) {
    this.upper = upper$903;
    this.obj = obj$904;
};
Release$894.prototype.up = function () {
    return this.upper;
};
Release$894.prototype.and = Release$894.prototype.up;
module.exports = Release$894;
Release$894.prototype[util$890.camelize('keep-forever')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'keep-forever',
        value$905
    ]);
};
Release$894.prototype[util$890.camelize('override-build-parameters')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'override-build-parameters',
        value$906
    ]);
};
Release$894.prototype[util$890.camelize('version-template')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'version-template',
        value$907
    ]);
};
Release$894.prototype[util$890.camelize('parameters')] = function (value$908) {
    return util$890.customArrayAccessor.apply(this, [
        'parameters',
        Parameters$891,
        value$908
    ]);
};
Release$894.prototype[util$890.camelize('pre-build')] = function (value$909) {
    return util$890.customArrayAccessor.apply(this, [
        'pre-build',
        Builders$892,
        value$909
    ]);
};
Release$894.prototype[util$890.camelize('post-build')] = function (value$910) {
    return util$890.customArrayAccessor.apply(this, [
        'post-build',
        Builders$892,
        value$910
    ]);
};
Release$894.prototype[util$890.camelize('post-success')] = function (value$911) {
    return util$890.customArrayAccessor.apply(this, [
        'post-success',
        Builders$892,
        value$911
    ]);
};
Release$894.prototype[util$890.camelize('post-failure')] = function (value$912) {
    return util$890.customArrayAccessor.apply(this, [
        'post-failure',
        Builders$892,
        value$912
    ]);
};