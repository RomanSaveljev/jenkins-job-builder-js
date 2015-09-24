'use strict';
var util$915 = require('../../../misc/util.js');
var Channel$916 = require('./ircbot/channel.js');
var IrcBot$918 = function (upper$928, obj$929) {
    this.upper = upper$928;
    this.obj = obj$929;
};
IrcBot$918.prototype.up = function () {
    return this.upper;
};
IrcBot$918.prototype.and = IrcBot$918.prototype.up;
module.exports = IrcBot$918;
IrcBot$918.prototype[util$915.camelize('strategy')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'strategy',
        value$930
    ]);
};
IrcBot$918.prototype[util$915.camelize('notify-start')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-start',
        value$931
    ]);
};
IrcBot$918.prototype[util$915.camelize('notify-committers')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-committers',
        value$932
    ]);
};
IrcBot$918.prototype[util$915.camelize('notify-culprits')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-culprits',
        value$933
    ]);
};
IrcBot$918.prototype[util$915.camelize('notify-upstream')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-upstream',
        value$934
    ]);
};
IrcBot$918.prototype[util$915.camelize('notify-fixers')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-fixers',
        value$935
    ]);
};
IrcBot$918.prototype[util$915.camelize('message-type')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'message-type',
        value$936
    ]);
};
IrcBot$918.prototype[util$915.camelize('channels')] = function (value$937) {
    return util$915.objectArrayAccessor.apply(this, [
        'channels',
        Channel$916,
        value$937
    ]);
};
IrcBot$918.prototype[util$915.camelize('matrix-notifier')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'matrix-notifier',
        value$938
    ]);
};