'use strict';
var util$890 = require('../../../misc/util.js');
var TriggerOn$891 = require('./gerrit/trigger-on.js');
var Project$892 = require('./gerrit/project.js');
var SkipVote$893 = require('./gerrit/skip-vote.js');
var Gerrit$895 = function (upper$927, obj$928) {
    this.upper = upper$927;
    this.obj = obj$928;
};
Gerrit$895.prototype.up = function () {
    return this.upper;
};
Gerrit$895.prototype.and = Gerrit$895.prototype.up;
module.exports = Gerrit$895;
Gerrit$895.prototype[util$890.camelize('trigger-on')] = function (value$929) {
    return util$890.customArrayAccessor.apply(this, [
        'trigger-on',
        TriggerOn$891,
        value$929
    ]);
};
Gerrit$895.prototype[util$890.camelize('override-votes')] = function (value$930) {
    return util$890.primitiveAccessor.apply(this, [
        'override-votes',
        value$930
    ]);
};
Gerrit$895.prototype[util$890.camelize('gerrit-build-started-verified-value')] = function (value$931) {
    return util$890.primitiveAccessor.apply(this, [
        'gerrit-build-started-verified-value',
        value$931
    ]);
};
Gerrit$895.prototype[util$890.camelize('gerrit-build-successful-verified-value')] = function (value$932) {
    return util$890.primitiveAccessor.apply(this, [
        'gerrit-build-successful-verified-value',
        value$932
    ]);
};
Gerrit$895.prototype[util$890.camelize('gerrit-build-failed-verified-value')] = function (value$933) {
    return util$890.primitiveAccessor.apply(this, [
        'gerrit-build-failed-verified-value',
        value$933
    ]);
};
Gerrit$895.prototype[util$890.camelize('gerrit-build-unstable-verified-value')] = function (value$934) {
    return util$890.primitiveAccessor.apply(this, [
        'gerrit-build-unstable-verified-value',
        value$934
    ]);
};
Gerrit$895.prototype[util$890.camelize('gerrit-build-notbuilt-verified-value')] = function (value$935) {
    return util$890.primitiveAccessor.apply(this, [
        'gerrit-build-notbuilt-verified-value',
        value$935
    ]);
};
Gerrit$895.prototype[util$890.camelize('gerrit-build-started-codereview-value')] = function (value$936) {
    return util$890.primitiveAccessor.apply(this, [
        'gerrit-build-started-codereview-value',
        value$936
    ]);
};
Gerrit$895.prototype[util$890.camelize('gerrit-build-successful-codereview-value')] = function (value$937) {
    return util$890.primitiveAccessor.apply(this, [
        'gerrit-build-successful-codereview-value',
        value$937
    ]);
};
Gerrit$895.prototype[util$890.camelize('gerrit-build-failed-codereview-value')] = function (value$938) {
    return util$890.primitiveAccessor.apply(this, [
        'gerrit-build-failed-codereview-value',
        value$938
    ]);
};
Gerrit$895.prototype[util$890.camelize('gerrit-build-unstable-codereview-value')] = function (value$939) {
    return util$890.primitiveAccessor.apply(this, [
        'gerrit-build-unstable-codereview-value',
        value$939
    ]);
};
Gerrit$895.prototype[util$890.camelize('gerrit-build-notbuilt-codereview-value')] = function (value$940) {
    return util$890.primitiveAccessor.apply(this, [
        'gerrit-build-notbuilt-codereview-value',
        value$940
    ]);
};
Gerrit$895.prototype[util$890.camelize('failure-message')] = function (value$941) {
    return util$890.primitiveAccessor.apply(this, [
        'failure-message',
        value$941
    ]);
};
Gerrit$895.prototype[util$890.camelize('successful-message')] = function (value$942) {
    return util$890.primitiveAccessor.apply(this, [
        'successful-message',
        value$942
    ]);
};
Gerrit$895.prototype[util$890.camelize('unstable-message')] = function (value$943) {
    return util$890.primitiveAccessor.apply(this, [
        'unstable-message',
        value$943
    ]);
};
Gerrit$895.prototype[util$890.camelize('notbuilt-message')] = function (value$944) {
    return util$890.primitiveAccessor.apply(this, [
        'notbuilt-message',
        value$944
    ]);
};
Gerrit$895.prototype[util$890.camelize('failure-message-file')] = function (value$945) {
    return util$890.primitiveAccessor.apply(this, [
        'failure-message-file',
        value$945
    ]);
};
Gerrit$895.prototype[util$890.camelize('projects')] = function (value$946) {
    return util$890.objectArrayAccessor.apply(this, [
        'projects',
        Project$892,
        value$946
    ]);
};
Gerrit$895.prototype[util$890.camelize('skip-vote')] = function (value$947) {
    return util$890.objectAccessor.apply(this, [
        'skip-vote',
        SkipVote$893,
        value$947
    ]);
};
Gerrit$895.prototype[util$890.camelize('silent')] = function (value$948) {
    return util$890.primitiveAccessor.apply(this, [
        'silent',
        value$948
    ]);
};
Gerrit$895.prototype[util$890.camelize('silent-start')] = function (value$949) {
    return util$890.primitiveAccessor.apply(this, [
        'silent-start',
        value$949
    ]);
};
Gerrit$895.prototype[util$890.camelize('escape-quotes')] = function (value$950) {
    return util$890.primitiveAccessor.apply(this, [
        'escape-quotes',
        value$950
    ]);
};
Gerrit$895.prototype[util$890.camelize('no-name-and-email')] = function (value$951) {
    return util$890.primitiveAccessor.apply(this, [
        'no-name-and-email',
        value$951
    ]);
};
Gerrit$895.prototype[util$890.camelize('readable-message')] = function (value$952) {
    return util$890.primitiveAccessor.apply(this, [
        'readable-message',
        value$952
    ]);
};
Gerrit$895.prototype[util$890.camelize('dependency-jobs')] = function (value$953) {
    return util$890.primitiveAccessor.apply(this, [
        'dependency-jobs',
        value$953
    ]);
};
Gerrit$895.prototype[util$890.camelize('notification-level')] = function (value$954) {
    return util$890.primitiveAccessor.apply(this, [
        'notification-level',
        value$954
    ]);
};
Gerrit$895.prototype[util$890.camelize('dynamic-trigger-enabled')] = function (value$955) {
    return util$890.primitiveAccessor.apply(this, [
        'dynamic-trigger-enabled',
        value$955
    ]);
};
Gerrit$895.prototype[util$890.camelize('dynamic-trigger-url')] = function (value$956) {
    return util$890.primitiveAccessor.apply(this, [
        'dynamic-trigger-url',
        value$956
    ]);
};
Gerrit$895.prototype[util$890.camelize('trigger-for-unreviewed-patches')] = function (value$957) {
    return util$890.primitiveAccessor.apply(this, [
        'trigger-for-unreviewed-patches',
        value$957
    ]);
};
Gerrit$895.prototype[util$890.camelize('custom-url')] = function (value$958) {
    return util$890.primitiveAccessor.apply(this, [
        'custom-url',
        value$958
    ]);
};
Gerrit$895.prototype[util$890.camelize('server-name')] = function (value$959) {
    return util$890.primitiveAccessor.apply(this, [
        'server-name',
        value$959
    ]);
};