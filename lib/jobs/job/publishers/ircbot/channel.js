'use strict';
var util$890 = require('../../../../misc/util.js');
var Channel$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Channel$892.prototype.up = function () {
    return this.upper;
};
Channel$892.prototype.and = Channel$892.prototype.up;
module.exports = Channel$892;
Channel$892.prototype[util$890.camelize('name')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$898
    ]);
};
Channel$892.prototype[util$890.camelize('password')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'password',
        value$899
    ]);
};
Channel$892.prototype[util$890.camelize('notify-only')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-only',
        value$900
    ]);
};