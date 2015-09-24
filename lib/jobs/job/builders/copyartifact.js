'use strict';
var util$915 = require('../../../misc/util.js');
var CopyArtifact$917 = function (upper$930, obj$931) {
    this.upper = upper$930;
    this.obj = obj$931;
};
CopyArtifact$917.prototype.up = function () {
    return this.upper;
};
CopyArtifact$917.prototype.and = CopyArtifact$917.prototype.up;
module.exports = CopyArtifact$917;
CopyArtifact$917.prototype[util$915.camelize('project')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'project',
        value$932
    ]);
};
CopyArtifact$917.prototype[util$915.camelize('filter')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'filter',
        value$933
    ]);
};
CopyArtifact$917.prototype[util$915.camelize('target')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'target',
        value$934
    ]);
};
CopyArtifact$917.prototype[util$915.camelize('flatten')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'flatten',
        value$935
    ]);
};
CopyArtifact$917.prototype[util$915.camelize('optional')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'optional',
        value$936
    ]);
};
CopyArtifact$917.prototype[util$915.camelize('which-build')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'which-build',
        value$937
    ]);
};
CopyArtifact$917.prototype[util$915.camelize('build-number')] = function (value$938) {
    return util$915.primitiveAccessor.apply(this, [
        'build-number',
        value$938
    ]);
};
CopyArtifact$917.prototype[util$915.camelize('permalink')] = function (value$939) {
    return util$915.primitiveAccessor.apply(this, [
        'permalink',
        value$939
    ]);
};
CopyArtifact$917.prototype[util$915.camelize('stable')] = function (value$940) {
    return util$915.primitiveAccessor.apply(this, [
        'stable',
        value$940
    ]);
};
CopyArtifact$917.prototype[util$915.camelize('fallback-to-last-successful')] = function (value$941) {
    return util$915.primitiveAccessor.apply(this, [
        'fallback-to-last-successful',
        value$941
    ]);
};
CopyArtifact$917.prototype[util$915.camelize('param')] = function (value$942) {
    return util$915.primitiveAccessor.apply(this, [
        'param',
        value$942
    ]);
};
CopyArtifact$917.prototype[util$915.camelize('parameter-filters')] = function (value$943) {
    return util$915.primitiveAccessor.apply(this, [
        'parameter-filters',
        value$943
    ]);
};