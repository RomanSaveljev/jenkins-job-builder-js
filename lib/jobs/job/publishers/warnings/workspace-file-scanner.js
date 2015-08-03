'use strict';
var util$890 = require('../../../../misc/util.js');
var WorkspaceFileScanner$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
WorkspaceFileScanner$892.prototype.up = function () {
    return this.upper;
};
WorkspaceFileScanner$892.prototype.and = WorkspaceFileScanner$892.prototype.up;
module.exports = WorkspaceFileScanner$892;
WorkspaceFileScanner$892.prototype[util$890.camelize('file-pattern')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'file-pattern',
        value$897
    ]);
};
WorkspaceFileScanner$892.prototype[util$890.camelize('scanner')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'scanner',
        value$898
    ]);
};