'use strict';
var util$890 = require('../../misc/util.js');
var Git$891 = require('./scm/git.js');
var Hg$892 = require('./scm/hg.js');
var Repo$893 = require('./scm/repo.js');
var Svn$894 = require('./scm/svn.js');
var Tfs$895 = require('./scm/tfs.js');
var Workspace$896 = require('./scm/workspace.js');
uppableArrayProxy(Scm);
Scm.prototype[util$890.camelize('git')] = function (value$904) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'git',
        Git$891,
        value$904
    ]);
};
Scm.prototype[util$890.camelize('hg')] = function (value$905) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'hg',
        Hg$892,
        value$905
    ]);
};
Scm.prototype[util$890.camelize('repo')] = function (value$906) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'repo',
        Repo$893,
        value$906
    ]);
};
Scm.prototype[util$890.camelize('store')] = function (value$907) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'store',
        Store,
        value$907
    ]);
};
Scm.prototype[util$890.camelize('svn')] = function (value$908) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'svn',
        Svn$894,
        value$908
    ]);
};
Scm.prototype[util$890.camelize('tfs')] = function (value$909) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'tfs',
        Tfs$895,
        value$909
    ]);
};
Scm.prototype[util$890.camelize('workspace')] = function (value$910) {
    return util$890.keyedObjectElementAccessor.apply(this, [
        'workspace',
        Workspace$896,
        value$910
    ]);
};