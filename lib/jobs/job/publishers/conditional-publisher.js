'use strict';
var util$890 = require('../../../misc/util.js');
var ConditionalPublisher$892 = function (upper$901, obj$902) {
    this.upper = upper$901;
    this.obj = obj$902;
};
ConditionalPublisher$892.prototype.up = function () {
    return this.upper;
};
ConditionalPublisher$892.prototype.and = ConditionalPublisher$892.prototype.up;
module.exports = ConditionalPublisher$892;
ConditionalPublisher$892.prototype[util$890.camelize('condition-kind')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-kind',
        value$903
    ]);
};
ConditionalPublisher$892.prototype[util$890.camelize('condition-expression')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-expression',
        value$904
    ]);
};
ConditionalPublisher$892.prototype[util$890.camelize('condition-worst')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-worst',
        value$905
    ]);
};
ConditionalPublisher$892.prototype[util$890.camelize('condition-best')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-best',
        value$906
    ]);
};
ConditionalPublisher$892.prototype[util$890.camelize('condition-command')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-command',
        value$907
    ]);
};
ConditionalPublisher$892.prototype[util$890.camelize('condition-filename')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-filename',
        value$908
    ]);
};
ConditionalPublisher$892.prototype[util$890.camelize('condition-basedir')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'condition-basedir',
        value$909
    ]);
};
ConditionalPublisher$892.prototype[util$890.camelize('on-evaluation-failure')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'on-evaluation-failure',
        value$910
    ]);
};
ConditionalPublisher$892.prototype.action = function (value$911) {
    if (value$911 === undefined) {
        // always create a fresh array to enforce declarative code style
        this.obj.action = [];
        var // avoid circular dependency
        Publishers$912 = require('../publishers.js');
        return new Publishers$912(this, this.obj.action);
    } else {
        throw 'TODO: setter is not implemented';
    }
};