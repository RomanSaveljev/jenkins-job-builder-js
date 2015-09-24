'use strict';
var util$915 = require('../../../misc/util.js');
var Ssh$917 = function (upper$931, obj$932) {
    this.upper = upper$931;
    this.obj = obj$932;
};
Ssh$917.prototype.up = function () {
    return this.upper;
};
Ssh$917.prototype.and = Ssh$917.prototype.up;
module.exports = Ssh$917;
Ssh$917.prototype[util$915.camelize('site')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'site',
        value$933
    ]);
};
Ssh$917.prototype[util$915.camelize('target')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'target',
        value$934
    ]);
};
Ssh$917.prototype[util$915.camelize('target-is-date-format')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'target-is-date-format',
        value$935
    ]);
};
Ssh$917.prototype[util$915.camelize('clean-remote')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'clean-remote',
        value$936
    ]);
};
Ssh$917.prototype[util$915.camelize('source')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'source',
        value$937
    ]);
};
Ssh$917.prototype[util$915.camelize('command')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'command',
        value$938
    ]);
};
Ssh$917.prototype[util$915.camelize('timeout')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'timeout',
        value$939
    ]);
};
Ssh$917.prototype[util$915.camelize('use-pty')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'use-pty',
        value$940
    ]);
};
Ssh$917.prototype[util$915.camelize('excludes')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'excludes',
        value$941
    ]);
};
Ssh$917.prototype[util$915.camelize('remove-prefix')] = function (value$942) {
    return util$915.primitiveAccessor.apply(this, [
        'remove-prefix',
        value$942
    ]);
};
Ssh$917.prototype[util$915.camelize('fail-on-error')] = function (value$943) {
    return util$915.primitiveAccessor.apply(this, [
        'fail-on-error',
        value$943
    ]);
};
Ssh$917.prototype[util$915.camelize('always-publish-from-master')] = function (value$944) {
    return util$915.primitiveAccessor.apply(this, [
        'always-publish-from-master',
        value$944
    ]);
};
Ssh$917.prototype[util$915.camelize('flatten')] = function (value$945) {
    return util$915.primitiveAccessor.apply(this, [
        'flatten',
        value$945
    ]);
};