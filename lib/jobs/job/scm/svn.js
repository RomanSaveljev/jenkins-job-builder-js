'use strict';
var util$890 = require('../../../misc/util.js');
var Repo$891 = require('./svn/repo.js');
var Svn$893 = function (upper$909, obj$910) {
    this.upper = upper$909;
    this.obj = obj$910;
};
Svn$893.prototype.up = function () {
    return this.upper;
};
Svn$893.prototype.and = Svn$893.prototype.up;
module.exports = Svn$893;
Svn$893.prototype[util$890.camelize('url')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'url',
        value$911
    ]);
};
Svn$893.prototype[util$890.camelize('basedir')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'basedir',
        value$912
    ]);
};
Svn$893.prototype[util$890.camelize('credentials-id')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'credentials-id',
        value$913
    ]);
};
Svn$893.prototype[util$890.camelize('repo-depth')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'repo-depth',
        value$914
    ]);
};
Svn$893.prototype[util$890.camelize('ignore-externals')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'ignore-externals',
        value$915
    ]);
};
Svn$893.prototype[util$890.camelize('workspaceupdater')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'workspaceupdater',
        value$916
    ]);
};
Svn$893.prototype[util$890.camelize('excluded-users')] = function (value$917) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'excluded-users',
        value$917
    ]);
};
Svn$893.prototype[util$890.camelize('included-regions')] = function (value$918) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'included-regions',
        value$918
    ]);
};
Svn$893.prototype[util$890.camelize('excluded-regions')] = function (value$919) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'excluded-regions',
        value$919
    ]);
};
Svn$893.prototype[util$890.camelize('excluded-commit-messages')] = function (value$920) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'excluded-commit-messages',
        value$920
    ]);
};
Svn$893.prototype[util$890.camelize('exclusion-revprop-name')] = function (value$921) {
    return util$890.primitiveAccessor.apply(this, [
        'exclusion-revprop-name',
        value$921
    ]);
};
Svn$893.prototype[util$890.camelize('ignore-property-changes-on-directories')] = function (value$922) {
    return util$890.primitiveAccessor.apply(this, [
        'ignore-property-changes-on-directories',
        value$922
    ]);
};
Svn$893.prototype[util$890.camelize('filter-changelog')] = function (value$923) {
    return util$890.primitiveAccessor.apply(this, [
        'filter-changelog',
        value$923
    ]);
};
Svn$893.prototype[util$890.camelize('repos')] = function (value$924) {
    return util$890.objectArrayAccessor.apply(this, [
        'repos',
        Repo$891,
        value$924
    ]);
};
Svn$893.prototype[util$890.camelize('viewvc-url')] = function (value$925) {
    return util$890.primitiveAccessor.apply(this, [
        'viewvc-url',
        value$925
    ]);
};