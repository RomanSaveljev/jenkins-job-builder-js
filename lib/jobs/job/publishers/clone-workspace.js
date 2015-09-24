'use strict';
var util$915 = require('../../../misc/util.js');
var CloneWorkspace$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
CloneWorkspace$917.prototype.up = function () {
    return this.upper;
};
CloneWorkspace$917.prototype.and = CloneWorkspace$917.prototype.up;
module.exports = CloneWorkspace$917;
CloneWorkspace$917.prototype[util$915.camelize('workspace-glob')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'workspace-glob',
        value$925
    ]);
};
CloneWorkspace$917.prototype[util$915.camelize('workspace-exclude-glob')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'workspace-exclude-glob',
        value$926
    ]);
};
CloneWorkspace$917.prototype[util$915.camelize('criteria')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'criteria',
        value$927
    ]);
};
CloneWorkspace$917.prototype[util$915.camelize('archive-method')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'archive-method',
        value$928
    ]);
};
CloneWorkspace$917.prototype[util$915.camelize('override-default-excludes')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'override-default-excludes',
        value$929
    ]);
};