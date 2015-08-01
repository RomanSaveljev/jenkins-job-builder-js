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
uppableArrayProxy(Triggers);
Triggers.prototype[util$890.camelize('build-result')] = function (value$913) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'build-result',
        BuildResult$891,
        value$913
    ]);
};
Triggers.prototype[util$890.camelize('gerrit')] = function (value$914) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'gerrit',
        Gerrit$892,
        value$914
    ]);
};
Triggers.prototype[util$890.camelize('github')] = function (value$915) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'github',
        Github$893,
        value$915
    ]);
};
Triggers.prototype[util$890.camelize('github-pull-request')] = function (value$916) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'github-pull-request',
        GithubPullRequest$894,
        value$916
    ]);
};
Triggers.prototype[util$890.camelize('gitlab-merge-request')] = function (value$917) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'gitlab-merge-request',
        GitlabMergeRequest$895,
        value$917
    ]);
};
Triggers.prototype[util$890.camelize('groovy-script')] = function (value$918) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'groovy-script',
        GroovyScript$896,
        value$918
    ]);
};
Triggers.prototype[util$890.camelize('ivy')] = function (value$919) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'ivy',
        Ivy$897,
        value$919
    ]);
};
Triggers.prototype[util$890.camelize('pollscm')] = function (value$920) {
    return util$890.keyedPrimitiveElementAccessor.apply(this, [
        'pollscm',
        value$920
    ]);
};
Triggers.prototype[util$890.camelize('pollurl')] = function (value$921) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'pollurl',
        PollUrl$898,
        value$921
    ]);
};
Triggers.prototype[util$890.camelize('reverse')] = function (value$922) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'reverse',
        Reverse$899,
        value$922
    ]);
};
Triggers.prototype[util$890.camelize('script')] = function (value$923) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'script',
        Script$900,
        value$923
    ]);
};
Triggers.prototype[util$890.camelize('timed')] = function (value$924) {
    return util$890.keyedPrimitiveElementAccessor.apply(this, [
        'timed',
        value$924
    ]);
};