'use strict';
var util$915 = require('../../../misc/util.js');
var ShiningPanda$917 = function (upper$928, obj$929) {
    this.upper = upper$928;
    this.obj = obj$929;
};
ShiningPanda$917.prototype.up = function () {
    return this.upper;
};
ShiningPanda$917.prototype.and = ShiningPanda$917.prototype.up;
module.exports = ShiningPanda$917;
ShiningPanda$917.prototype[util$915.camelize('build-environment')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'build-environment',
        value$930
    ]);
};
ShiningPanda$917.prototype[util$915.camelize('python-version')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'python-version',
        value$931
    ]);
};
ShiningPanda$917.prototype[util$915.camelize('home')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'home',
        value$932
    ]);
};
ShiningPanda$917.prototype[util$915.camelize('name')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$933
    ]);
};
ShiningPanda$917.prototype[util$915.camelize('clear')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'clear',
        value$934
    ]);
};
ShiningPanda$917.prototype[util$915.camelize('use-distribute')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'use-distribute',
        value$935
    ]);
};
ShiningPanda$917.prototype[util$915.camelize('system-site-packages')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'system-site-packages',
        value$936
    ]);
};
ShiningPanda$917.prototype[util$915.camelize('nature')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'nature',
        value$937
    ]);
};
ShiningPanda$917.prototype[util$915.camelize('command')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'command',
        value$938
    ]);
};
ShiningPanda$917.prototype[util$915.camelize('ignore-exit-code')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'ignore-exit-code',
        value$939
    ]);
};