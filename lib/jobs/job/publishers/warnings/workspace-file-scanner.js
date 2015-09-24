'use strict';
var util$915 = require('../../../../misc/util.js');
var WorkspaceFileScanner$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
WorkspaceFileScanner$917.prototype.up = function () {
    return this.upper;
};
WorkspaceFileScanner$917.prototype.and = WorkspaceFileScanner$917.prototype.up;
module.exports = WorkspaceFileScanner$917;
WorkspaceFileScanner$917.prototype[util$915.camelize('file-pattern')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'file-pattern',
        value$922
    ]);
};
WorkspaceFileScanner$917.prototype[util$915.camelize('scanner')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'scanner',
        value$923
    ]);
};