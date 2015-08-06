'use strict';
var util$890 = require('../../misc/util.js');
var BuildResult$891 = require('./triggers/build-result.js');
var Gerrit$892 = require('./triggers/gerrit.js');
var Github$893 = require('../../misc/empty-proxy.js');
var GithubPullRequest$894 = require('./triggers/github-pull-request.js');
var GitlabMergeRequest$895 = require('./triggers/gitlab-merge-request.js');
var PollUrl$896 = require('./triggers/pollurl.js');
var Reverse$897 = require('./triggers/reverse.js');
var Script$898 = require('./triggers/script.js');
var Triggers$900 = function (upper$911, array$912) {
    this.upper = upper$911;
    this.array = array$912;
};
Triggers$900.prototype.up = function () {
    return this.upper;
};
Triggers$900.prototype.and = Triggers$900.prototype.up;
module.exports = Triggers$900;
Triggers$900.prototype[util$890.camelize('build-result')] = function (value$913) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'build-result',
        BuildResult$891,
        value$913
    ]);
};
Triggers$900.prototype[util$890.camelize('gerrit')] = function (value$914) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'gerrit',
        Gerrit$892,
        value$914
    ]);
};
Triggers$900.prototype[util$890.camelize('github')] = function (value$915) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'github',
        Github$893,
        value$915
    ]);
};
Triggers$900.prototype[util$890.camelize('github-pull-request')] = function (value$916) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'github-pull-request',
        GithubPullRequest$894,
        value$916
    ]);
};
Triggers$900.prototype[util$890.camelize('gitlab-merge-request')] = function (value$917) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'gitlab-merge-request',
        GitlabMergeRequest$895,
        value$917
    ]);
};
Triggers$900.prototype[util$890.camelize('pollscm')] = function (value$918) {
    return util$890.keyedPrimitiveElementAccessor.apply(this, [
        'pollscm',
        value$918
    ]);
};
Triggers$900.prototype[util$890.camelize('pollurl')] = function (value$919) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'pollurl',
        PollUrl$896,
        value$919
    ]);
};
Triggers$900.prototype[util$890.camelize('reverse')] = function (value$920) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'reverse',
        Reverse$897,
        value$920
    ]);
};
Triggers$900.prototype[util$890.camelize('script')] = function (value$921) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'script',
        Script$898,
        value$921
    ]);
};
Triggers$900.prototype[util$890.camelize('timed')] = function (value$922) {
    return util$890.keyedPrimitiveElementAccessor.apply(this, [
        'timed',
        value$922
    ]);
};