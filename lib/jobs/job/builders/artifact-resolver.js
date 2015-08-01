'use strict';
var util$715 = require('../../../misc/util.js');
var Artifact$716 = require('./artifact-resolver/artifact.js');
var ArtifactResolver$718 = function (upper$723, obj$724) {
    this.upper = upper$723;
    this.obj = obj$724;
};
ArtifactResolver$718.prototype.up = function () {
    return this.upper;
};
ArtifactResolver$718.prototype.and = ArtifactResolver$718.prototype.up;
module.exports = ArtifactResolver$718;
ArtifactResolver$718.prototype[util$715.camelize('fail-on-error')] = function (value$725) {
    return util$715.primitiveAccessor.apply(this, [
        'fail-on-error',
        value$725
    ]);
};
ArtifactResolver$718.prototype[util$715.camelize('repository-logging')] = function (value$726) {
    return util$715.primitiveAccessor.apply(this, [
        'repository-logging',
        value$726
    ]);
};
ArtifactResolver$718.prototype[util$715.camelize('target-directory')] = function (value$727) {
    return util$715.primitiveAccessor.apply(this, [
        'target-directory',
        value$727
    ]);
};
ArtifactResolver$718.prototype[util$715.camelize('artifacts')] = function (value$728) {
    return util$715.objectArrayAccessor.apply(this, [
        'artifacts',
        Artifact$716,
        value$728
    ]);
};