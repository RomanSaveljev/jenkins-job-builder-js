'use strict';
var util$890 = require('../../misc/util.js');
var BuildResult$891 = require('./triggers/build-result.js');
var Gerrit$892 = require('./triggers/gerrit.js');
var Github$893 = require('../../misc/empty-proxy.js');
var GithubPullRequest$894 = require('./triggers/github-pull-request.js');
var GitlabMergeRequest$895 = require('./triggers/gitlab-merge-request.js');
var GroovyScript$896 = require('./triggers/groovy-script.js');
var Ivy$897 = require('./triggers/ivy.js');
var PollUrl$898 = require('./triggers/pollurl.js');
var Reverse$899 = require('./triggers/reverse.js');
var Script$900 = require('./triggers/script.js');
var Triggers$902 = function (upper$915, array$916) {
    this.upper = upper$915;
    this.array = array$916;
};
Triggers$902.prototype.up = function () {
    return this.upper;
};
Triggers$902.prototype.and = Triggers$902.prototype.up;
module.exports = Triggers$902;
Triggers$902.prototype[util$890.camelize('build-result')] = function (value$917) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'build-result',
        BuildResult$891,
        value$917
    ]);
};
Triggers$902.prototype[util$890.camelize('gerrit')] = function (value$918) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'gerrit',
        Gerrit$892,
        value$918
    ]);
};
Triggers$902.prototype[util$890.camelize('github')] = function (value$919) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'github',
        Github$893,
        value$919
    ]);
};
Triggers$902.prototype[util$890.camelize('github-pull-request')] = function (value$920) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'github-pull-request',
        GithubPullRequest$894,
        value$920
    ]);
};
Triggers$902.prototype[util$890.camelize('gitlab-merge-request')] = function (value$921) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'gitlab-merge-request',
        GitlabMergeRequest$895,
        value$921
    ]);
};
Triggers$902.prototype[util$890.camelize('groovy-script')] = function (value$922) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'groovy-script',
        GroovyScript$896,
        value$922
    ]);
};
Triggers$902.prototype[util$890.camelize('ivy')] = function (value$923) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'ivy',
        Ivy$897,
        value$923
    ]);
};
Triggers$902.prototype[util$890.camelize('pollscm')] = function (value$924) {
    return util$890.keyedPrimitiveElementAccessor.apply(this, [
        'pollscm',
        value$924
    ]);
};
Triggers$902.prototype[util$890.camelize('pollurl')] = function (value$925) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'pollurl',
        PollUrl$898,
        value$925
    ]);
};
Triggers$902.prototype[util$890.camelize('reverse')] = function (value$926) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'reverse',
        Reverse$899,
        value$926
    ]);
};
Triggers$902.prototype[util$890.camelize('script')] = function (value$927) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'script',
        Script$900,
        value$927
    ]);
};
Triggers$902.prototype[util$890.camelize('timed')] = function (value$928) {
    return util$890.keyedPrimitiveElementAccessor.apply(this, [
        'timed',
        value$928
    ]);
};