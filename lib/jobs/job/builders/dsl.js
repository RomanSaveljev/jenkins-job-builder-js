'use strict';
var util$915 = require('../../../misc/util.js');
var DSL$917 = function (upper$925, obj$926) {
    this.upper = upper$925;
    this.obj = obj$926;
};
DSL$917.prototype.up = function () {
    return this.upper;
};
DSL$917.prototype.and = DSL$917.prototype.up;
module.exports = DSL$917;
DSL$917.prototype[util$915.camelize('script-text')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'script-text',
        value$927
    ]);
};
DSL$917.prototype[util$915.camelize('target')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'target',
        value$928
    ]);
};
DSL$917.prototype[util$915.camelize('ignore-existing')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'ignore-existing',
        value$929
    ]);
};
DSL$917.prototype[util$915.camelize('removed-job-action')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'removed-job-action',
        value$930
    ]);
};
DSL$917.prototype[util$915.camelize('removed-view-action')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'removed-view-action',
        value$931
    ]);
};
DSL$917.prototype[util$915.camelize('lookup-strategy')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'lookup-strategy',
        value$932
    ]);
};
DSL$917.prototype[util$915.camelize('additional-classpath')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'additional-classpath',
        value$933
    ]);
};