'use strict';
var util$890 = require('../../../../misc/util.js');
var ParameterFactories$892 = function (upper$904, obj$905) {
    this.upper = upper$904;
    this.obj = obj$905;
};
ParameterFactories$892.prototype.up = function () {
    return this.upper;
};
ParameterFactories$892.prototype.and = ParameterFactories$892.prototype.up;
module.exports = ParameterFactories$892;
ParameterFactories$892.prototype[util$890.camelize('factory')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'factory',
        value$906
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('file-pattern')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'file-pattern',
        value$907
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('no-files-found-action')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'no-files-found-action',
        value$908
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('from')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'from',
        value$909
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('to')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'to',
        value$910
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('step')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'step',
        value$911
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('parameters')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'parameters',
        value$912
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('validation-fail')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'validation-fail',
        value$913
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('name')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$914
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('node-label')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'node-label',
        value$915
    ]);
};
ParameterFactories$892.prototype[util$890.camelize('ignore-offline-nodes')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'ignore-offline-nodes',
        value$916
    ]);
};