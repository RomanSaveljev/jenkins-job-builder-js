'use strict';
var util$890 = require('../../../misc/util.js');
var ValidatingString$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
ValidatingString$892.prototype.up = function () {
    return this.upper;
};
ValidatingString$892.prototype.and = ValidatingString$892.prototype.up;
module.exports = ValidatingString$892;
ValidatingString$892.prototype[util$890.camelize('name')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$900
    ]);
};
ValidatingString$892.prototype[util$890.camelize('default')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'default',
        value$901
    ]);
};
ValidatingString$892.prototype[util$890.camelize('description')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'description',
        value$902
    ]);
};
ValidatingString$892.prototype[util$890.camelize('regex')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'regex',
        value$903
    ]);
};
ValidatingString$892.prototype[util$890.camelize('msg')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'msg',
        value$904
    ]);
};