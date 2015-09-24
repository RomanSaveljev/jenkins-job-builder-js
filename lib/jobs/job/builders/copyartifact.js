'use strict';
var util$940 = require('../../../misc/util.js');
var CopyArtifact$942 = function (upper$955, obj$956) {
    this.upper = upper$955;
    this.obj = obj$956;
};
CopyArtifact$942.prototype.up = function () {
    return this.upper;
};
CopyArtifact$942.prototype.and = CopyArtifact$942.prototype.up;
module.exports = CopyArtifact$942;
CopyArtifact$942.prototype[util$940.camelize('project')] = function (value$957) {
    return util$940.primitiveAccessor.apply(this, [
        'project',
        value$957
    ]);
};
CopyArtifact$942.prototype[util$940.camelize('filter')] = function (value$958) {
    return util$940.primitiveAccessor.apply(this, [
        'filter',
        value$958
    ]);
};
CopyArtifact$942.prototype[util$940.camelize('target')] = function (value$959) {
    return util$940.primitiveAccessor.apply(this, [
        'target',
        value$959
    ]);
};
CopyArtifact$942.prototype[util$940.camelize('flatten')] = function (value$960) {
    return util$940.primitiveAccessor.apply(this, [
        'flatten',
        value$960
    ]);
};
CopyArtifact$942.prototype[util$940.camelize('optional')] = function (value$961) {
    return util$940.primitiveAccessor.apply(this, [
        'optional',
        value$961
    ]);
};
CopyArtifact$942.prototype[util$940.camelize('which-build')] = function (value$962) {
    return util$940.primitiveAccessor.apply(this, [
        'which-build',
        value$962
    ]);
};
CopyArtifact$942.prototype[util$940.camelize('build-number')] = function (value$963) {
    return util$940.primitiveAccessor.apply(this, [
        'build-number',
        value$963
    ]);
};
CopyArtifact$942.prototype[util$940.camelize('permalink')] = function (value$964) {
    return util$940.primitiveAccessor.apply(this, [
        'permalink',
        value$964
    ]);
};
CopyArtifact$942.prototype[util$940.camelize('stable')] = function (value$965) {
    return util$940.primitiveAccessor.apply(this, [
        'stable',
        value$965
    ]);
};
CopyArtifact$942.prototype[util$940.camelize('fallback-to-last-successful')] = function (value$966) {
    return util$940.primitiveAccessor.apply(this, [
        'fallback-to-last-successful',
        value$966
    ]);
};
CopyArtifact$942.prototype[util$940.camelize('param')] = function (value$967) {
    return util$940.primitiveAccessor.apply(this, [
        'param',
        value$967
    ]);
};
CopyArtifact$942.prototype[util$940.camelize('parameter-filters')] = function (value$968) {
    return util$940.primitiveAccessor.apply(this, [
        'parameter-filters',
        value$968
    ]);
};