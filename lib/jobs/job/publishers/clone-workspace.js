'use strict';
var util$890 = require('../../../misc/util.js');
var CloneWorkspace$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
CloneWorkspace$892.prototype.up = function () {
    return this.upper;
};
CloneWorkspace$892.prototype.and = CloneWorkspace$892.prototype.up;
module.exports = CloneWorkspace$892;
CloneWorkspace$892.prototype[util$890.camelize('workspace-glob')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'workspace-glob',
        value$900
    ]);
};
CloneWorkspace$892.prototype[util$890.camelize('workspace-exclude-glob')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'workspace-exclude-glob',
        value$901
    ]);
};
CloneWorkspace$892.prototype[util$890.camelize('criteria')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'criteria',
        value$902
    ]);
};
CloneWorkspace$892.prototype[util$890.camelize('archive-method')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'archive-method',
        value$903
    ]);
};
CloneWorkspace$892.prototype[util$890.camelize('override-default-excludes')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'override-default-excludes',
        value$904
    ]);
};