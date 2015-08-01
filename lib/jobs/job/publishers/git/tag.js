'use strict';
var util$890 = require('../../../../misc/util.js');
var Tag$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
Tag$892.prototype.up = function () {
    return this.upper;
};
Tag$892.prototype.and = Tag$892.prototype.up;
module.exports = Tag$892;
Tag$892.prototype[util$890.camelize('remote')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'remote',
        value$900
    ]);
};
Tag$892.prototype[util$890.camelize('name')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$901
    ]);
};
Tag$892.prototype[util$890.camelize('message')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'message',
        value$902
    ]);
};
Tag$892.prototype[util$890.camelize('create-tag')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'create-tag',
        value$903
    ]);
};
Tag$892.prototype[util$890.camelize('update-tag')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'update-tag',
        value$904
    ]);
};