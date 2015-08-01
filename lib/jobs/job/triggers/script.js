'use strict';
var util$890 = require('../../../misc/util.js');
var Script$892 = function (upper$899, obj$900) {
    this.upper = upper$899;
    this.obj = obj$900;
};
Script$892.prototype.up = function () {
    return this.upper;
};
Script$892.prototype.and = Script$892.prototype.up;
module.exports = Script$892;
Script$892.prototype[util$890.camelize('label')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'label',
        value$901
    ]);
};
Script$892.prototype[util$890.camelize('script')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'script',
        value$902
    ]);
};
Script$892.prototype[util$890.camelize('script-file-path')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'script-file-path',
        value$903
    ]);
};
Script$892.prototype[util$890.camelize('cron')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'cron',
        value$904
    ]);
};
Script$892.prototype[util$890.camelize('enable-concurrent')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'enable-concurrent',
        value$905
    ]);
};
Script$892.prototype[util$890.camelize('exit-code')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'exit-code',
        value$906
    ]);
};