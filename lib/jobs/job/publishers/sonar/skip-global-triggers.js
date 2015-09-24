'use strict';
var util$915 = require('../../../../misc/util.js');
var SkipGlobalTriggers$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
SkipGlobalTriggers$917.prototype.up = function () {
    return this.upper;
};
SkipGlobalTriggers$917.prototype.and = SkipGlobalTriggers$917.prototype.up;
module.exports = SkipGlobalTriggers$917;
SkipGlobalTriggers$917.prototype[util$915.camelize('skip-when-scm-change')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'skip-when-scm-change',
        value$923
    ]);
};
SkipGlobalTriggers$917.prototype[util$915.camelize('skip-when-upstream-build')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'skip-when-upstream-build',
        value$924
    ]);
};
SkipGlobalTriggers$917.prototype[util$915.camelize('skip-when-envvar-defined')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'skip-when-envvar-defined',
        value$925
    ]);
};