'use strict';
var util$890 = require('../../../misc/util.js');
var DescriptionSetter$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
DescriptionSetter$892.prototype.up = function () {
    return this.upper;
};
DescriptionSetter$892.prototype.and = DescriptionSetter$892.prototype.up;
module.exports = DescriptionSetter$892;
DescriptionSetter$892.prototype[util$890.camelize('regexp')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'regexp',
        value$900
    ]);
};
DescriptionSetter$892.prototype[util$890.camelize('regexp-for-failed')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'regexp-for-failed',
        value$901
    ]);
};
DescriptionSetter$892.prototype[util$890.camelize('description')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'description',
        value$902
    ]);
};
DescriptionSetter$892.prototype[util$890.camelize('description-for-failed')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'description-for-failed',
        value$903
    ]);
};
DescriptionSetter$892.prototype[util$890.camelize('set-for-matrix')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'set-for-matrix',
        value$904
    ]);
};