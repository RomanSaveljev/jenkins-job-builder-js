'use strict';
var util$890 = require('../../../misc/util.js');
var ConditionalStep$892 = function (upper$905, obj$906) {
    this.upper = upper$905;
    this.obj = obj$906;
};
ConditionalStep$892.prototype.up = function () {
    return this.upper;
};
ConditionalStep$892.prototype.and = ConditionalStep$892.prototype.up;
module.exports = ConditionalStep$892;
ConditionalStep$892.prototype[util$890.camelize('condition-kind')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-kind',
        value$907
    ]);
};
ConditionalStep$892.prototype[util$890.camelize('condition-expression')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-expression',
        value$908
    ]);
};
ConditionalStep$892.prototype[util$890.camelize('condition-string1')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-string1',
        value$909
    ]);
};
ConditionalStep$892.prototype[util$890.camelize('condition-string2')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-string2',
        value$910
    ]);
};
ConditionalStep$892.prototype[util$890.camelize('condition-case-insensitive')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-case-insensitive',
        value$911
    ]);
};
ConditionalStep$892.prototype[util$890.camelize('condition-worst')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-worst',
        value$912
    ]);
};
ConditionalStep$892.prototype[util$890.camelize('condition-best')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-best',
        value$913
    ]);
};
ConditionalStep$892.prototype[util$890.camelize('condition-command')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-command',
        value$914
    ]);
};
;
ConditionalStep$892.prototype[util$890.camelize('condition-filename')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-filename',
        value$915
    ]);
};
ConditionalStep$892.prototype[util$890.camelize('condition-basedir')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-basedir',
        value$916
    ]);
};
ConditionalStep$892.prototype[util$890.camelize('condition-operand')] = function (value$917) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-operand',
        value$917
    ]);
};
ConditionalStep$892.prototype[util$890.camelize('on-evaluation-failure')] = function (value$918) {
    return util$890.primitiveAccessor.apply(this, [
        'on-evaluation-failure',
        value$918
    ]);
};
// necessary duplication
ConditionalStep$892.prototype.steps = function (value$919) {
    if (value$919 === undefined) {
        // always create a fresh array to enforce declarative code style
        this.obj.steps = [];
        var // avoid circular dependency
        Builders$920 = require('../builders.js');
        return new Builders$920(this, this.obj.steps);
    } else {
        throw 'TODO: setter is not implemented';
    }
};