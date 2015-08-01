'use strict';
var util$890 = require('../../misc/util.js');
var Git$891 = require('./scm/git.js');
var Hg$892 = require('./scm/hg.js');
var Repo$893 = require('./scm/repo.js');
var Svn$894 = require('./scm/svn.js');
var Tfs$895 = require('./scm/tfs.js');
var Workspace$896 = require('./scm/workspace.js');
var Scm$898 = function (upper$906, array$907) {
    this.upper = upper$906;
    this.array = array$907;
};
Scm$898.prototype.up = function () {
    return this.upper;
};
Scm$898.prototype.and = Scm$898.prototype.up;
module.exports = Scm$898;
Scm$898.prototype[util$890.camelize('git')] = function (value$908) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'git',
        Git$891,
        value$908
    ]);
};
Scm$898.prototype[util$890.camelize('hg')] = function (value$909) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'hg',
        Hg$892,
        value$909
    ]);
};
Scm$898.prototype[util$890.camelize('repo')] = function (value$910) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'repo',
        Repo$893,
        value$910
    ]);
};
Scm$898.prototype[util$890.camelize('store')] = function (value$911) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'store',
        Store,
        value$911
    ]);
};
Scm$898.prototype[util$890.camelize('svn')] = function (value$912) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'svn',
        Svn$894,
        value$912
    ]);
};
Scm$898.prototype[util$890.camelize('tfs')] = function (value$913) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'tfs',
        Tfs$895,
        value$913
    ]);
};
Scm$898.prototype[util$890.camelize('workspace')] = function (value$914) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'workspace',
        Workspace$896,
        value$914
    ]);
};