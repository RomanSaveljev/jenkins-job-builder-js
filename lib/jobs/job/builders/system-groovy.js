'use strict';
var util$890 = require('../../../misc/util.js');
var SystemGroovy$892 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
SystemGroovy$892.prototype.up = function () {
    return this.upper;
};
SystemGroovy$892.prototype.and = SystemGroovy$892.prototype.up;
module.exports = SystemGroovy$892;
SystemGroovy$892.prototype[util$890.camelize('file')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'file',
        value$899
    ]);
};
SystemGroovy$892.prototype[util$890.camelize('command')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'command',
        value$900
    ]);
};
SystemGroovy$892.prototype[util$890.camelize('bindings')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'bindings',
        value$901
    ]);
};
SystemGroovy$892.prototype[util$890.camelize('class-path')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'class-path',
        value$902
    ]);
};