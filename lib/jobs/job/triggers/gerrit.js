'use strict';
var util$915 = require('../../../misc/util.js');
var TriggerOn$916 = require('./gerrit/trigger-on.js');
var Project$917 = require('./gerrit/project.js');
var SkipVote$918 = require('./gerrit/skip-vote.js');
var Gerrit$920 = function (upper$952, obj$953) {
    this.upper = upper$952;
    this.obj = obj$953;
};
Gerrit$920.prototype.up = function () {
    return this.upper;
};
Gerrit$920.prototype.and = Gerrit$920.prototype.up;
module.exports = Gerrit$920;
Gerrit$920.prototype[util$915.camelize('trigger-on')] = function (value$954) {
    return util$915.customArrayAccessor.apply(this, [
        'trigger-on',
        TriggerOn$916,
        value$954
    ]);
};
Gerrit$920.prototype[util$915.camelize('override-votes')] = function (value$955) {
    return util$915.primitiveAccessor.apply(this, [
        'override-votes',
        value$955
    ]);
};
Gerrit$920.prototype[util$915.camelize('gerrit-build-started-verified-value')] = function (value$956) {
    return util$915.primitiveAccessor.apply(this, [
        'gerrit-build-started-verified-value',
        value$956
    ]);
};
Gerrit$920.prototype[util$915.camelize('gerrit-build-successful-verified-value')] = function (value$957) {
    return util$915.primitiveAccessor.apply(this, [
        'gerrit-build-successful-verified-value',
        value$957
    ]);
};
Gerrit$920.prototype[util$915.camelize('gerrit-build-failed-verified-value')] = function (value$958) {
    return util$915.primitiveAccessor.apply(this, [
        'gerrit-build-failed-verified-value',
        value$958
    ]);
};
Gerrit$920.prototype[util$915.camelize('gerrit-build-unstable-verified-value')] = function (value$959) {
    return util$915.primitiveAccessor.apply(this, [
        'gerrit-build-unstable-verified-value',
        value$959
    ]);
};
Gerrit$920.prototype[util$915.camelize('gerrit-build-notbuilt-verified-value')] = function (value$960) {
    return util$915.primitiveAccessor.apply(this, [
        'gerrit-build-notbuilt-verified-value',
        value$960
    ]);
};
Gerrit$920.prototype[util$915.camelize('gerrit-build-started-codereview-value')] = function (value$961) {
    return util$915.primitiveAccessor.apply(this, [
        'gerrit-build-started-codereview-value',
        value$961
    ]);
};
Gerrit$920.prototype[util$915.camelize('gerrit-build-successful-codereview-value')] = function (value$962) {
    return util$915.primitiveAccessor.apply(this, [
        'gerrit-build-successful-codereview-value',
        value$962
    ]);
};
Gerrit$920.prototype[util$915.camelize('gerrit-build-failed-codereview-value')] = function (value$963) {
    return util$915.primitiveAccessor.apply(this, [
        'gerrit-build-failed-codereview-value',
        value$963
    ]);
};
Gerrit$920.prototype[util$915.camelize('gerrit-build-unstable-codereview-value')] = function (value$964) {
    return util$915.primitiveAccessor.apply(this, [
        'gerrit-build-unstable-codereview-value',
        value$964
    ]);
};
Gerrit$920.prototype[util$915.camelize('gerrit-build-notbuilt-codereview-value')] = function (value$965) {
    return util$915.primitiveAccessor.apply(this, [
        'gerrit-build-notbuilt-codereview-value',
        value$965
    ]);
};
Gerrit$920.prototype[util$915.camelize('failure-message')] = function (value$966) {
    return util$915.primitiveAccessor.apply(this, [
        'failure-message',
        value$966
    ]);
};
Gerrit$920.prototype[util$915.camelize('successful-message')] = function (value$967) {
    return util$915.primitiveAccessor.apply(this, [
        'successful-message',
        value$967
    ]);
};
Gerrit$920.prototype[util$915.camelize('unstable-message')] = function (value$968) {
    return util$915.primitiveAccessor.apply(this, [
        'unstable-message',
        value$968
    ]);
};
Gerrit$920.prototype[util$915.camelize('notbuilt-message')] = function (value$969) {
    return util$915.primitiveAccessor.apply(this, [
        'notbuilt-message',
        value$969
    ]);
};
Gerrit$920.prototype[util$915.camelize('failure-message-file')] = function (value$970) {
    return util$915.primitiveAccessor.apply(this, [
        'failure-message-file',
        value$970
    ]);
};
Gerrit$920.prototype[util$915.camelize('projects')] = function (value$971) {
    return util$915.objectArrayAccessor.apply(this, [
        'projects',
        Project$917,
        value$971
    ]);
};
Gerrit$920.prototype[util$915.camelize('skip-vote')] = function (value$972) {
    return util$915.objectAccessor.apply(this, [
        'skip-vote',
        SkipVote$918,
        value$972
    ]);
};
Gerrit$920.prototype[util$915.camelize('silent')] = function (value$973) {
    return util$915.primitiveAccessor.apply(this, [
        'silent',
        value$973
    ]);
};
Gerrit$920.prototype[util$915.camelize('silent-start')] = function (value$974) {
    return util$915.primitiveAccessor.apply(this, [
        'silent-start',
        value$974
    ]);
};
Gerrit$920.prototype[util$915.camelize('escape-quotes')] = function (value$975) {
    return util$915.primitiveAccessor.apply(this, [
        'escape-quotes',
        value$975
    ]);
};
Gerrit$920.prototype[util$915.camelize('no-name-and-email')] = function (value$976) {
    return util$915.primitiveAccessor.apply(this, [
        'no-name-and-email',
        value$976
    ]);
};
Gerrit$920.prototype[util$915.camelize('readable-message')] = function (value$977) {
    return util$915.primitiveAccessor.apply(this, [
        'readable-message',
        value$977
    ]);
};
Gerrit$920.prototype[util$915.camelize('dependency-jobs')] = function (value$978) {
    return util$915.primitiveAccessor.apply(this, [
        'dependency-jobs',
        value$978
    ]);
};
Gerrit$920.prototype[util$915.camelize('notification-level')] = function (value$979) {
    return util$915.primitiveAccessor.apply(this, [
        'notification-level',
        value$979
    ]);
};
Gerrit$920.prototype[util$915.camelize('dynamic-trigger-enabled')] = function (value$980) {
    return util$915.primitiveAccessor.apply(this, [
        'dynamic-trigger-enabled',
        value$980
    ]);
};
Gerrit$920.prototype[util$915.camelize('dynamic-trigger-url')] = function (value$981) {
    return util$915.primitiveAccessor.apply(this, [
        'dynamic-trigger-url',
        value$981
    ]);
};
Gerrit$920.prototype[util$915.camelize('trigger-for-unreviewed-patches')] = function (value$982) {
    return util$915.primitiveAccessor.apply(this, [
        'trigger-for-unreviewed-patches',
        value$982
    ]);
};
Gerrit$920.prototype[util$915.camelize('custom-url')] = function (value$983) {
    return util$915.primitiveAccessor.apply(this, [
        'custom-url',
        value$983
    ]);
};
Gerrit$920.prototype[util$915.camelize('server-name')] = function (value$984) {
    return util$915.primitiveAccessor.apply(this, [
        'server-name',
        value$984
    ]);
};