'use strict';
var util$890 = require('../../../../misc/util.js');
var ParameterFactories$892 = function (upper$903, obj$904) {
    this.upper = upper$903;
    this.obj = obj$904;
};
ParameterFactories$892.prototype.up = function () {
    return this.upper;
};
ParameterFactories$892.prototype.and = ParameterFactories$892.prototype.up;
module.exports = ParameterFactories$892;
ParameterFactories$892.prototype[util$890.camelize('factory')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'factory',
        value$905
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('file-pattern')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'file-pattern',
        value$906
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('no-files-found-action')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'no-files-found-action',
        value$907
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('from')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'from',
        value$908
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('to')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'to',
        value$909
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('step')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'step',
        value$910
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('parameters')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'parameters',
        value$911
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('validation-fail')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'validation-fail',
        value$912
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('node-label')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'node-label',
        value$913
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('ignore-offline-nodes')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'ignore-offline-nodes',
        value$914
    ]);
};