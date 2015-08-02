'use strict';
var util$890 = require('../../../misc/util.js');
var Entry$891 = require('./artifact-deployer/entry.js');
var ArtifactDeployer$893 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
ArtifactDeployer$893.prototype.up = function () {
    return this.upper;
};
ArtifactDeployer$893.prototype.and = ArtifactDeployer$893.prototype.up;
module.exports = ArtifactDeployer$893;
ArtifactDeployer$893.prototype[util$890.camelize('entries')] = function (value$898) {
    return util$890.objectArrayAccessor.apply(this, [
        'entries',
        Entry$891,
        value$898
    ]);
};
ArtifactDeployer$893.prototype[util$890.camelize('deploy-if-fail')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'deploy-if-fail',
        value$899
    ]);
};