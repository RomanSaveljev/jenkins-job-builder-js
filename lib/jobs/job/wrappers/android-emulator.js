'use strict';
var util$890 = require('../../../misc/util.js');
var HardwareProperties$892 = require('./android-emulator/hardware-properties.js');
var AndroidEmulator$893 = function (upper$909, obj$910) {
    this.upper = upper$909;
    this.obj = obj$910;
};
AndroidEmulator$893.prototype.up = function () {
    return this.upper;
};
AndroidEmulator$893.prototype.and = AndroidEmulator$893.prototype.up;
module.exports = AndroidEmulator$893;
AndroidEmulator$893.prototype[util$890.camelize('avd')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'avd',
        value$911
    ]);
};
AndroidEmulator$893.prototype[util$890.camelize('os')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'os',
        value$912
    ]);
};
AndroidEmulator$893.prototype[util$890.camelize('screen-density')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'screen-density',
        value$913
    ]);
};
AndroidEmulator$893.prototype[util$890.camelize('screen-resolution')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'screen-resolution',
        value$914
    ]);
};
AndroidEmulator$893.prototype[util$890.camelize('locale')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'locale',
        value$915
    ]);
};
AndroidEmulator$893.prototype[util$890.camelize('target-abi')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'target-abi',
        value$916
    ]);
};
AndroidEmulator$893.prototype[util$890.camelize('sd-card')] = function (value$917) {
    return util$890.primitiveAccessor.apply(this, [
        'sd-card',
        value$917
    ]);
};
AndroidEmulator$893.prototype[util$890.camelize('wipe')] = function (value$918) {
    return util$890.primitiveAccessor.apply(this, [
        'wipe',
        value$918
    ]);
};
AndroidEmulator$893.prototype[util$890.camelize('show-window')] = function (value$919) {
    return util$890.primitiveAccessor.apply(this, [
        'show-window',
        value$919
    ]);
};
AndroidEmulator$893.prototype[util$890.camelize('snapshot')] = function (value$920) {
    return util$890.primitiveAccessor.apply(this, [
        'snapshot',
        value$920
    ]);
};
AndroidEmulator$893.prototype[util$890.camelize('delete')] = function (value$921) {
    return util$890.primitiveAccessor.apply(this, [
        'delete',
        value$921
    ]);
};
AndroidEmulator$893.prototype[util$890.camelize('startup-delay')] = function (value$922) {
    return util$890.primitiveAccessor.apply(this, [
        'startup-delay',
        value$922
    ]);
};
AndroidEmulator$893.prototype[util$890.camelize('commandline-options')] = function (value$923) {
    return util$890.primitiveAccessor.apply(this, [
        'commandline-options',
        value$923
    ]);
};
AndroidEmulator$893.prototype[util$890.camelize('exe')] = function (value$924) {
    return util$890.primitiveAccessor.apply(this, [
        'exe',
        value$924
    ]);
};
AndroidEmulator$893.prototype[util$890.camelize('hardware-properties')] = function (value$925) {
    return util$890.objectAccessor.apply(this, [
        'hardware-properties',
        HardwareProperties$892,
        value$925
    ]);
};