'use strict';
var util$915 = require('../../../misc/util.js');
var WorkspaceCleanup$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
WorkspaceCleanup$917.prototype.up = function () {
    return this.upper;
};
WorkspaceCleanup$917.prototype.and = WorkspaceCleanup$917.prototype.up;
module.exports = WorkspaceCleanup$917;
WorkspaceCleanup$917.prototype[util$915.camelize('include')] = function (value$923) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'include',
        value$923
    ]);
};
WorkspaceCleanup$917.prototype[util$915.camelize('exclude')] = function (value$924) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'exclude',
        value$924
    ]);
};
WorkspaceCleanup$917.prototype[util$915.camelize('dirmatch')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'dirmatch',
        value$925
    ]);
};