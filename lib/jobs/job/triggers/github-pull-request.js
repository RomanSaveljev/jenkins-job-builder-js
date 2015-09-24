'use strict';
var util$940 = require('../../../misc/util.js');
var GithubPullRequest$942 = function (upper$954, obj$955) {
    this.upper = upper$954;
    this.obj = obj$955;
};
GithubPullRequest$942.prototype.up = function () {
    return this.upper;
};
GithubPullRequest$942.prototype.and = GithubPullRequest$942.prototype.up;
module.exports = GithubPullRequest$942;
GithubPullRequest$942.prototype[util$940.camelize('admin-list')] = function (value$956) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'admin-list',
        value$956
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('white-list')] = function (value$957) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'white-list',
        value$957
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('org-list')] = function (value$958) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'org-list',
        value$958
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('allow-whitelist-orgs-as-admins')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'allow-whitelist-orgs-as-admins',
        value$959
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('cron')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'cron',
        value$960
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('trigger-phrase')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'trigger-phrase',
        value$961
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('only-trigger-phrase')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'only-trigger-phrase',
        value$962
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('github-hooks')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'github-hooks',
        value$963
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('permit-all')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'permit-all',
        value$964
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('auto-close-on-fail')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'auto-close-on-fail',
        value$965
    ]);
};
GithubPullRequest$942.prototype[util$940.camelize('white-list-target-branches')] = function (value$966) {
    return util$940.primitiveArrayAccessor.apply(this, [
        'white-list-target-branches',
        value$966
    ]);
};