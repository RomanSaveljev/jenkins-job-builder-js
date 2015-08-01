'use strict';
var util$890 = require('../../../misc/util.js');
var TextFinder$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
TextFinder$892.prototype.up = function () {
    return this.upper;
};
TextFinder$892.prototype.and = TextFinder$892.prototype.up;
module.exports = TextFinder$892;
TextFinder$892.prototype[util$890.camelize('regexp')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'regexp',
        value$900
    ]);
};
TextFinder$892.prototype[util$890.camelize('fileset')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'fileset',
        value$901
    ]);
};
TextFinder$892.prototype[util$890.camelize('also-check-console-output')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'also-check-console-output',
        value$902
    ]);
};
TextFinder$892.prototype[util$890.camelize('succeed-if-found')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'succeed-if-found',
        value$903
    ]);
};
TextFinder$892.prototype[util$890.camelize('unstable-if-found')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'unstable-if-found',
        value$904
    ]);
};