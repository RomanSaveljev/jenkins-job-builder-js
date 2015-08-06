'use strict';
var util$890 = require('../../misc/util.js');
var Git$891 = require('./scm/git.js');
var Hg$892 = require('./scm/hg.js');
var Repo$893 = require('./scm/repo.js');
var Store$894 = require('./scm/store.js');
var Svn$895 = require('./scm/svn.js');
var Tfs$896 = require('./scm/tfs.js');
var Workspace$897 = require('./scm/workspace.js');
var Scm$899 = function (upper$907, array$908) {
    this.upper = upper$907;
    this.array = array$908;
};
Scm$899.prototype.up = function () {
    return this.upper;
};
Scm$899.prototype.and = Scm$899.prototype.up;
module.exports = Scm$899;
Scm$899.prototype[util$890.camelize('git')] = function (value$909) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'git',
        Git$891,
        value$909
    ]);
};
Scm$899.prototype[util$890.camelize('hg')] = function (value$910) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'hg',
        Hg$892,
        value$910
    ]);
};
Scm$899.prototype[util$890.camelize('repo')] = function (value$911) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'repo',
        Repo$893,
        value$911
    ]);
};
Scm$899.prototype[util$890.camelize('store')] = function (value$912) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'store',
        Store$894,
        value$912
    ]);
};
Scm$899.prototype[util$890.camelize('svn')] = function (value$913) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'svn',
        Svn$895,
        value$913
    ]);
};
Scm$899.prototype[util$890.camelize('tfs')] = function (value$914) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'tfs',
        Tfs$896,
        value$914
    ]);
};
Scm$899.prototype[util$890.camelize('workspace')] = function (value$915) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'workspace',
        Workspace$897,
        value$915
    ]);
};