'use strict';
var util$890 = require('../../../misc/util.js');
var Inject$892 = function (upper$903, obj$904) {
    this.upper = upper$903;
    this.obj = obj$904;
};
Inject$892.prototype.up = function () {
    return this.upper;
};
Inject$892.prototype.and = Inject$892.prototype.up;
module.exports = Inject$892;
Inject$892.prototype[util$890.camelize('properties-file')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'properties-file',
        value$905
    ]);
};
Inject$892.prototype[util$890.camelize('properties-content')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'properties-content',
        value$906
    ]);
};
Inject$892.prototype[util$890.camelize('script-file')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'script-file',
        value$907
    ]);
};
Inject$892.prototype[util$890.camelize('script-content')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'script-content',
        value$908
    ]);
};
Inject$892.prototype[util$890.camelize('groovy-content')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'groovy-content',
        value$909
    ]);
};
Inject$892.prototype[util$890.camelize('load-from-master')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'load-from-master',
        value$910
    ]);
};
Inject$892.prototype[util$890.camelize('enabled')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'enabled',
        value$911
    ]);
};
Inject$892.prototype[util$890.camelize('keep-system-variables')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'keep-system-variables',
        value$912
    ]);
};
Inject$892.prototype[util$890.camelize('keep-build-variables')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'keep-build-variables',
        value$913
    ]);
};
Inject$892.prototype[util$890.camelize('override-build-parameters')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'override-build-parameters',
        value$914
    ]);
};