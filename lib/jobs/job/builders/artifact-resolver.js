'use strict';
var util$915 = require('../../../misc/util.js');
var Artifact$916 = require('./artifact-resolver/artifact.js');
var ArtifactResolver$918 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
ArtifactResolver$918.prototype.up = function () {
    return this.upper;
};
ArtifactResolver$918.prototype.and = ArtifactResolver$918.prototype.up;
module.exports = ArtifactResolver$918;
ArtifactResolver$918.prototype[util$915.camelize('fail-on-error')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'fail-on-error',
        value$925
    ]);
};
ArtifactResolver$918.prototype[util$915.camelize('repository-logging')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'repository-logging',
        value$926
    ]);
};
ArtifactResolver$918.prototype[util$915.camelize('target-directory')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'target-directory',
        value$927
    ]);
};
ArtifactResolver$918.prototype[util$915.camelize('artifacts')] = function (value$928) {
    return util$915.objectArrayAccessor.apply(this, [
        'artifacts',
        Artifact$916,
        value$928
    ]);
};