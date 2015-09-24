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
var Triggers$950 = function (upper$961, array$962) {
    this.upper = upper$961;
    this.array = array$962;
};
Triggers$950.prototype.up = function () {
    return this.upper;
};
Triggers$950.prototype.and = Triggers$950.prototype.up;
module.exports = Triggers$950;
Triggers$950.prototype[util$940.camelize('build-result')] = function (value$963) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'build-result',
        BuildResult$941,
        value$963
    ]);
};
Triggers$950.prototype[util$940.camelize('gerrit')] = function (value$964) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'gerrit',
        Gerrit$942,
        value$964
    ]);
};
Triggers$950.prototype[util$940.camelize('github')] = function (value$965) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'github',
        Github$943,
        value$965
    ]);
};
Triggers$950.prototype[util$940.camelize('github-pull-request')] = function (value$966) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'github-pull-request',
        GithubPullRequest$944,
        value$966
    ]);
};
Triggers$950.prototype[util$940.camelize('gitlab-merge-request')] = function (value$967) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'gitlab-merge-request',
        GitlabMergeRequest$945,
        value$967
    ]);
};
Triggers$950.prototype[util$940.camelize('pollscm')] = function (value$968) {
    return util$940.keyedPrimitiveElementAccessor.apply(this, [
        'pollscm',
        value$968
    ]);
};
Triggers$950.prototype[util$940.camelize('pollurl')] = function (value$969) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'pollurl',
        PollUrl$946,
        value$969
    ]);
};
Triggers$950.prototype[util$940.camelize('reverse')] = function (value$970) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'reverse',
        Reverse$947,
        value$970
    ]);
};
Triggers$950.prototype[util$940.camelize('script')] = function (value$971) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'script',
        Script$948,
        value$971
    ]);
};
Triggers$950.prototype[util$940.camelize('timed')] = function (value$972) {
    return util$940.keyedPrimitiveElementAccessor.apply(this, [
        'timed',
        value$972
    ]);
};