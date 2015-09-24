'use strict';
var util$915 = require('../../../misc/util.js');
var Xvfb$917 = function (upper$929, obj$930) {
    this.upper = upper$929;
    this.obj = obj$930;
};
Xvfb$917.prototype.up = function () {
    return this.upper;
};
Xvfb$917.prototype.and = Xvfb$917.prototype.up;
module.exports = Xvfb$917;
Xvfb$917.prototype[util$915.camelize('installation-name')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'installation-name',
        value$931
    ]);
};
Xvfb$917.prototype[util$915.camelize('auto-display-name')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'auto-display-name',
        value$932
    ]);
};
Xvfb$917.prototype[util$915.camelize('display-name')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'display-name',
        value$933
    ]);
};
Xvfb$917.prototype[util$915.camelize('assigned-labels')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'assigned-labels',
        value$934
    ]);
};
Xvfb$917.prototype[util$915.camelize('parallel-build')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'parallel-build',
        value$935
    ]);
};
Xvfb$917.prototype[util$915.camelize('timeout')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'timeout',
        value$936
    ]);
};
Xvfb$917.prototype[util$915.camelize('screen')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'screen',
        value$937
    ]);
};
Xvfb$917.prototype[util$915.camelize('display-name-offset')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'display-name-offset',
        value$938
    ]);
};
Xvfb$917.prototype[util$915.camelize('additional-options')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'additional-options',
        value$939
    ]);
};
Xvfb$917.prototype[util$915.camelize('debug')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'debug',
        value$940
    ]);
};
Xvfb$917.prototype[util$915.camelize('shutdown-with-build')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'shutdown-with-build',
        value$941
    ]);
};