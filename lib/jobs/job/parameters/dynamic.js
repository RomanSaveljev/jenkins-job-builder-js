'use strict';
var util$890 = require('../../../misc/util.js');
var Dynamic$892 = function (upper$899, obj$900) {
    this.upper = upper$899;
    this.obj = obj$900;
};
Dynamic$892.prototype.up = function () {
    return this.upper;
};
Dynamic$892.prototype.and = Dynamic$892.prototype.up;
module.exports = Dynamic$892;
Dynamic$892.prototype[util$890.camelize('name')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$901
    ]);
};
Dynamic$892.prototype[util$890.camelize('description')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'description',
        value$902
    ]);
};
Dynamic$892.prototype[util$890.camelize('script')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'script',
        value$903
    ]);
};
Dynamic$892.prototype[util$890.camelize('remote')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'remote',
        value$904
    ]);
};
Dynamic$892.prototype[util$890.camelize('classpath')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'classpath',
        value$905
    ]);
};
Dynamic$892.prototype[util$890.camelize('read-only')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'read-only',
        value$906
    ]);
};