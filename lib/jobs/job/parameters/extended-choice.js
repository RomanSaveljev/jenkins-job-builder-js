'use strict';
var util$890 = require('../../../misc/util.js');
var ExtendedChoice$892 = function (upper$905, obj$906) {
    this.upper = upper$905;
    this.obj = obj$906;
};
ExtendedChoice$892.prototype.up = function () {
    return this.upper;
};
ExtendedChoice$892.prototype.and = ExtendedChoice$892.prototype.up;
module.exports = ExtendedChoice$892;
ExtendedChoice$892.prototype[util$890.camelize('name')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$907
    ]);
};
ExtendedChoice$892.prototype[util$890.camelize('description')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'description',
        value$908
    ]);
};
ExtendedChoice$892.prototype[util$890.camelize('property-file')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'property-file',
        value$909
    ]);
};
ExtendedChoice$892.prototype[util$890.camelize('property-key')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'property-key',
        value$910
    ]);
};
ExtendedChoice$892.prototype[util$890.camelize('quote-value')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'quote-value',
        value$911
    ]);
};
ExtendedChoice$892.prototype[util$890.camelize('visible-items')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'visible-items',
        value$912
    ]);
};
ExtendedChoice$892.prototype[util$890.camelize('type')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'type',
        value$913
    ]);
};
ExtendedChoice$892.prototype[util$890.camelize('value')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'value',
        value$914
    ]);
};
ExtendedChoice$892.prototype[util$890.camelize('default-value')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'default-value',
        value$915
    ]);
};
ExtendedChoice$892.prototype[util$890.camelize('default-property-file')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'default-property-file',
        value$916
    ]);
};
ExtendedChoice$892.prototype[util$890.camelize('default-property-key')] = function (value$917) {
    return util$890.primitiveAccessor.apply(this, [
        'default-property-key',
        value$917
    ]);
};
ExtendedChoice$892.prototype[util$890.camelize('multi-select-delimiter')] = function (value$918) {
    return util$890.primitiveAccessor.apply(this, [
        'multi-select-delimiter',
        value$918
    ]);
};