'use strict';
var util$915 = require('../../../misc/util.js');
var ExtendedChoice$917 = function (upper$930, obj$931) {
    this.upper = upper$930;
    this.obj = obj$931;
};
ExtendedChoice$917.prototype.up = function () {
    return this.upper;
};
ExtendedChoice$917.prototype.and = ExtendedChoice$917.prototype.up;
module.exports = ExtendedChoice$917;
ExtendedChoice$917.prototype[util$915.camelize('name')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$932
    ]);
};
ExtendedChoice$917.prototype[util$915.camelize('description')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'description',
        value$933
    ]);
};
ExtendedChoice$917.prototype[util$915.camelize('property-file')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'property-file',
        value$934
    ]);
};
ExtendedChoice$917.prototype[util$915.camelize('property-key')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'property-key',
        value$935
    ]);
};
ExtendedChoice$917.prototype[util$915.camelize('quote-value')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'quote-value',
        value$936
    ]);
};
ExtendedChoice$917.prototype[util$915.camelize('visible-items')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'visible-items',
        value$937
    ]);
};
ExtendedChoice$917.prototype[util$915.camelize('type')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'type',
        value$938
    ]);
};
ExtendedChoice$917.prototype[util$915.camelize('value')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'value',
        value$939
    ]);
};
ExtendedChoice$917.prototype[util$915.camelize('default-value')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'default-value',
        value$940
    ]);
};
ExtendedChoice$917.prototype[util$915.camelize('default-property-file')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'default-property-file',
        value$941
    ]);
};
ExtendedChoice$917.prototype[util$915.camelize('default-property-key')] = function (value$942) {
    return util$915.primitiveAccessor.apply(this, [
        'default-property-key',
        value$942
    ]);
};
ExtendedChoice$917.prototype[util$915.camelize('multi-select-delimiter')] = function (value$943) {
    return util$915.primitiveAccessor.apply(this, [
        'multi-select-delimiter',
        value$943
    ]);
};