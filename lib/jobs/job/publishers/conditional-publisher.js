'use strict';
var util$915 = require('../../../misc/util.js');
var ConditionalPublisher$917 = function (upper$926, obj$927) {
    this.upper = upper$926;
    this.obj = obj$927;
};
ConditionalPublisher$917.prototype.up = function () {
    return this.upper;
};
ConditionalPublisher$917.prototype.and = ConditionalPublisher$917.prototype.up;
module.exports = ConditionalPublisher$917;
ConditionalPublisher$917.prototype[util$915.camelize('condition-kind')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-kind',
        value$928
    ]);
};
ConditionalPublisher$917.prototype[util$915.camelize('condition-expression')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-expression',
        value$929
    ]);
};
ConditionalPublisher$917.prototype[util$915.camelize('condition-worst')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-worst',
        value$930
    ]);
};
ConditionalPublisher$917.prototype[util$915.camelize('condition-best')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-best',
        value$931
    ]);
};
ConditionalPublisher$917.prototype[util$915.camelize('condition-command')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-command',
        value$932
    ]);
};
ConditionalPublisher$917.prototype[util$915.camelize('condition-filename')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-filename',
        value$933
    ]);
};
ConditionalPublisher$917.prototype[util$915.camelize('condition-basedir')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'condition-basedir',
        value$934
    ]);
};
ConditionalPublisher$917.prototype[util$915.camelize('on-evaluation-failure')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'on-evaluation-failure',
        value$935
    ]);
};
ConditionalPublisher$917.prototype.action = function (value$936) {
    if (value$936 === undefined) {
        // always create a fresh array to enforce declarative code style
        this.obj.action = [];
        var // avoid circular dependency
        Publishers$937 = require('../publishers.js');
        return new Publishers$937(this, this.obj.action);
    } else {
        throw 'TODO: setter is not implemented';
    }
};