'use strict';
var util$915 = require('../../../misc/util.js');
var SauceOndemand$917 = function (upper$929, obj$930) {
    this.upper = upper$929;
    this.obj = obj$930;
};
SauceOndemand$917.prototype.up = function () {
    return this.upper;
};
SauceOndemand$917.prototype.and = SauceOndemand$917.prototype.up;
module.exports = SauceOndemand$917;
SauceOndemand$917.prototype[util$915.camelize('enable-sauce-connect')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'enable-sauce-connect',
        value$931
    ]);
};
SauceOndemand$917.prototype[util$915.camelize('sauce-host')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'sauce-host',
        value$932
    ]);
};
SauceOndemand$917.prototype[util$915.camelize('sauce-port')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'sauce-port',
        value$933
    ]);
};
SauceOndemand$917.prototype[util$915.camelize('override-username')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'override-username',
        value$934
    ]);
};
SauceOndemand$917.prototype[util$915.camelize('override-api-access-key')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'override-api-access-key',
        value$935
    ]);
};
SauceOndemand$917.prototype[util$915.camelize('starting-url')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'starting-url',
        value$936
    ]);
};
SauceOndemand$917.prototype[util$915.camelize('type')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'type',
        value$937
    ]);
};
SauceOndemand$917.prototype[util$915.camelize('platforms')] = function (value$938) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'platforms',
        value$938
    ]);
};
SauceOndemand$917.prototype[util$915.camelize('launch-sauce-connect-on-slave')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'launch-sauce-connect-on-slave',
        value$939
    ]);
};
SauceOndemand$917.prototype[util$915.camelize('https-protocol')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'https-protocol',
        value$940
    ]);
};
SauceOndemand$917.prototype[util$915.camelize('sauce-connect-options')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'sauce-connect-options',
        value$941
    ]);
};