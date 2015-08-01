'use strict';
var util$890 = require('../../../../misc/util.js');
var Series$892 = function (upper$902, obj$903) {
    this.upper = upper$902;
    this.obj = obj$903;
};
Series$892.prototype.up = function () {
    return this.upper;
};
Series$892.prototype.and = Series$892.prototype.up;
module.exports = Series$892;
Series$892.prototype[util$890.camelize('file')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'file',
        value$904
    ]);
};
Series$892.prototype[util$890.camelize('inclusion-flag')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'inclusion-flag',
        value$905
    ]);
};
Series$892.prototype[util$890.camelize('exclude')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'exclude',
        value$906
    ]);
};
Series$892.prototype[util$890.camelize('url')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'url',
        value$907
    ]);
};
Series$892.prototype[util$890.camelize('display-table')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'display-table',
        value$908
    ]);
};
Series$892.prototype[util$890.camelize('label')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'label',
        value$909
    ]);
};
Series$892.prototype[util$890.camelize('format')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'format',
        value$910
    ]);
};
Series$892.prototype[util$890.camelize('xpath-type')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'xpath-type',
        value$911
    ]);
};
Series$892.prototype[util$890.camelize('xpath')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'xpath',
        value$912
    ]);
};