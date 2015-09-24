'use strict';
var util$915 = require('../../../misc/util.js');
var Jabber$917 = function (upper$927, obj$928) {
    this.upper = upper$927;
    this.obj = obj$928;
};
Jabber$917.prototype.up = function () {
    return this.upper;
};
Jabber$917.prototype.and = Jabber$917.prototype.up;
module.exports = Jabber$917;
Jabber$917.prototype[util$915.camelize('notify-on-build-start')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-on-build-start',
        value$929
    ]);
};
Jabber$917.prototype[util$915.camelize('notify-scm-committers')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-scm-committers',
        value$930
    ]);
};
Jabber$917.prototype[util$915.camelize('notify-scm-culprits')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-scm-culprits',
        value$931
    ]);
};
Jabber$917.prototype[util$915.camelize('notify-upstream-committers')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-upstream-committers',
        value$932
    ]);
};
Jabber$917.prototype[util$915.camelize('notify-scm-fixers')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-scm-fixers',
        value$933
    ]);
};
Jabber$917.prototype[util$915.camelize('group-targets')] = function (value$934) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'group-targets',
        value$934
    ]);
};
Jabber$917.prototype[util$915.camelize('individual-targets')] = function (value$935) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'individual-targets',
        value$935
    ]);
};
Jabber$917.prototype[util$915.camelize('strategy')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'strategy',
        value$936
    ]);
};
Jabber$917.prototype[util$915.camelize('message')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'message',
        value$937
    ]);
};