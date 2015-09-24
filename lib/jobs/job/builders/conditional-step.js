'use strict';
var util$915 = require('../../../misc/util.js');
var ConditionOperand$916 = require('./conditional-step/condition-operand.js');
var ConditionalStep$918 = function (upper$931, obj$932) {
    this.upper = upper$931;
    this.obj = obj$932;
};
ConditionalStep$918.prototype.up = function () {
    return this.upper;
};
ConditionalStep$918.prototype.and = ConditionalStep$918.prototype.up;
module.exports = ConditionalStep$918;
ConditionalStep$918.prototype[util$915.camelize('condition-kind')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-kind',
        value$933
    ]);
};
ConditionalStep$918.prototype[util$915.camelize('condition-expression')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-expression',
        value$934
    ]);
};
ConditionalStep$918.prototype[util$915.camelize('condition-string1')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-string1',
        value$935
    ]);
};
ConditionalStep$918.prototype[util$915.camelize('condition-string2')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-string2',
        value$936
    ]);
};
ConditionalStep$918.prototype[util$915.camelize('condition-case-insensitive')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-case-insensitive',
        value$937
    ]);
};
ConditionalStep$918.prototype[util$915.camelize('condition-worst')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-worst',
        value$938
    ]);
};
ConditionalStep$918.prototype[util$915.camelize('condition-best')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-best',
        value$939
    ]);
};
ConditionalStep$918.prototype[util$915.camelize('condition-command')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-command',
        value$940
    ]);
};
;
ConditionalStep$918.prototype[util$915.camelize('condition-filename')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-filename',
        value$941
    ]);
};
ConditionalStep$918.prototype[util$915.camelize('condition-basedir')] = function (value$942) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-basedir',
        value$942
    ]);
};
ConditionalStep$918.prototype[util$915.camelize('condition-operand')] = function (value$943) {
    return util$915.objectAccessor.apply(this, [
        'condition-operand',
        ConditionOperand$916,
        value$943
    ]);
};
ConditionalStep$918.prototype[util$915.camelize('on-evaluation-failure')] = function (value$944) {
    return util$915.primitiveAccessor.apply(this, [
        'on-evaluation-failure',
        value$944
    ]);
};
// necessary duplication
ConditionalStep$918.prototype.steps = function (value$945) {
    if (value$945 === undefined) {
        // always create a fresh array to enforce declarative code style
        this.obj.steps = [];
        var // avoid circular dependency
        Builders$946 = require('../builders.js');
        return new Builders$946(this, this.obj.steps);
    } else {
        throw 'TODO: setter is not implemented';
    }
};