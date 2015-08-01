'use strict';
var util$890 = require('../../../../misc/util.js');
var File$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
File$892.prototype.up = function () {
    return this.upper;
};
File$892.prototype.and = File$892.prototype.up;
module.exports = File$892;
File$892.prototype[util$890.camelize('target')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'target',
        value$900
    ]);
};
File$892.prototype[util$890.camelize('source')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'source',
        value$901
    ]);
};
File$892.prototype[util$890.camelize('keep-hierarchy')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'keep-hierarchy',
        value$902
    ]);
};
File$892.prototype[util$890.camelize('copy-after-failure')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'copy-after-failure',
        value$903
    ]);
};
File$892.prototype[util$890.camelize('copy-console')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'copy-console',
        value$904
    ]);
};