'use strict';
var util$915 = require('../../misc/util.js');
var BuildResult$916 = require('./triggers/build-result.js');
var Gerrit$917 = require('./triggers/gerrit.js');
var Github$918 = require('../../misc/empty-proxy.js');
var GithubPullRequest$919 = require('./triggers/github-pull-request.js');
var GitlabMergeRequest$920 = require('./triggers/gitlab-merge-request.js');
var PollUrl$921 = require('./triggers/pollurl.js');
var Reverse$922 = require('./triggers/reverse.js');
var Script$923 = require('./triggers/script.js');
var Triggers$925 = function (upper$936, array$937) {
    this.upper = upper$936;
    this.array = array$937;
};
Triggers$925.prototype.up = function () {
    return this.upper;
};
Triggers$925.prototype.and = Triggers$925.prototype.up;
module.exports = Triggers$925;
Triggers$925.prototype[util$915.camelize('build-result')] = function (value$938) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'build-result',
        BuildResult$916,
        value$938
    ]);
};
Triggers$925.prototype[util$915.camelize('gerrit')] = function (value$939) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'gerrit',
        Gerrit$917,
        value$939
    ]);
};
Triggers$925.prototype[util$915.camelize('github')] = function (value$940) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'github',
        Github$918,
        value$940
    ]);
};
Triggers$925.prototype[util$915.camelize('github-pull-request')] = function (value$941) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'github-pull-request',
        GithubPullRequest$919,
        value$941
    ]);
};
Triggers$925.prototype[util$915.camelize('gitlab-merge-request')] = function (value$942) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'gitlab-merge-request',
        GitlabMergeRequest$920,
        value$942
    ]);
};
Triggers$925.prototype[util$915.camelize('pollscm')] = function (value$943) {
    return util$915.keyedPrimitiveElementAccessor.apply(this, [
        'pollscm',
        value$943
    ]);
};
Triggers$925.prototype[util$915.camelize('pollurl')] = function (value$944) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'pollurl',
        PollUrl$921,
        value$944
    ]);
};
Triggers$925.prototype[util$915.camelize('reverse')] = function (value$945) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'reverse',
        Reverse$922,
        value$945
    ]);
};
Triggers$925.prototype[util$915.camelize('script')] = function (value$946) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'script',
        Script$923,
        value$946
    ]);
};
Triggers$925.prototype[util$915.camelize('timed')] = function (value$947) {
    return util$915.keyedPrimitiveElementAccessor.apply(this, [
        'timed',
        value$947
    ]);
};