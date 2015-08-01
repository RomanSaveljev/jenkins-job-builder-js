'use strict';
var util$890 = require('../../../misc/util.js');
var ConditionOperand$891 = require('./conditional-step/condition-operand.js');
var ConditionalStep$893 = function (upper$906, obj$907) {
    this.upper = upper$906;
    this.obj = obj$907;
};
ConditionalStep$893.prototype.up = function () {
    return this.upper;
};
ConditionalStep$893.prototype.and = ConditionalStep$893.prototype.up;
module.exports = ConditionalStep$893;
ConditionalStep$893.prototype[util$890.camelize('condition-kind')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-kind',
        value$908
    ]);
};
ConditionalStep$893.prototype[util$890.camelize('condition-expression')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-expression',
        value$909
    ]);
};
ConditionalStep$893.prototype[util$890.camelize('condition-string1')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-string1',
        value$910
    ]);
};
ConditionalStep$893.prototype[util$890.camelize('condition-string2')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-string2',
        value$911
    ]);
};
ConditionalStep$893.prototype[util$890.camelize('condition-case-insensitive')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-case-insensitive',
        value$912
    ]);
};
ConditionalStep$893.prototype[util$890.camelize('condition-worst')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-worst',
        value$913
    ]);
};
ConditionalStep$893.prototype[util$890.camelize('condition-best')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-best',
        value$914
    ]);
};
ConditionalStep$893.prototype[util$890.camelize('condition-command')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-command',
        value$915
    ]);
};
;
ConditionalStep$893.prototype[util$890.camelize('condition-filename')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-filename',
        value$916
    ]);
};
ConditionalStep$893.prototype[util$890.camelize('condition-basedir')] = function (value$917) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-basedir',
        value$917
    ]);
};
ConditionalStep$893.prototype[util$890.camelize('condition-operand')] = function (value$918) {
    return util$890.objectAccessor.apply(this, [
        'condition-operand',
        ConditionOperand$891,
        value$918
    ]);
};
ConditionalStep$893.prototype[util$890.camelize('on-evaluation-failure')] = function (value$919) {
    return util$890.primitiveAccessor.apply(this, [
        'on-evaluation-failure',
        value$919
    ]);
};
// necessary duplication
ConditionalStep$893.prototype.steps = function (value$920) {
    if (value$920 === undefined) {
        // always create a fresh array to enforce declarative code style
        this.obj.steps = [];
        var // avoid circular dependency
        Builders$921 = require('../builders.js');
        return new Builders$921(this, this.obj.steps);
    } else {
        throw 'TODO: setter is not implemented';
    }
};