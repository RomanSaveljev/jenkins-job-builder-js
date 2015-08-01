'use strict';
var util$890 = require('../../../misc/util.js');
var Ssh$892 = function (upper$906, obj$907) {
    this.upper = upper$906;
    this.obj = obj$907;
};
Ssh$892.prototype.up = function () {
    return this.upper;
};
Ssh$892.prototype.and = Ssh$892.prototype.up;
module.exports = Ssh$892;
Ssh$892.prototype[util$890.camelize('site')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'site',
        value$908
    ]);
};
Ssh$892.prototype[util$890.camelize('target')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'target',
        value$909
    ]);
};
Ssh$892.prototype[util$890.camelize('target-is-date-format')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'target-is-date-format',
        value$910
    ]);
};
Ssh$892.prototype[util$890.camelize('clean-remote')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'clean-remote',
        value$911
    ]);
};
Ssh$892.prototype[util$890.camelize('source')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'source',
        value$912
    ]);
};
Ssh$892.prototype[util$890.camelize('command')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'command',
        value$913
    ]);
};
Ssh$892.prototype[util$890.camelize('timeout')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'timeout',
        value$914
    ]);
};
Ssh$892.prototype[util$890.camelize('use-pty')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'use-pty',
        value$915
    ]);
};
Ssh$892.prototype[util$890.camelize('excludes')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'excludes',
        value$916
    ]);
};
Ssh$892.prototype[util$890.camelize('remove-prefix')] = function (value$917) {
    return util$890.primitiveAccessor.apply(this, [
        'remove-prefix',
        value$917
    ]);
};
Ssh$892.prototype[util$890.camelize('fail-on-error')] = function (value$918) {
    return util$890.primitiveAccessor.apply(this, [
        'fail-on-error',
        value$918
    ]);
};
Ssh$892.prototype[util$890.camelize('always-publish-from-master')] = function (value$919) {
    return util$890.primitiveAccessor.apply(this, [
        'always-publish-from-master',
        value$919
    ]);
};
Ssh$892.prototype[util$890.camelize('flatten')] = function (value$920) {
    return util$890.primitiveAccessor.apply(this, [
        'flatten',
        value$920
    ]);
};