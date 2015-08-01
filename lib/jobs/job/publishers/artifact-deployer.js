'use strict';
var util$890 = require('../../../misc/util.js');
var ArtifactDeployer$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
ArtifactDeployer$892.prototype.up = function () {
    return this.upper;
};
ArtifactDeployer$892.prototype.and = ArtifactDeployer$892.prototype.up;
module.exports = ArtifactDeployer$892;
ArtifactDeployer$892.prototype[util$890.camelize('entries')] = function (value$897) {
    return util$890.objectArrayAccessor.apply(this, [
        'entries',
        Entry,
        value$897
    ]);
};
ArtifactDeployer$892.prototype[util$890.camelize('deploy-if-fail')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'deploy-if-fail',
        value$898
    ]);
};