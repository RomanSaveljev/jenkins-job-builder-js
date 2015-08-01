'use strict';
var util$890 = require('../../../misc/util.js');
var Ivy$892 = function (upper$902, obj$903) {
    this.upper = upper$902;
    this.obj = obj$903;
};
Ivy$892.prototype.up = function () {
    return this.upper;
};
Ivy$892.prototype.and = Ivy$892.prototype.up;
module.exports = Ivy$892;
Ivy$892.prototype[util$890.camelize('path')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'path',
        value$904
    ]);
};
Ivy$892.prototype[util$890.camelize('settings-path')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'settings-path',
        value$905
    ]);
};
Ivy$892.prototype[util$890.camelize('properties-file')] = function (value$906) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'properties-file',
        value$906
    ]);
};
Ivy$892.prototype[util$890.camelize('properties-content')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'properties-content',
        value$907
    ]);
};
Ivy$892.prototype[util$890.camelize('debug')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'debug',
        value$908
    ]);
};
Ivy$892.prototype[util$890.camelize('download-artifacts')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'download-artifacts',
        value$909
    ]);
};
Ivy$892.prototype[util$890.camelize('enable-concurrent')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'enable-concurrent',
        value$910
    ]);
};
Ivy$892.prototype[util$890.camelize('label')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'label',
        value$911
    ]);
};
Ivy$892.prototype[util$890.camelize('cron')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'cron',
        value$912
    ]);
};