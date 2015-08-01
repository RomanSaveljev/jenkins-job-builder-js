'use strict';
var util$890 = require('../../../../misc/util.js');
var ConditionOperand$892 = function (upper$904, obj$905) {
    this.upper = upper$904;
    this.obj = obj$905;
};
ConditionOperand$892.prototype.up = function () {
    return this.upper;
};
ConditionOperand$892.prototype.and = ConditionOperand$892.prototype.up;
module.exports = ConditionOperand$892;
ConditionOperand$892.prototype[util$890.camelize('condition-kind')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-kind',
        value$906
    ]);
};
ConditionOperand$892.prototype[util$890.camelize('condition-expression')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-expression',
        value$907
    ]);
};
ConditionOperand$892.prototype[util$890.camelize('condition-string1')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-string1',
        value$908
    ]);
};
ConditionOperand$892.prototype[util$890.camelize('condition-string2')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-string2',
        value$909
    ]);
};
ConditionOperand$892.prototype[util$890.camelize('condition-case-insensitive')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-case-insensitive',
        value$910
    ]);
};
ConditionOperand$892.prototype[util$890.camelize('condition-worst')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-worst',
        value$911
    ]);
};
ConditionOperand$892.prototype[util$890.camelize('condition-best')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-best',
        value$912
    ]);
};
ConditionOperand$892.prototype[util$890.camelize('condition-command')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-command',
        value$913
    ]);
};
;
ConditionOperand$892.prototype[util$890.camelize('condition-filename')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-filename',
        value$914
    ]);
};
ConditionOperand$892.prototype[util$890.camelize('condition-basedir')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-basedir',
        value$915
    ]);
};
ConditionOperand$892.prototype[util$890.camelize('condition-operand')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-operand',
        value$916
    ]);
};