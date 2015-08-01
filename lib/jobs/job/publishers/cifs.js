'use strict';
var util$890 = require('../../../misc/util.js');
var Cifs$892 = function (upper$902, obj$903) {
    this.upper = upper$902;
    this.obj = obj$903;
};
Cifs$892.prototype.up = function () {
    return this.upper;
};
Cifs$892.prototype.and = Cifs$892.prototype.up;
module.exports = Cifs$892;
Cifs$892.prototype[util$890.camelize('site')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'site',
        value$904
    ]);
};
Cifs$892.prototype[util$890.camelize('target')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'target',
        value$905
    ]);
};
Cifs$892.prototype[util$890.camelize('target-is-date-format')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'target-is-date-format',
        value$906
    ]);
};
Cifs$892.prototype[util$890.camelize('clean-remote')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'clean-remote',
        value$907
    ]);
};
Cifs$892.prototype[util$890.camelize('source')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'source',
        value$908
    ]);
};
Cifs$892.prototype[util$890.camelize('excludes')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'excludes',
        value$909
    ]);
};
Cifs$892.prototype[util$890.camelize('remove-prefix')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'remove-prefix',
        value$910
    ]);
};
Cifs$892.prototype[util$890.camelize('fail-on-error')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'fail-on-error',
        value$911
    ]);
};
Cifs$892.prototype[util$890.camelize('flatten')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'flatten',
        value$912
    ]);
};