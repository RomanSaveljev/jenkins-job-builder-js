'use strict';
var util$690 = require('../../../../misc/util.js');
var ConditionOperand$692 = function (upper$704, obj$705) {
    this.upper = upper$704;
    this.obj = obj$705;
};
ConditionOperand$692.prototype.up = function () {
    return this.upper;
};
ConditionOperand$692.prototype.and = ConditionOperand$692.prototype.up;
module.exports = ConditionOperand$692;
ConditionKind.prototype[util$690.camelize('condition-kind')] = function (value$706) {
    return util$690.primitiveAccessor.apply(this, [
        'condition-kind',
        value$706
    ]);
};
ConditionKind.prototype[util$690.camelize('condition-expression')] = function (value$707) {
    return util$690.primitiveAccessor.apply(this, [
        'condition-expression',
        value$707
    ]);
};
ConditionKind.prototype[util$690.camelize('condition-string1')] = function (value$708) {
    return util$690.primitiveAccessor.apply(this, [
        'condition-string1',
        value$708
    ]);
};
ConditionKind.prototype[util$690.camelize('condition-string2')] = function (value$709) {
    return util$690.primitiveAccessor.apply(this, [
        'condition-string2',
        value$709
    ]);
};
ConditionKind.prototype[util$690.camelize('condition-case-insensitive')] = function (value$710) {
    return util$690.primitiveAccessor.apply(this, [
        'condition-case-insensitive',
        value$710
    ]);
};
ConditionKind.prototype[util$690.camelize('condition-worst')] = function (value$711) {
    return util$690.primitiveAccessor.apply(this, [
        'condition-worst',
        value$711
    ]);
};
ConditionKind.prototype[util$690.camelize('condition-best')] = function (value$712) {
    return util$690.primitiveAccessor.apply(this, [
        'condition-best',
        value$712
    ]);
};
ConditionKind.prototype[util$690.camelize('condition-command')] = function (value$713) {
    return util$690.primitiveAccessor.apply(this, [
        'condition-command',
        value$713
    ]);
};
ConditionKind.prototype[util$690.camelize('condition-filename')] = function (value$714) {
    return util$690.primitiveAccessor.apply(this, [
        'condition-filename',
        value$714
    ]);
};
ConditionKind.prototype[util$690.camelize('condition-basedir')] = function (value$715) {
    return util$690.primitiveAccessor.apply(this, [
        'condition-basedir',
        value$715
    ]);
};
ConditionKind.prototype[util$690.camelize('condition-operand')] = function (value$716) {
    return util$690.primitiveAccessor.apply(this, [
        'condition-operand',
        value$716
    ]);
};