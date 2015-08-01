'use strict';
var util$890 = require('../../../misc/util.js');
var Robot$892 = function (upper$903, obj$904) {
    this.upper = upper$903;
    this.obj = obj$904;
};
Robot$892.prototype.up = function () {
    return this.upper;
};
Robot$892.prototype.and = Robot$892.prototype.up;
module.exports = Robot$892;
Robot$892.prototype[util$890.camelize('output-path')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'output-path',
        value$905
    ]);
};
Robot$892.prototype[util$890.camelize('log-file-link')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'log-file-link',
        value$906
    ]);
};
Robot$892.prototype[util$890.camelize('report-html')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'report-html',
        value$907
    ]);
};
Robot$892.prototype[util$890.camelize('log-html')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'log-html',
        value$908
    ]);
};
Robot$892.prototype[util$890.camelize('output-xml')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'output-xml',
        value$909
    ]);
};
Robot$892.prototype[util$890.camelize('pass-threshold')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'pass-threshold',
        value$910
    ]);
};
Robot$892.prototype[util$890.camelize('unstable-threshold')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'unstable-threshold',
        value$911
    ]);
};
Robot$892.prototype[util$890.camelize('only-critical')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'only-critical',
        value$912
    ]);
};
Robot$892.prototype[util$890.camelize('other-files')] = function (value$913) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'other-files',
        value$913
    ]);
};
Robot$892.prototype[util$890.camelize('archive-output-xml')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'archive-output-xml',
        value$914
    ]);
};