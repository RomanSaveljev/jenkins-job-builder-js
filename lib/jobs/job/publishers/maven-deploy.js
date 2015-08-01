'use strict';
var util$890 = require('../../../misc/util.js');
var MavenDeploy$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
MavenDeploy$892.prototype.up = function () {
    return this.upper;
};
MavenDeploy$892.prototype.and = MavenDeploy$892.prototype.up;
module.exports = MavenDeploy$892;
MavenDeploy$892.prototype[util$890.camelize('id')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'id',
        value$900
    ]);
};
MavenDeploy$892.prototype[util$890.camelize('url')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'url',
        value$901
    ]);
};
MavenDeploy$892.prototype[util$890.camelize('unique-version')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'unique-version',
        value$902
    ]);
};
MavenDeploy$892.prototype[util$890.camelize('deploy-unstable')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'deploy-unstable',
        value$903
    ]);
};
MavenDeploy$892.prototype[util$890.camelize('release-env-var')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'release-env-var',
        value$904
    ]);
};