'use strict';
var util$890 = require('../../../misc/util.js');
var Channel$891 = require('./ircbot/channel.js');
var IrcBot$893 = function (upper$903, obj$904) {
    this.upper = upper$903;
    this.obj = obj$904;
};
IrcBot$893.prototype.up = function () {
    return this.upper;
};
IrcBot$893.prototype.and = IrcBot$893.prototype.up;
module.exports = IrcBot$893;
IrcBot$893.prototype[util$890.camelize('strategy')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'strategy',
        value$905
    ]);
};
IrcBot$893.prototype[util$890.camelize('notify-start')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-start',
        value$906
    ]);
};
IrcBot$893.prototype[util$890.camelize('notify-committers')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-committers',
        value$907
    ]);
};
IrcBot$893.prototype[util$890.camelize('notify-culprits')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-culprits',
        value$908
    ]);
};
IrcBot$893.prototype[util$890.camelize('notify-upstream')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-upstream',
        value$909
    ]);
};
IrcBot$893.prototype[util$890.camelize('notify-fixers')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-fixers',
        value$910
    ]);
};
IrcBot$893.prototype[util$890.camelize('message-type')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'message-type',
        value$911
    ]);
};
IrcBot$893.prototype[util$890.camelize('artifacts')] = function (value$912) {
    return util$890.objectArrayAccessor.apply(this, [
        'artifacts',
        Channel$891,
        value$912
    ]);
};
IrcBot$893.prototype[util$890.camelize('matrix-notifier')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'matrix-notifier',
        value$913
    ]);
};