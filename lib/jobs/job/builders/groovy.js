'use strict';
var util$915 = require('../../../misc/util.js');
var Groovy$917 = function (upper$926, obj$927) {
    this.upper = upper$926;
    this.obj = obj$927;
};
Groovy$917.prototype.up = function () {
    return this.upper;
};
Groovy$917.prototype.and = Groovy$917.prototype.up;
module.exports = Groovy$917;
Groovy$917.prototype[util$915.camelize('file')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'file',
        value$928
    ]);
};
Groovy$917.prototype[util$915.camelize('command')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'command',
        value$929
    ]);
};
Groovy$917.prototype[util$915.camelize('version')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'version',
        value$930
    ]);
};
Groovy$917.prototype[util$915.camelize('parameters')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'parameters',
        value$931
    ]);
};
Groovy$917.prototype[util$915.camelize('script-parameters')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'script-parameters',
        value$932
    ]);
};
Groovy$917.prototype[util$915.camelize('properties')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'properties',
        value$933
    ]);
};
Groovy$917.prototype[util$915.camelize('java-opts')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'java-opts',
        value$934
    ]);
};
Groovy$917.prototype[util$915.camelize('class-path')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'class-path',
        value$935
    ]);
};