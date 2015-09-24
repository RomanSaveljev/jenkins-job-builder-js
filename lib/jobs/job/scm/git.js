'use strict';
var util$915 = require('../../../misc/util.js');
var Remote$916 = require('./git/remote.js');
var Merge$917 = require('./git/merge.js');
var ChangeLogAgainst$918 = require('./git/changelog-against.js');
var Clean$919 = require('./git/clean.js');
var Submodule$920 = require('./git/submodule.js');
var SparseCheckout$921 = require('./git/sparse-checkout.js');
var Git$923 = function (upper$960, obj$961) {
    this.upper = upper$960;
    this.obj = obj$961;
};
Git$923.prototype.up = function () {
    return this.upper;
};
Git$923.prototype.and = Git$923.prototype.up;
module.exports = Git$923;
Git$923.prototype[util$915.camelize('url')] = function (value$962) {
    return util$915.primitiveAccessor.apply(this, [
        'url',
        value$962
    ]);
};
Git$923.prototype[util$915.camelize('credentials-id')] = function (value$963) {
    return util$915.primitiveAccessor.apply(this, [
        'credentials-id',
        value$963
    ]);
};
Git$923.prototype[util$915.camelize('refspec')] = function (value$964) {
    return util$915.primitiveAccessor.apply(this, [
        'refspec',
        value$964
    ]);
};
Git$923.prototype[util$915.camelize('name')] = function (value$965) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$965
    ]);
};
Git$923.prototype[util$915.camelize('remotes')] = function (value$966) {
    return util$915.objectArrayAccessor.apply(this, [
        'remotes',
        Remote$916,
        value$966
    ]);
};
Git$923.prototype[util$915.camelize('branches')] = function (value$967) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'branches',
        value$967
    ]);
};
Git$923.prototype[util$915.camelize('excluded-users')] = function (value$968) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'excluded-users',
        value$968
    ]);
};
Git$923.prototype[util$915.camelize('included-regions')] = function (value$969) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'included-regions',
        value$969
    ]);
};
Git$923.prototype[util$915.camelize('excluded-regions')] = function (value$970) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'excluded-regions',
        value$970
    ]);
};
Git$923.prototype[util$915.camelize('local-branch')] = function (value$971) {
    return util$915.primitiveAccessor.apply(this, [
        'local-branch',
        value$971
    ]);
};
Git$923.prototype[util$915.camelize('merge')] = function (value$972) {
    return util$915.objectAccessor.apply(this, [
        'merge',
        Merge$917,
        value$972
    ]);
};
Git$923.prototype[util$915.camelize('basedir')] = function (value$973) {
    return util$915.primitiveAccessor.apply(this, [
        'basedir',
        value$973
    ]);
};
Git$923.prototype[util$915.camelize('skip-tag')] = function (value$974) {
    return util$915.primitiveAccessor.apply(this, [
        'skip-tag',
        value$974
    ]);
};
Git$923.prototype[util$915.camelize('shallow-clone')] = function (value$975) {
    return util$915.primitiveAccessor.apply(this, [
        'shallow-clone',
        value$975
    ]);
};
Git$923.prototype[util$915.camelize('prune')] = function (value$976) {
    return util$915.primitiveAccessor.apply(this, [
        'prune',
        value$976
    ]);
};
Git$923.prototype[util$915.camelize('fastpoll')] = function (value$977) {
    return util$915.primitiveAccessor.apply(this, [
        'fastpoll',
        value$977
    ]);
};
Git$923.prototype[util$915.camelize('use-author')] = function (value$978) {
    return util$915.primitiveAccessor.apply(this, [
        'use-author',
        value$978
    ]);
};
Git$923.prototype[util$915.camelize('git-tool')] = function (value$979) {
    return util$915.primitiveAccessor.apply(this, [
        'git-tool',
        value$979
    ]);
};
Git$923.prototype[util$915.camelize('reference-repo')] = function (value$980) {
    return util$915.primitiveAccessor.apply(this, [
        'reference-repo',
        value$980
    ]);
};
Git$923.prototype[util$915.camelize('scm-name')] = function (value$981) {
    return util$915.primitiveAccessor.apply(this, [
        'scm-name',
        value$981
    ]);
};
Git$923.prototype[util$915.camelize('ignore-notify')] = function (value$982) {
    return util$915.primitiveAccessor.apply(this, [
        'ignore-notify',
        value$982
    ]);
};
Git$923.prototype[util$915.camelize('browser')] = function (value$983) {
    return util$915.primitiveAccessor.apply(this, [
        'browser',
        value$983
    ]);
};
Git$923.prototype[util$915.camelize('browser-url')] = function (value$984) {
    return util$915.primitiveAccessor.apply(this, [
        'browser-url',
        value$984
    ]);
};
Git$923.prototype[util$915.camelize('browser-version')] = function (value$985) {
    return util$915.primitiveAccessor.apply(this, [
        'browser-version',
        value$985
    ]);
};
Git$923.prototype[util$915.camelize('project-name')] = function (value$986) {
    return util$915.primitiveAccessor.apply(this, [
        'project-name',
        value$986
    ]);
};
Git$923.prototype[util$915.camelize('choosing-strategy')] = function (value$987) {
    return util$915.primitiveAccessor.apply(this, [
        'choosing-strategy',
        value$987
    ]);
};
Git$923.prototype[util$915.camelize('git-config-name')] = function (value$988) {
    return util$915.primitiveAccessor.apply(this, [
        'git-config-name',
        value$988
    ]);
};
Git$923.prototype[util$915.camelize('git-config-email')] = function (value$989) {
    return util$915.primitiveAccessor.apply(this, [
        'git-config-email',
        value$989
    ]);
};
Git$923.prototype[util$915.camelize('changelog-against')] = function (value$990) {
    return util$915.objectAccessor.apply(this, [
        'changelog-against',
        ChangeLogAgainst$918,
        value$990
    ]);
};
Git$923.prototype[util$915.camelize('clean')] = function (value$991) {
    return util$915.objectAccessor.apply(this, [
        'clean',
        Clean$919,
        value$991
    ]);
};
Git$923.prototype[util$915.camelize('sparse-checkout')] = function (value$992) {
    return util$915.objectAccessor.apply(this, [
        'sparse-checkout',
        SparseCheckout$921,
        value$992
    ]);
};
Git$923.prototype[util$915.camelize('ignore-commits-with-messages')] = function (value$993) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'ignore-commits-with-messages',
        value$993
    ]);
};
Git$923.prototype[util$915.camelize('force-polling-using-workspace')] = function (value$994) {
    return util$915.primitiveAccessor.apply(this, [
        'force-polling-using-workspace',
        value$994
    ]);
};
Git$923.prototype[util$915.camelize('submodule')] = function (value$995) {
    return util$915.objectAccessor.apply(this, [
        'submodule',
        Submodule$920,
        value$995
    ]);
};
Git$923.prototype[util$915.camelize('timeout')] = function (value$996) {
    return util$915.primitiveAccessor.apply(this, [
        'timeout',
        value$996
    ]);
};
Git$923.prototype[util$915.camelize('wipe-workspace')] = function (value$997) {
    return util$915.primitiveAccessor.apply(this, [
        'wipe-workspace',
        value$997
    ]);
};