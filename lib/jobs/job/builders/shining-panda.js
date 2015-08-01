'use strict';
var util$890 = require('../../../misc/util.js');
var ShiningPanda$892 = function (upper$903, obj$904) {
    this.upper = upper$903;
    this.obj = obj$904;
};
ShiningPanda$892.prototype.up = function () {
    return this.upper;
};
ShiningPanda$892.prototype.and = ShiningPanda$892.prototype.up;
module.exports = ShiningPanda$892;
ShiningPanda$892.prototype[util$890.camelize('build-environment')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'build-environment',
        value$905
    ]);
};
ShiningPanda$892.prototype[util$890.camelize('python-version')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'python-version',
        value$906
    ]);
};
ShiningPanda$892.prototype[util$890.camelize('home')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'home',
        value$907
    ]);
};
ShiningPanda$892.prototype[util$890.camelize('name')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$908
    ]);
};
ShiningPanda$892.prototype[util$890.camelize('clear')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'clear',
        value$909
    ]);
};
ShiningPanda$892.prototype[util$890.camelize('use-distribute')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'use-distribute',
        value$910
    ]);
};
ShiningPanda$892.prototype[util$890.camelize('system-site-packages')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'system-site-packages',
        value$911
    ]);
};
ShiningPanda$892.prototype[util$890.camelize('nature')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'nature',
        value$912
    ]);
};
ShiningPanda$892.prototype[util$890.camelize('command')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'command',
        value$913
    ]);
};
ShiningPanda$892.prototype[util$890.camelize('ignore-exit-code')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'ignore-exit-code',
        value$914
    ]);
};