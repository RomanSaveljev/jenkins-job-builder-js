'use strict';
var util$890 = require('../../../misc/util.js');
var WorkspaceCleanup$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
WorkspaceCleanup$892.prototype.up = function () {
    return this.upper;
};
WorkspaceCleanup$892.prototype.and = WorkspaceCleanup$892.prototype.up;
module.exports = WorkspaceCleanup$892;
WorkspaceCleanup$892.prototype[util$890.camelize('include')] = function (value$898) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'include',
        value$898
    ]);
};
WorkspaceCleanup$892.prototype[util$890.camelize('exclude')] = function (value$899) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'exclude',
        value$899
    ]);
};
WorkspaceCleanup$892.prototype[util$890.camelize('dirmatch')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'dirmatch',
        value$900
    ]);
};