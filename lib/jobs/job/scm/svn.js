'use strict';
var util$915 = require('../../../misc/util.js');
var Repo$916 = require('./svn/repo.js');
var Svn$918 = function (upper$934, obj$935) {
    this.upper = upper$934;
    this.obj = obj$935;
};
Svn$918.prototype.up = function () {
    return this.upper;
};
Svn$918.prototype.and = Svn$918.prototype.up;
module.exports = Svn$918;
Svn$918.prototype[util$915.camelize('url')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'url',
        value$936
    ]);
};
Svn$918.prototype[util$915.camelize('basedir')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'basedir',
        value$937
    ]);
};
Svn$918.prototype[util$915.camelize('credentials-id')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'credentials-id',
        value$938
    ]);
};
Svn$918.prototype[util$915.camelize('repo-depth')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'repo-depth',
        value$939
    ]);
};
Svn$918.prototype[util$915.camelize('ignore-externals')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'ignore-externals',
        value$940
    ]);
};
Svn$918.prototype[util$915.camelize('workspaceupdater')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'workspaceupdater',
        value$941
    ]);
};
Svn$918.prototype[util$915.camelize('excluded-users')] = function (value$942) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'excluded-users',
        value$942
    ]);
};
Svn$918.prototype[util$915.camelize('included-regions')] = function (value$943) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'included-regions',
        value$943
    ]);
};
Svn$918.prototype[util$915.camelize('excluded-regions')] = function (value$944) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'excluded-regions',
        value$944
    ]);
};
Svn$918.prototype[util$915.camelize('excluded-commit-messages')] = function (value$945) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'excluded-commit-messages',
        value$945
    ]);
};
Svn$918.prototype[util$915.camelize('exclusion-revprop-name')] = function (value$946) {
    return util$915.primitiveAccessor.apply(this, [
        'exclusion-revprop-name',
        value$946
    ]);
};
Svn$918.prototype[util$915.camelize('ignore-property-changes-on-directories')] = function (value$947) {
    return util$915.primitiveAccessor.apply(this, [
        'ignore-property-changes-on-directories',
        value$947
    ]);
};
Svn$918.prototype[util$915.camelize('filter-changelog')] = function (value$948) {
    return util$915.primitiveAccessor.apply(this, [
        'filter-changelog',
        value$948
    ]);
};
Svn$918.prototype[util$915.camelize('repos')] = function (value$949) {
    return util$915.objectArrayAccessor.apply(this, [
        'repos',
        Repo$916,
        value$949
    ]);
};
Svn$918.prototype[util$915.camelize('viewvc-url')] = function (value$950) {
    return util$915.primitiveAccessor.apply(this, [
        'viewvc-url',
        value$950
    ]);
};