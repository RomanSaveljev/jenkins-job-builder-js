'use strict';
var util$890 = require('../../../misc/util.js');
var SauceOndemand$892 = function (upper$904, obj$905) {
    this.upper = upper$904;
    this.obj = obj$905;
};
SauceOndemand$892.prototype.up = function () {
    return this.upper;
};
SauceOndemand$892.prototype.and = SauceOndemand$892.prototype.up;
module.exports = SauceOndemand$892;
SauceOndemand$892.prototype[util$890.camelize('enable-sauce-connect')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'enable-sauce-connect',
        value$906
    ]);
};
SauceOndemand$892.prototype[util$890.camelize('sauce-host')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'sauce-host',
        value$907
    ]);
};
SauceOndemand$892.prototype[util$890.camelize('sauce-port')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'sauce-port',
        value$908
    ]);
};
SauceOndemand$892.prototype[util$890.camelize('override-username')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'override-username',
        value$909
    ]);
};
SauceOndemand$892.prototype[util$890.camelize('override-api-access-key')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'override-api-access-key',
        value$910
    ]);
};
SauceOndemand$892.prototype[util$890.camelize('starting-url')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'starting-url',
        value$911
    ]);
};
SauceOndemand$892.prototype[util$890.camelize('type')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'type',
        value$912
    ]);
};
SauceOndemand$892.prototype[util$890.camelize('platforms')] = function (value$913) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'platforms',
        value$913
    ]);
};
SauceOndemand$892.prototype[util$890.camelize('launch-sauce-connect-on-slave')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'launch-sauce-connect-on-slave',
        value$914
    ]);
};
SauceOndemand$892.prototype[util$890.camelize('https-protocol')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'https-protocol',
        value$915
    ]);
};
SauceOndemand$892.prototype[util$890.camelize('sauce-connect-options')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'sauce-connect-options',
        value$916
    ]);
};