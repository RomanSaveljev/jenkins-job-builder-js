'use strict';
var util$915 = require('../../../misc/util.js');
var CleanIf$916 = require('./workspace-cleanup/clean-if.js');
var WorkspaceCleanup$918 = function (upper$925, obj$926) {
    this.upper = upper$925;
    this.obj = obj$926;
};
WorkspaceCleanup$918.prototype.up = function () {
    return this.upper;
};
WorkspaceCleanup$918.prototype.and = WorkspaceCleanup$918.prototype.up;
module.exports = WorkspaceCleanup$918;
WorkspaceCleanup$918.prototype[util$915.camelize('include')] = function (value$927) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'include',
        value$927
    ]);
};
WorkspaceCleanup$918.prototype[util$915.camelize('exclude')] = function (value$928) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'exclude',
        value$928
    ]);
};
WorkspaceCleanup$918.prototype[util$915.camelize('dirmatch')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'dirmatch',
        value$929
    ]);
};
WorkspaceCleanup$918.prototype[util$915.camelize('clean-if')] = function (value$930) {
    return util$915.objectArrayAccessor.apply(this, [
        'clean-if',
        CleanIf$916,
        value$930
    ]);
};
WorkspaceCleanup$918.prototype[util$915.camelize('fail-build')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'fail-build',
        value$931
    ]);
};
WorkspaceCleanup$918.prototype[util$915.camelize('clean-parent')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'clean-parent',
        value$932
    ]);
};