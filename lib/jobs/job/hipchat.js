'use strict';
var util$890 = require('../../misc/util.js');
var HipChat$892 = function (upper$902, obj$903) {
    this.upper = upper$902;
    this.obj = obj$903;
};
HipChat$892.prototype.up = function () {
    return this.upper;
};
HipChat$892.prototype.and = HipChat$892.prototype.up;
module.exports = HipChat$892;
HipChat$892.prototype[util$890.camelize('enabled')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'enabled',
        value$904
    ]);
};
HipChat$892.prototype[util$890.camelize('rooms')] = function (value$905) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'rooms',
        value$905
    ]);
};
HipChat$892.prototype[util$890.camelize('notify-start')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-start',
        value$906
    ]);
};
HipChat$892.prototype[util$890.camelize('notify-success')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-success',
        value$907
    ]);
};
HipChat$892.prototype[util$890.camelize('notify-aborted')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-aborted',
        value$908
    ]);
};
HipChat$892.prototype[util$890.camelize('notify-not-built')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-not-built',
        value$909
    ]);
};
HipChat$892.prototype[util$890.camelize('notify-unstable')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-unstable',
        value$910
    ]);
};
HipChat$892.prototype[util$890.camelize('notify-failure')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-failure',
        value$911
    ]);
};
HipChat$892.prototype[util$890.camelize('notify-back-to-normal')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-back-to-normal',
        value$912
    ]);
};