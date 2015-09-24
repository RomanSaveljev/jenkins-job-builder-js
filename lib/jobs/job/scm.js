'use strict';
var util$940 = require('../../misc/util.js');
var Git$941 = require('./scm/git.js');
var Hg$942 = require('./scm/hg.js');
var Repo$943 = require('./scm/repo.js');
var Store$944 = require('./scm/store.js');
var Svn$945 = require('./scm/svn.js');
var Tfs$946 = require('./scm/tfs.js');
var Workspace$947 = require('./scm/workspace.js');
var Scm$949 = function (upper$957, array$958) {
    this.upper = upper$957;
    this.array = array$958;
};
Scm$949.prototype.up = function () {
    return this.upper;
};
Scm$949.prototype.and = Scm$949.prototype.up;
module.exports = Scm$949;
Scm$949.prototype[util$940.camelize('git')] = function (value$959) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'git',
        Git$941,
        value$959
    ]);
};
Scm$949.prototype[util$940.camelize('hg')] = function (value$960) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'hg',
        Hg$942,
        value$960
    ]);
};
Scm$949.prototype[util$940.camelize('repo')] = function (value$961) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'repo',
        Repo$943,
        value$961
    ]);
};
Scm$949.prototype[util$940.camelize('store')] = function (value$962) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'store',
        Store$944,
        value$962
    ]);
};
Scm$949.prototype[util$940.camelize('svn')] = function (value$963) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'svn',
        Svn$945,
        value$963
    ]);
};
Scm$949.prototype[util$940.camelize('tfs')] = function (value$964) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'tfs',
        Tfs$946,
        value$964
    ]);
};
Scm$949.prototype[util$940.camelize('workspace')] = function (value$965) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'workspace',
        Workspace$947,
        value$965
    ]);
};