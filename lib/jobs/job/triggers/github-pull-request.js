'use strict';
var util$890 = require('../../../misc/util.js');
var GithubPullRequest$892 = function (upper$904, obj$905) {
    this.upper = upper$904;
    this.obj = obj$905;
};
GithubPullRequest$892.prototype.up = function () {
    return this.upper;
};
GithubPullRequest$892.prototype.and = GithubPullRequest$892.prototype.up;
module.exports = GithubPullRequest$892;
GithubPullRequest$892.prototype[util$890.camelize('admin-list')] = function (value$906) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'admin-list',
        value$906
    ]);
};
GithubPullRequest$892.prototype[util$890.camelize('white-list')] = function (value$907) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'white-list',
        value$907
    ]);
};
GithubPullRequest$892.prototype[util$890.camelize('org-list')] = function (value$908) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'org-list',
        value$908
    ]);
};
GithubPullRequest$892.prototype[util$890.camelize('allow-whitelist-orgs-as-admins')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'allow-whitelist-orgs-as-admins',
        value$909
    ]);
};
GithubPullRequest$892.prototype[util$890.camelize('cron')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'cron',
        value$910
    ]);
};
GithubPullRequest$892.prototype[util$890.camelize('trigger-phrase')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'trigger-phrase',
        value$911
    ]);
};
GithubPullRequest$892.prototype[util$890.camelize('only-trigger-phrase')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'only-trigger-phrase',
        value$912
    ]);
};
GithubPullRequest$892.prototype[util$890.camelize('github-hooks')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'github-hooks',
        value$913
    ]);
};
GithubPullRequest$892.prototype[util$890.camelize('permit-all')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'permit-all',
        value$914
    ]);
};
GithubPullRequest$892.prototype[util$890.camelize('auto-close-on-fail')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'auto-close-on-fail',
        value$915
    ]);
};
GithubPullRequest$892.prototype[util$890.camelize('white-list-target-branches')] = function (value$916) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'white-list-target-branches',
        value$916
    ]);
};