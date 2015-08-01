'use strict';
var util$890 = require('../../../misc/util.js');
var Artifact$891 = require('./artifact-resolver/artifact.js');
var ArtifactResolver$893 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
ArtifactResolver$893.prototype.up = function () {
    return this.upper;
};
ArtifactResolver$893.prototype.and = ArtifactResolver$893.prototype.up;
module.exports = ArtifactResolver$893;
ArtifactResolver$893.prototype[util$890.camelize('fail-on-error')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'fail-on-error',
        value$900
    ]);
};
ArtifactResolver$893.prototype[util$890.camelize('repository-logging')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'repository-logging',
        value$901
    ]);
};
ArtifactResolver$893.prototype[util$890.camelize('target-directory')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'target-directory',
        value$902
    ]);
};
ArtifactResolver$893.prototype[util$890.camelize('artifacts')] = function (value$903) {
    return util$890.objectArrayAccessor.apply(this, [
        'artifacts',
        Artifact$891,
        value$903
    ]);
};