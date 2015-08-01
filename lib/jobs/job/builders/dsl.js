'use strict';
var util$890 = require('../../../misc/util.js');
var DSL$892 = function (upper$900, obj$901) {
    this.upper = upper$900;
    this.obj = obj$901;
};
DSL$892.prototype.up = function () {
    return this.upper;
};
DSL$892.prototype.and = DSL$892.prototype.up;
module.exports = DSL$892;
DSL$892.prototype[util$890.camelize('script-text')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'script-text',
        value$902
    ]);
};
DSL$892.prototype[util$890.camelize('target')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'target',
        value$903
    ]);
};
DSL$892.prototype[util$890.camelize('ignore-existing')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'ignore-existing',
        value$904
    ]);
};
DSL$892.prototype[util$890.camelize('removed-job-action')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'removed-job-action',
        value$905
    ]);
};
DSL$892.prototype[util$890.camelize('removed-view-action')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'removed-view-action',
        value$906
    ]);
};
DSL$892.prototype[util$890.camelize('lookup-strategy')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'lookup-strategy',
        value$907
    ]);
};
DSL$892.prototype[util$890.camelize('additional-classpath')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'additional-classpath',
        value$908
    ]);
};