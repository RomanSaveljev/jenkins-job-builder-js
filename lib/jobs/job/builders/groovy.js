'use strict';
var util$890 = require('../../../misc/util.js');
var Groovy$892 = function (upper$901, obj$902) {
    this.upper = upper$901;
    this.obj = obj$902;
};
Groovy$892.prototype.up = function () {
    return this.upper;
};
Groovy$892.prototype.and = Groovy$892.prototype.up;
module.exports = Groovy$892;
Groovy$892.prototype[util$890.camelize('file')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'file',
        value$903
    ]);
};
Groovy$892.prototype[util$890.camelize('command')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'command',
        value$904
    ]);
};
Groovy$892.prototype[util$890.camelize('version')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'version',
        value$905
    ]);
};
Groovy$892.prototype[util$890.camelize('parameters')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'parameters',
        value$906
    ]);
};
Groovy$892.prototype[util$890.camelize('script-parameters')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'script-parameters',
        value$907
    ]);
};
Groovy$892.prototype[util$890.camelize('properties')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'properties',
        value$908
    ]);
};
Groovy$892.prototype[util$890.camelize('java-opts')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'java-opts',
        value$909
    ]);
};
Groovy$892.prototype[util$890.camelize('class-path')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'class-path',
        value$910
    ]);
};