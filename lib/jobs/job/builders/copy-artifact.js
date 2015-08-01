'use strict';
var util$890 = require('../../../misc/util.js');
var CopyArtifact$892 = function (upper$905, obj$906) {
    this.upper = upper$905;
    this.obj = obj$906;
};
CopyArtifact$892.prototype.up = function () {
    return this.upper;
};
CopyArtifact$892.prototype.and = CopyArtifact$892.prototype.up;
module.exports = CopyArtifact$892;
CopyArtifact$892.prototype[util$890.camelize('project')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'project',
        value$907
    ]);
};
CopyArtifact$892.prototype[util$890.camelize('filter')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'filter',
        value$908
    ]);
};
CopyArtifact$892.prototype[util$890.camelize('target')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'target',
        value$909
    ]);
};
CopyArtifact$892.prototype[util$890.camelize('flatten')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'flatten',
        value$910
    ]);
};
CopyArtifact$892.prototype[util$890.camelize('optional')] = function (value$911) {
    return util$890.primitiveAccessor.apply(this, [
        'optional',
        value$911
    ]);
};
CopyArtifact$892.prototype[util$890.camelize('which-build')] = function (value$912) {
    return util$890.primitiveAccessor.apply(this, [
        'which-build',
        value$912
    ]);
};
CopyArtifact$892.prototype[util$890.camelize('build-number')] = function (value$913) {
    return util$890.primitiveAccessor.apply(this, [
        'build-number',
        value$913
    ]);
};
CopyArtifact$892.prototype[util$890.camelize('permalink')] = function (value$914) {
    return util$890.primitiveAccessor.apply(this, [
        'permalink',
        value$914
    ]);
};
CopyArtifact$892.prototype[util$890.camelize('stable')] = function (value$915) {
    return util$890.primitiveAccessor.apply(this, [
        'stable',
        value$915
    ]);
};
CopyArtifact$892.prototype[util$890.camelize('fallback-to-last-successful')] = function (value$916) {
    return util$890.primitiveAccessor.apply(this, [
        'fallback-to-last-successful',
        value$916
    ]);
};
CopyArtifact$892.prototype[util$890.camelize('param')] = function (value$917) {
    return util$890.primitiveAccessor.apply(this, [
        'param',
        value$917
    ]);
};
CopyArtifact$892.prototype[util$890.camelize('parameter-filters')] = function (value$918) {
    return util$890.primitiveAccessor.apply(this, [
        'parameter-filters',
        value$918
    ]);
};