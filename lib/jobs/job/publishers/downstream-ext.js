'use strict';
var util$915 = require('../../../misc/util.js');
var DownstreamExt$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
DownstreamExt$917.prototype.up = function () {
    return this.upper;
};
DownstreamExt$917.prototype.and = DownstreamExt$917.prototype.up;
module.exports = DownstreamExt$917;
DownstreamExt$917.prototype[util$915.camelize('projects')] = function (value$925) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'projects',
        value$925
    ]);
};
DownstreamExt$917.prototype[util$915.camelize('comparison')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'comparison',
        value$926
    ]);
};
DownstreamExt$917.prototype[util$915.camelize('criteria')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'criteria',
        value$927
    ]);
};
DownstreamExt$917.prototype[util$915.camelize('only-on-scm-change')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'only-on-scm-change',
        value$928
    ]);
};
DownstreamExt$917.prototype[util$915.camelize('only-on-local-scm-change')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'only-on-local-scm-change',
        value$929
    ]);
};