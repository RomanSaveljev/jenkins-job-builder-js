'use strict';
var util$915 = require('../../../misc/util.js');
var GithubPullRequest$917 = function (upper$929, obj$930) {
    this.upper = upper$929;
    this.obj = obj$930;
};
GithubPullRequest$917.prototype.up = function () {
    return this.upper;
};
GithubPullRequest$917.prototype.and = GithubPullRequest$917.prototype.up;
module.exports = GithubPullRequest$917;
GithubPullRequest$917.prototype[util$915.camelize('admin-list')] = function (value$931) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'admin-list',
        value$931
    ]);
};
GithubPullRequest$917.prototype[util$915.camelize('white-list')] = function (value$932) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'white-list',
        value$932
    ]);
};
GithubPullRequest$917.prototype[util$915.camelize('org-list')] = function (value$933) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'org-list',
        value$933
    ]);
};
GithubPullRequest$917.prototype[util$915.camelize('allow-whitelist-orgs-as-admins')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'allow-whitelist-orgs-as-admins',
        value$934
    ]);
};
GithubPullRequest$917.prototype[util$915.camelize('cron')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'cron',
        value$935
    ]);
};
GithubPullRequest$917.prototype[util$915.camelize('trigger-phrase')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'trigger-phrase',
        value$936
    ]);
};
GithubPullRequest$917.prototype[util$915.camelize('only-trigger-phrase')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'only-trigger-phrase',
        value$937
    ]);
};
GithubPullRequest$917.prototype[util$915.camelize('github-hooks')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'github-hooks',
        value$938
    ]);
};
GithubPullRequest$917.prototype[util$915.camelize('permit-all')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'permit-all',
        value$939
    ]);
};
GithubPullRequest$917.prototype[util$915.camelize('auto-close-on-fail')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'auto-close-on-fail',
        value$940
    ]);
};
GithubPullRequest$917.prototype[util$915.camelize('white-list-target-branches')] = function (value$941) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'white-list-target-branches',
        value$941
    ]);
};