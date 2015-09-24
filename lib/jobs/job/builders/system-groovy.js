'use strict';
var util$915 = require('../../../misc/util.js');
var SystemGroovy$917 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
SystemGroovy$917.prototype.up = function () {
    return this.upper;
};
SystemGroovy$917.prototype.and = SystemGroovy$917.prototype.up;
module.exports = SystemGroovy$917;
SystemGroovy$917.prototype[util$915.camelize('file')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'file',
        value$924
    ]);
};
SystemGroovy$917.prototype[util$915.camelize('command')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'command',
        value$925
    ]);
};
SystemGroovy$917.prototype[util$915.camelize('bindings')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'bindings',
        value$926
    ]);
};
SystemGroovy$917.prototype[util$915.camelize('class-path')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'class-path',
        value$927
    ]);
};