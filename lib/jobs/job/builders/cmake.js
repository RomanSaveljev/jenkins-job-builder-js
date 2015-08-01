'use strict';
var util$890 = require('../../../misc/util.js');
var Cmake$892 = function (upper$905, obj$906) {
    this.upper = upper$905;
    this.obj = obj$906;
};
Cmake$892.prototype.up = function () {
    return this.upper;
};
Cmake$892.prototype.and = Cmake$892.prototype.up;
module.exports = Cmake$892;
Cmake$892.prototype[util$890.camelize('source-dir')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'source-dir',
        value$907
    ]);
};
Cmake$892.prototype[util$890.camelize('build-dir')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'build-dir',
        value$908
    ]);
};
Cmake$892.prototype[util$890.camelize('install-dir')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'install-dir',
        value$909
    ]);
};
Cmake$892.prototype[util$890.camelize('build-type')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'build-type',
        value$910
    ]);
};
Cmake$892.prototype[util$890.camelize('generator')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'generator',
        value$911
    ]);
};
Cmake$892.prototype[util$890.camelize('make-command')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'make-command',
        value$912
    ]);
};
Cmake$892.prototype[util$890.camelize('install-command')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'install-command',
        value$913
    ]);
};
Cmake$892.prototype[util$890.camelize('preload-script')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'preload-script',
        value$914
    ]);
};
Cmake$892.prototype[util$890.camelize('other-arguments')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'other-arguments',
        value$915
    ]);
};
Cmake$892.prototype[util$890.camelize('custom-cmake-path')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'custom-cmake-path',
        value$916
    ]);
};
Cmake$892.prototype[util$890.camelize('clean-build-dir')] = function (value$917) {
    return util$890.primitiveAccessor.apply(this, [
        'clean-build-dir',
        value$917
    ]);
};
Cmake$892.prototype[util$890.camelize('clean-install-dir')] = function (value$918) {
    return util$890.primitiveAccessor.apply(this, [
        'clean-install-dir',
        value$918
    ]);
};