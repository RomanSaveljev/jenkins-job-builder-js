'use strict';
var util$915 = require('../../misc/util.js');
var Git$916 = require('./scm/git.js');
var Hg$917 = require('./scm/hg.js');
var Repo$918 = require('./scm/repo.js');
var Store$919 = require('./scm/store.js');
var Svn$920 = require('./scm/svn.js');
var Tfs$921 = require('./scm/tfs.js');
var Workspace$922 = require('./scm/workspace.js');
var Scm$924 = function (upper$932, array$933) {
    this.upper = upper$932;
    this.array = array$933;
};
Scm$924.prototype.up = function () {
    return this.upper;
};
Scm$924.prototype.and = Scm$924.prototype.up;
module.exports = Scm$924;
Scm$924.prototype[util$915.camelize('git')] = function (value$934) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'git',
        Git$916,
        value$934
    ]);
};
Scm$924.prototype[util$915.camelize('hg')] = function (value$935) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'hg',
        Hg$917,
        value$935
    ]);
};
Scm$924.prototype[util$915.camelize('repo')] = function (value$936) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'repo',
        Repo$918,
        value$936
    ]);
};
Scm$924.prototype[util$915.camelize('store')] = function (value$937) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'store',
        Store$919,
        value$937
    ]);
};
Scm$924.prototype[util$915.camelize('svn')] = function (value$938) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'svn',
        Svn$920,
        value$938
    ]);
};
Scm$924.prototype[util$915.camelize('tfs')] = function (value$939) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'tfs',
        Tfs$921,
        value$939
    ]);
};
Scm$924.prototype[util$915.camelize('workspace')] = function (value$940) {
    return util$915.keyedObjectElementAccessor.apply(this, [
        'workspace',
        Workspace$922,
        value$940
    ]);
};