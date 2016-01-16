'use strict';
var util$940 = require('../../misc/util.js');
var Git$941 = require('./scm/git.js');
var Hg$942 = require('./scm/hg.js');
var Repo$943 = require('./scm/repo.js');
var Store$944 = require('./scm/store.js');
var Svn$945 = require('./scm/svn.js');
var Tfs$946 = require('./scm/tfs.js');
var Workspace$947 = require('./scm/workspace.js');
var OpenShiftImgStreams$948 = require('./scm/openshift-img-streams.js');
var Scm$950 = function (upper$959, array$960) {
    this.upper = upper$959;
    this.array = array$960;
};
Scm$950.prototype.up = function () {
    return this.upper;
};
Scm$950.prototype.and = Scm$950.prototype.up;
module.exports = Scm$950;
Scm$950.prototype[util$940.camelize('git')] = function (value$961) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'git',
        Git$941,
        value$961
    ]);
};
Scm$950.prototype[util$940.camelize('hg')] = function (value$962) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'hg',
        Hg$942,
        value$962
    ]);
};
Scm$950.prototype[util$940.camelize('repo')] = function (value$963) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'repo',
        Repo$943,
        value$963
    ]);
};
Scm$950.prototype[util$940.camelize('store')] = function (value$964) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'store',
        Store$944,
        value$964
    ]);
};
Scm$950.prototype[util$940.camelize('svn')] = function (value$965) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'svn',
        Svn$945,
        value$965
    ]);
};
Scm$950.prototype[util$940.camelize('tfs')] = function (value$966) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'tfs',
        Tfs$946,
        value$966
    ]);
};
Scm$950.prototype[util$940.camelize('workspace')] = function (value$967) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'workspace',
        Workspace$947,
        value$967
    ]);
};
Scm$950.prototype[util$940.camelize('openshift-img-streams')] = function (value$968) {
    return util$940.keyedObjectElementAccessor.apply(this, [
        'openshift-img-streams',
        OpenShiftImgStreams$948,
        value$968
    ]);
};