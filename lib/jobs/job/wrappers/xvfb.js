'use strict';
var util$890 = require('../../../misc/util.js');
var Xvfb$892 = function (upper$904, obj$905) {
    this.upper = upper$904;
    this.obj = obj$905;
};
Xvfb$892.prototype.up = function () {
    return this.upper;
};
Xvfb$892.prototype.and = Xvfb$892.prototype.up;
module.exports = Xvfb$892;
Xvfb$892.prototype[util$890.camelize('installation-name')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'installation-name',
        value$906
    ]);
};
Xvfb$892.prototype[util$890.camelize('auto-display-name')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'auto-display-name',
        value$907
    ]);
};
Xvfb$892.prototype[util$890.camelize('display-name')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'display-name',
        value$908
    ]);
};
Xvfb$892.prototype[util$890.camelize('assigned-labels')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'assigned-labels',
        value$909
    ]);
};
Xvfb$892.prototype[util$890.camelize('parallel-build')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'parallel-build',
        value$910
    ]);
};
Xvfb$892.prototype[util$890.camelize('timeout')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'timeout',
        value$911
    ]);
};
Xvfb$892.prototype[util$890.camelize('screen')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'screen',
        value$912
    ]);
};
Xvfb$892.prototype[util$890.camelize('display-name-offset')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'display-name-offset',
        value$913
    ]);
};
Xvfb$892.prototype[util$890.camelize('additional-options')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'additional-options',
        value$914
    ]);
};
Xvfb$892.prototype[util$890.camelize('debug')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'debug',
        value$915
    ]);
};
Xvfb$892.prototype[util$890.camelize('shutdown-with-build')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'shutdown-with-build',
        value$916
    ]);
};