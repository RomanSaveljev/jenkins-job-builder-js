'use strict';
var util$915 = require('../../../misc/util.js');
var HardwareProperties$917 = require('./android-emulator/hardware-properties.js');
var AndroidEmulator$918 = function (upper$934, obj$935) {
    this.upper = upper$934;
    this.obj = obj$935;
};
AndroidEmulator$918.prototype.up = function () {
    return this.upper;
};
AndroidEmulator$918.prototype.and = AndroidEmulator$918.prototype.up;
module.exports = AndroidEmulator$918;
AndroidEmulator$918.prototype[util$915.camelize('avd')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'avd',
        value$936
    ]);
};
AndroidEmulator$918.prototype[util$915.camelize('os')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'os',
        value$937
    ]);
};
AndroidEmulator$918.prototype[util$915.camelize('screen-density')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'screen-density',
        value$938
    ]);
};
AndroidEmulator$918.prototype[util$915.camelize('screen-resolution')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'screen-resolution',
        value$939
    ]);
};
AndroidEmulator$918.prototype[util$915.camelize('locale')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'locale',
        value$940
    ]);
};
AndroidEmulator$918.prototype[util$915.camelize('target-abi')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'target-abi',
        value$941
    ]);
};
AndroidEmulator$918.prototype[util$915.camelize('sd-card')] = function (value$942) {
    return util$915.primitiveAccessor.apply(this, [
        'sd-card',
        value$942
    ]);
};
AndroidEmulator$918.prototype[util$915.camelize('wipe')] = function (value$943) {
    return util$915.primitiveAccessor.apply(this, [
        'wipe',
        value$943
    ]);
};
AndroidEmulator$918.prototype[util$915.camelize('show-window')] = function (value$944) {
    return util$915.primitiveAccessor.apply(this, [
        'show-window',
        value$944
    ]);
};
AndroidEmulator$918.prototype[util$915.camelize('snapshot')] = function (value$945) {
    return util$915.primitiveAccessor.apply(this, [
        'snapshot',
        value$945
    ]);
};
AndroidEmulator$918.prototype[util$915.camelize('delete')] = function (value$946) {
    return util$915.primitiveAccessor.apply(this, [
        'delete',
        value$946
    ]);
};
AndroidEmulator$918.prototype[util$915.camelize('startup-delay')] = function (value$947) {
    return util$915.primitiveAccessor.apply(this, [
        'startup-delay',
        value$947
    ]);
};
AndroidEmulator$918.prototype[util$915.camelize('commandline-options')] = function (value$948) {
    return util$915.primitiveAccessor.apply(this, [
        'commandline-options',
        value$948
    ]);
};
AndroidEmulator$918.prototype[util$915.camelize('exe')] = function (value$949) {
    return util$915.primitiveAccessor.apply(this, [
        'exe',
        value$949
    ]);
};
AndroidEmulator$918.prototype[util$915.camelize('hardware-properties')] = function (value$950) {
    return util$915.objectAccessor.apply(this, [
        'hardware-properties',
        HardwareProperties$917,
        value$950
    ]);
};