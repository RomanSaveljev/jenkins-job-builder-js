'use strict';
var util$915 = require('../../../misc/util.js');
var MavenTarget$917 = function (upper$926, obj$927) {
    this.upper = upper$926;
    this.obj = obj$927;
};
MavenTarget$917.prototype.up = function () {
    return this.upper;
};
MavenTarget$917.prototype.and = MavenTarget$917.prototype.up;
module.exports = MavenTarget$917;
MavenTarget$917.prototype[util$915.camelize('goals')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'goals',
        value$928
    ]);
};
MavenTarget$917.prototype[util$915.camelize('properties')] = function (value$929) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'properties',
        value$929
    ]);
};
MavenTarget$917.prototype[util$915.camelize('pom')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'pom',
        value$930
    ]);
};
MavenTarget$917.prototype[util$915.camelize('private-repository')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'private-repository',
        value$931
    ]);
};
MavenTarget$917.prototype[util$915.camelize('maven-version')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'maven-version',
        value$932
    ]);
};
MavenTarget$917.prototype[util$915.camelize('java-opts')] = function (value$933) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'java-opts',
        value$933
    ]);
};
MavenTarget$917.prototype[util$915.camelize('settings')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'settings',
        value$934
    ]);
};
MavenTarget$917.prototype[util$915.camelize('global-settings')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'global-settings',
        value$935
    ]);
};