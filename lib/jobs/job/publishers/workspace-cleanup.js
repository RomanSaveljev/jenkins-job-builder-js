'use strict';
var util$890 = require('../../../misc/util.js');
var CleanIf$891 = require('./workspace-cleanup/clean-if.js');
var WorkspaceCleanup$893 = function (upper$900, obj$901) {
    this.upper = upper$900;
    this.obj = obj$901;
};
WorkspaceCleanup$893.prototype.up = function () {
    return this.upper;
};
WorkspaceCleanup$893.prototype.and = WorkspaceCleanup$893.prototype.up;
module.exports = WorkspaceCleanup$893;
WorkspaceCleanup$893.prototype[util$890.camelize('include')] = function (value$902) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'include',
        value$902
    ]);
};
WorkspaceCleanup$893.prototype[util$890.camelize('exclude')] = function (value$903) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'exclude',
        value$903
    ]);
};
WorkspaceCleanup$893.prototype[util$890.camelize('dirmatch')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'dirmatch',
        value$904
    ]);
};
WorkspaceCleanup$893.prototype[util$890.camelize('clean-if')] = function (value$905) {
    return util$890.objectArrayAccessor.apply(this, [
        'clean-if',
        CleanIf$891,
        value$905
    ]);
};
WorkspaceCleanup$893.prototype[util$890.camelize('fail-build')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'fail-build',
        value$906
    ]);
};
WorkspaceCleanup$893.prototype[util$890.camelize('clean-parent')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'clean-parent',
        value$907
    ]);
};