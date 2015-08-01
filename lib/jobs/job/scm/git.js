'use strict';
var util$890 = require('../../../misc/util.js');
var Remote$891 = require('./git/remote.js');
var Merge$892 = require('./git/merge.js');
var ChangeLogAgainst$893 = require('./git/changelog-against.js');
var Clean$894 = require('./git/clean.js');
var SparseCheckout$895 = require('./git/sparse-checkout.js');
var Submodule$896 = require('./git/submodule.js');
var Git$898 = function (upper$936, obj$937) {
    this.upper = upper$936;
    this.obj = obj$937;
};
Git$898.prototype.up = function () {
    return this.upper;
};
Git$898.prototype.and = Git$898.prototype.up;
module.exports = Git$898;
Git$898.prototype[util$890.camelize('url')] = function (value$938) {
    return util$890.primitiveAccessor.apply(this, [
        'url',
        value$938
    ]);
};
Git$898.prototype[util$890.camelize('credentials-id')] = function (value$939) {
    return util$890.primitiveAccessor.apply(this, [
        'credentials-id',
        value$939
    ]);
};
Git$898.prototype[util$890.camelize('refspec')] = function (value$940) {
    return util$890.primitiveAccessor.apply(this, [
        'refspec',
        value$940
    ]);
};
Git$898.prototype[util$890.camelize('name')] = function (value$941) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$941
    ]);
};
Git$898.prototype[util$890.camelize('remotes')] = function (value$942) {
    return util$890.objectArrayAccessor.apply(this, [
        'remotes',
        Remote$891,
        value$942
    ]);
};
Git$898.prototype[util$890.camelize('branches')] = function (value$943) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'branches',
        value$943
    ]);
};
Git$898.prototype[util$890.camelize('excluded-users')] = function (value$944) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'excluded-users',
        value$944
    ]);
};
Git$898.prototype[util$890.camelize('included-regions')] = function (value$945) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'included-regions',
        value$945
    ]);
};
Git$898.prototype[util$890.camelize('excluded-regions')] = function (value$946) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'excluded-regions',
        value$946
    ]);
};
Git$898.prototype[util$890.camelize('local-branch')] = function (value$947) {
    return util$890.primitiveAccessor.apply(this, [
        'local-branch',
        value$947
    ]);
};
Git$898.prototype[util$890.camelize('merge')] = function (value$948) {
    return util$890.objectAccessor.apply(this, [
        'merge',
        Merge$892,
        value$948
    ]);
};
Git$898.prototype[util$890.camelize('basedir')] = function (value$949) {
    return util$890.primitiveAccessor.apply(this, [
        'basedir',
        value$949
    ]);
};
Git$898.prototype[util$890.camelize('skip-tag')] = function (value$950) {
    return util$890.primitiveAccessor.apply(this, [
        'skip-tag',
        value$950
    ]);
};
Git$898.prototype[util$890.camelize('shallow-clone')] = function (value$951) {
    return util$890.primitiveAccessor.apply(this, [
        'shallow-clone',
        value$951
    ]);
};
Git$898.prototype[util$890.camelize('prune')] = function (value$952) {
    return util$890.primitiveAccessor.apply(this, [
        'prune',
        value$952
    ]);
};
Git$898.prototype[util$890.camelize('fastpoll')] = function (value$953) {
    return util$890.primitiveAccessor.apply(this, [
        'fastpoll',
        value$953
    ]);
};
Git$898.prototype[util$890.camelize('use-author')] = function (value$954) {
    return util$890.primitiveAccessor.apply(this, [
        'use-author',
        value$954
    ]);
};
Git$898.prototype[util$890.camelize('git-tool')] = function (value$955) {
    return util$890.primitiveAccessor.apply(this, [
        'git-tool',
        value$955
    ]);
};
Git$898.prototype[util$890.camelize('reference-repo')] = function (value$956) {
    return util$890.primitiveAccessor.apply(this, [
        'reference-repo',
        value$956
    ]);
};
Git$898.prototype[util$890.camelize('scm-name')] = function (value$957) {
    return util$890.primitiveAccessor.apply(this, [
        'scm-name',
        value$957
    ]);
};
Git$898.prototype[util$890.camelize('ignore-notify')] = function (value$958) {
    return util$890.primitiveAccessor.apply(this, [
        'ignore-notify',
        value$958
    ]);
};
Git$898.prototype[util$890.camelize('browser')] = function (value$959) {
    return util$890.primitiveAccessor.apply(this, [
        'browser',
        value$959
    ]);
};
Git$898.prototype[util$890.camelize('browser-url')] = function (value$960) {
    return util$890.primitiveAccessor.apply(this, [
        'browser-url',
        value$960
    ]);
};
Git$898.prototype[util$890.camelize('browser-version')] = function (value$961) {
    return util$890.primitiveAccessor.apply(this, [
        'browser-version',
        value$961
    ]);
};
Git$898.prototype[util$890.camelize('project-name')] = function (value$962) {
    return util$890.primitiveAccessor.apply(this, [
        'project-name',
        value$962
    ]);
};
Git$898.prototype[util$890.camelize('repo-name')] = function (value$963) {
    return util$890.primitiveAccessor.apply(this, [
        'repo-name',
        value$963
    ]);
};
Git$898.prototype[util$890.camelize('choosing-strategy')] = function (value$964) {
    return util$890.primitiveAccessor.apply(this, [
        'choosing-strategy',
        value$964
    ]);
};
Git$898.prototype[util$890.camelize('git-config-name')] = function (value$965) {
    return util$890.primitiveAccessor.apply(this, [
        'git-config-name',
        value$965
    ]);
};
Git$898.prototype[util$890.camelize('git-config-email')] = function (value$966) {
    return util$890.primitiveAccessor.apply(this, [
        'git-config-email',
        value$966
    ]);
};
Git$898.prototype[util$890.camelize('changelog-against')] = function (value$967) {
    return util$890.objectAccessor.apply(this, [
        'changelog-against',
        ChangeLogAgainst$893,
        value$967
    ]);
};
Git$898.prototype[util$890.camelize('clean')] = function (value$968) {
    return util$890.objectAccessor.apply(this, [
        'clean',
        Clean$894,
        value$968
    ]);
};
Git$898.prototype[util$890.camelize('ignore-commits-with-messages')] = function (value$969) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'ignore-commits-with-messages',
        value$969
    ]);
};
Git$898.prototype[util$890.camelize('force-polling-using-workspace')] = function (value$970) {
    return util$890.primitiveAccessor.apply(this, [
        'force-polling-using-workspace',
        value$970
    ]);
};
Git$898.prototype[util$890.camelize('sparse-checkout')] = function (value$971) {
    return util$890.objectAccessor.apply(this, [
        'sparse-checkout',
        SparseCheckout$895,
        value$971
    ]);
};
Git$898.prototype[util$890.camelize('submodule')] = function (value$972) {
    return util$890.objectAccessor.apply(this, [
        'submodule',
        Submodule$896,
        value$972
    ]);
};
Git$898.prototype[util$890.camelize('timeout')] = function (value$973) {
    return util$890.primitiveAccessor.apply(this, [
        'timeout',
        value$973
    ]);
};
Git$898.prototype[util$890.camelize('wipe-workspace')] = function (value$974) {
    return util$890.primitiveAccessor.apply(this, [
        'wipe-workspace',
        value$974
    ]);
};