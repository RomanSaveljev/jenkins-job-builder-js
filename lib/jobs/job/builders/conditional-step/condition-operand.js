'use strict';
var util$915 = require('../../../../misc/util.js');
var ConditionOperand$917 = function (upper$929, obj$930) {
    this.upper = upper$929;
    this.obj = obj$930;
};
ConditionOperand$917.prototype.up = function () {
    return this.upper;
};
ConditionOperand$917.prototype.and = ConditionOperand$917.prototype.up;
module.exports = ConditionOperand$917;
ConditionOperand$917.prototype[util$915.camelize('condition-kind')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-kind',
        value$931
    ]);
};
ConditionOperand$917.prototype[util$915.camelize('condition-expression')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-expression',
        value$932
    ]);
};
ConditionOperand$917.prototype[util$915.camelize('condition-string1')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-string1',
        value$933
    ]);
};
ConditionOperand$917.prototype[util$915.camelize('condition-string2')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-string2',
        value$934
    ]);
};
ConditionOperand$917.prototype[util$915.camelize('condition-case-insensitive')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-case-insensitive',
        value$935
    ]);
};
ConditionOperand$917.prototype[util$915.camelize('condition-worst')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-worst',
        value$936
    ]);
};
ConditionOperand$917.prototype[util$915.camelize('condition-best')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-best',
        value$937
    ]);
};
ConditionOperand$917.prototype[util$915.camelize('condition-command')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-command',
        value$938
    ]);
};
;
ConditionOperand$917.prototype[util$915.camelize('condition-filename')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-filename',
        value$939
    ]);
};
ConditionOperand$917.prototype[util$915.camelize('condition-basedir')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-basedir',
        value$940
    ]);
};
ConditionOperand$917.prototype[util$915.camelize('condition-operand')] = function (value$941) {
    return util$915.objectAccessor.apply(this, [
        'condition-operand',
        ConditionOperand$917,
        value$941
    ]);
};