'use strict';
var util$915 = require('../../../misc/util.js');
var Cmake$917 = function (upper$930, obj$931) {
    this.upper = upper$930;
    this.obj = obj$931;
};
Cmake$917.prototype.up = function () {
    return this.upper;
};
Cmake$917.prototype.and = Cmake$917.prototype.up;
module.exports = Cmake$917;
Cmake$917.prototype[util$915.camelize('source-dir')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'source-dir',
        value$932
    ]);
};
Cmake$917.prototype[util$915.camelize('build-dir')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'build-dir',
        value$933
    ]);
};
Cmake$917.prototype[util$915.camelize('install-dir')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'install-dir',
        value$934
    ]);
};
Cmake$917.prototype[util$915.camelize('build-type')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'build-type',
        value$935
    ]);
};
Cmake$917.prototype[util$915.camelize('generator')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'generator',
        value$936
    ]);
};
Cmake$917.prototype[util$915.camelize('make-command')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'make-command',
        value$937
    ]);
};
Cmake$917.prototype[util$915.camelize('install-command')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'install-command',
        value$938
    ]);
};
Cmake$917.prototype[util$915.camelize('preload-script')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'preload-script',
        value$939
    ]);
};
Cmake$917.prototype[util$915.camelize('other-arguments')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'other-arguments',
        value$940
    ]);
};
Cmake$917.prototype[util$915.camelize('custom-cmake-path')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'custom-cmake-path',
        value$941
    ]);
};
Cmake$917.prototype[util$915.camelize('clean-build-dir')] = function (value$942) {
    return util$915.primitiveAccessor.apply(this, [
        'clean-build-dir',
        value$942
    ]);
};
Cmake$917.prototype[util$915.camelize('clean-install-dir')] = function (value$943) {
    return util$915.primitiveAccessor.apply(this, [
        'clean-install-dir',
        value$943
    ]);
};