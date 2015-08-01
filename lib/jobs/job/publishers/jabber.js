'use strict';
var util$890 = require('../../../misc/util.js');
var Jabber$892 = function (upper$902, obj$903) {
    this.upper = upper$902;
    this.obj = obj$903;
};
Jabber$892.prototype.up = function () {
    return this.upper;
};
Jabber$892.prototype.and = Jabber$892.prototype.up;
module.exports = Jabber$892;
Jabber$892.prototype[util$890.camelize('notify-on-build-start')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-on-build-start',
        value$904
    ]);
};
Jabber$892.prototype[util$890.camelize('notify-scm-committers')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-scm-committers',
        value$905
    ]);
};
Jabber$892.prototype[util$890.camelize('notify-scm-culprits')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-scm-culprits',
        value$906
    ]);
};
Jabber$892.prototype[util$890.camelize('notify-upstream-committers')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-upstream-committers',
        value$907
    ]);
};
Jabber$892.prototype[util$890.camelize('notify-scm-fixers')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-scm-fixers',
        value$908
    ]);
};
Jabber$892.prototype[util$890.camelize('group-targets')] = function (value$909) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'group-targets',
        value$909
    ]);
};
Jabber$892.prototype[util$890.camelize('individual-targets')] = function (value$910) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'individual-targets',
        value$910
    ]);
};
Jabber$892.prototype[util$890.camelize('strategy')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'strategy',
        value$911
    ]);
};
Jabber$892.prototype[util$890.camelize('message')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'message',
        value$912
    ]);
};