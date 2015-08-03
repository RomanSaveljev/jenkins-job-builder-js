'use strict';
var util$890 = require('../../../misc/util.js');
var Remote$891 = require('./git/remote.js');
var Merge$892 = require('./git/merge.js');
var ChangeLogAgainst$893 = require('./git/changelog-against.js');
var Clean$894 = require('./git/clean.js');
var Submodule$895 = require('./git/submodule.js');
var Git$897 = function (upper$931, obj$932) {
    this.upper = upper$931;
    this.obj = obj$932;
};
Git$897.prototype.up = function () {
    return this.upper;
};
Git$897.prototype.and = Git$897.prototype.up;
module.exports = Git$897;
Git$897.prototype[util$890.camelize('url')] = function (value$933) {
    return util$890.primitiveAccessor.apply(this, [
        'url',
        value$933
    ]);
};
Git$897.prototype[util$890.camelize('credentials-id')] = function (value$934) {
    return util$890.primitiveAccessor.apply(this, [
        'credentials-id',
        value$934
    ]);
};
Git$897.prototype[util$890.camelize('refspec')] = function (value$935) {
    return util$890.primitiveAccessor.apply(this, [
        'refspec',
        value$935
    ]);
};
Git$897.prototype[util$890.camelize('name')] = function (value$936) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$936
    ]);
};
Git$897.prototype[util$890.camelize('remotes')] = function (value$937) {
    return util$890.objectArrayAccessor.apply(this, [
        'remotes',
        Remote$891,
        value$937
    ]);
};
Git$897.prototype[util$890.camelize('branches')] = function (value$938) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'branches',
        value$938
    ]);
};
Git$897.prototype[util$890.camelize('excluded-users')] = function (value$939) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'excluded-users',
        value$939
    ]);
};
Git$897.prototype[util$890.camelize('included-regions')] = function (value$940) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'included-regions',
        value$940
    ]);
};
Git$897.prototype[util$890.camelize('excluded-regions')] = function (value$941) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'excluded-regions',
        value$941
    ]);
};
Git$897.prototype[util$890.camelize('local-branch')] = function (value$942) {
    return util$890.primitiveAccessor.apply(this, [
        'local-branch',
        value$942
    ]);
};
Git$897.prototype[util$890.camelize('merge')] = function (value$943) {
    return util$890.objectAccessor.apply(this, [
        'merge',
        Merge$892,
        value$943
    ]);
};
Git$897.prototype[util$890.camelize('basedir')] = function (value$944) {
    return util$890.primitiveAccessor.apply(this, [
        'basedir',
        value$944
    ]);
};
Git$897.prototype[util$890.camelize('skip-tag')] = function (value$945) {
    return util$890.primitiveAccessor.apply(this, [
        'skip-tag',
        value$945
    ]);
};
Git$897.prototype[util$890.camelize('shallow-clone')] = function (value$946) {
    return util$890.primitiveAccessor.apply(this, [
        'shallow-clone',
        value$946
    ]);
};
Git$897.prototype[util$890.camelize('prune')] = function (value$947) {
    return util$890.primitiveAccessor.apply(this, [
        'prune',
        value$947
    ]);
};
Git$897.prototype[util$890.camelize('fastpoll')] = function (value$948) {
    return util$890.primitiveAccessor.apply(this, [
        'fastpoll',
        value$948
    ]);
};
Git$897.prototype[util$890.camelize('use-author')] = function (value$949) {
    return util$890.primitiveAccessor.apply(this, [
        'use-author',
        value$949
    ]);
};
Git$897.prototype[util$890.camelize('git-tool')] = function (value$950) {
    return util$890.primitiveAccessor.apply(this, [
        'git-tool',
        value$950
    ]);
};
Git$897.prototype[util$890.camelize('reference-repo')] = function (value$951) {
    return util$890.primitiveAccessor.apply(this, [
        'reference-repo',
        value$951
    ]);
};
Git$897.prototype[util$890.camelize('scm-name')] = function (value$952) {
    return util$890.primitiveAccessor.apply(this, [
        'scm-name',
        value$952
    ]);
};
Git$897.prototype[util$890.camelize('ignore-notify')] = function (value$953) {
    return util$890.primitiveAccessor.apply(this, [
        'ignore-notify',
        value$953
    ]);
};
Git$897.prototype[util$890.camelize('browser')] = function (value$954) {
    return util$890.primitiveAccessor.apply(this, [
        'browser',
        value$954
    ]);
};
Git$897.prototype[util$890.camelize('browser-url')] = function (value$955) {
    return util$890.primitiveAccessor.apply(this, [
        'browser-url',
        value$955
    ]);
};
Git$897.prototype[util$890.camelize('browser-version')] = function (value$956) {
    return util$890.primitiveAccessor.apply(this, [
        'browser-version',
        value$956
    ]);
};
Git$897.prototype[util$890.camelize('project-name')] = function (value$957) {
    return util$890.primitiveAccessor.apply(this, [
        'project-name',
        value$957
    ]);
};
Git$897.prototype[util$890.camelize('choosing-strategy')] = function (value$958) {
    return util$890.primitiveAccessor.apply(this, [
        'choosing-strategy',
        value$958
    ]);
};
Git$897.prototype[util$890.camelize('git-config-name')] = function (value$959) {
    return util$890.primitiveAccessor.apply(this, [
        'git-config-name',
        value$959
    ]);
};
Git$897.prototype[util$890.camelize('git-config-email')] = function (value$960) {
    return util$890.primitiveAccessor.apply(this, [
        'git-config-email',
        value$960
    ]);
};
Git$897.prototype[util$890.camelize('changelog-against')] = function (value$961) {
    return util$890.objectAccessor.apply(this, [
        'changelog-against',
        ChangeLogAgainst$893,
        value$961
    ]);
};
Git$897.prototype[util$890.camelize('clean')] = function (value$962) {
    return util$890.objectAccessor.apply(this, [
        'clean',
        Clean$894,
        value$962
    ]);
};
Git$897.prototype[util$890.camelize('submodule')] = function (value$963) {
    return util$890.objectAccessor.apply(this, [
        'submodule',
        Submodule$895,
        value$963
    ]);
};
Git$897.prototype[util$890.camelize('timeout')] = function (value$964) {
    return util$890.primitiveAccessor.apply(this, [
        'timeout',
        value$964
    ]);
};
Git$897.prototype[util$890.camelize('wipe-workspace')] = function (value$965) {
    return util$890.primitiveAccessor.apply(this, [
        'wipe-workspace',
        value$965
    ]);
};