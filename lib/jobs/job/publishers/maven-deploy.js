'use strict';
var util$915 = require('../../../misc/util.js');
var MavenDeploy$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
MavenDeploy$917.prototype.up = function () {
    return this.upper;
};
MavenDeploy$917.prototype.and = MavenDeploy$917.prototype.up;
module.exports = MavenDeploy$917;
MavenDeploy$917.prototype[util$915.camelize('id')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'id',
        value$925
    ]);
};
MavenDeploy$917.prototype[util$915.camelize('url')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'url',
        value$926
    ]);
};
MavenDeploy$917.prototype[util$915.camelize('unique-version')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'unique-version',
        value$927
    ]);
};
MavenDeploy$917.prototype[util$915.camelize('deploy-unstable')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'deploy-unstable',
        value$928
    ]);
};
MavenDeploy$917.prototype[util$915.camelize('release-env-var')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'release-env-var',
        value$929
    ]);
};