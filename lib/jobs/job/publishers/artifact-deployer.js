'use strict';
var util$915 = require('../../../misc/util.js');
var Entry$916 = require('./artifact-deployer/entry.js');
var ArtifactDeployer$918 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
ArtifactDeployer$918.prototype.up = function () {
    return this.upper;
};
ArtifactDeployer$918.prototype.and = ArtifactDeployer$918.prototype.up;
module.exports = ArtifactDeployer$918;
ArtifactDeployer$918.prototype[util$915.camelize('entries')] = function (value$923) {
    return util$915.objectArrayAccessor.apply(this, [
        'entries',
        Entry$916,
        value$923
    ]);
};
ArtifactDeployer$918.prototype[util$915.camelize('deploy-if-fail')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'deploy-if-fail',
        value$924
    ]);
};