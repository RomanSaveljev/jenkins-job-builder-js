'use strict';
var util$940 = require('../../misc/util.js');
var BuildResult$941 = require('./triggers/build-result.js');
var Gerrit$942 = require('./triggers/gerrit.js');
var Github$943 = require('../../misc/empty-proxy.js');
var GithubPullRequest$944 = require('./triggers/github-pull-request.js');
var GitlabMergeRequest$945 = require('./triggers/gitlab-merge-request.js');
var PollUrl$946 = require('./triggers/pollurl.js');
var Reverse$947 = require('./triggers/reverse.js');
var Script$948 = require('./triggers/script.js');
var Gitlab$949 = require('./triggers/gitlab.js');
var Bitbucket$950 = require('../../misc/empty-proxy.js');
var Triggers$952 = function (upper$965, array$966) {
    this.upper = upper$965;
    this.array = array$966;
};
Triggers$952.prototype.up = function () {
    return this.upper;
};
Triggers$952.prototype.and = Triggers$952.prototype.up;
module.exports = Triggers$952;
Triggers$952.prototype[util$940.camelize('build-result')] = function (value$967) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'build-result',
        BuildResult$941,
        value$967
    ]);
};
Triggers$952.prototype[util$940.camelize('gerrit')] = function (value$968) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'gerrit',
        Gerrit$942,
        value$968
    ]);
};
Triggers$952.prototype[util$940.camelize('github')] = function (value$969) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'github',
        Github$943,
        value$969
    ]);
};
Triggers$952.prototype[util$940.camelize('github-pull-request')] = function (value$970) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'github-pull-request',
        GithubPullRequest$944,
        value$970
    ]);
};
Triggers$952.prototype[util$940.camelize('gitlab-merge-request')] = function (value$971) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'gitlab-merge-request',
        GitlabMergeRequest$945,
        value$971
    ]);
};
Triggers$952.prototype[util$940.camelize('pollscm')] = function (value$972) {
    return util$940.keyedPrimitiveElementAccessor.apply(this, [
        'pollscm',
        value$972
    ]);
};
Triggers$952.prototype[util$940.camelize('pollurl')] = function (value$973) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'pollurl',
        PollUrl$946,
        value$973
    ]);
};
Triggers$952.prototype[util$940.camelize('reverse')] = function (value$974) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'reverse',
        Reverse$947,
        value$974
    ]);
};
Triggers$952.prototype[util$940.camelize('script')] = function (value$975) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'script',
        Script$948,
        value$975
    ]);
};
Triggers$952.prototype[util$940.camelize('timed')] = function (value$976) {
    return util$940.keyedPrimitiveElementAccessor.apply(this, [
        'timed',
        value$976
    ]);
};
Triggers$952.prototype[util$940.camelize('gitlab')] = function (value$977) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'gitlab',
        Gitlab$949,
        value$977
    ]);
};
Triggers$952.prototype[util$940.camelize('bitbucket')] = function (value$978) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'bitbucket',
        Bitbucket$950,
        value$978
    ]);
};