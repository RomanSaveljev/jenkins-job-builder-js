'use strict';
var util$915 = require('../../../misc/util.js');
var MavenBuilder$917 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
MavenBuilder$917.prototype.up = function () {
    return this.upper;
};
MavenBuilder$917.prototype.and = MavenBuilder$917.prototype.up;
module.exports = MavenBuilder$917;
MavenBuilder$917.prototype[util$915.camelize('name')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$924
    ]);
};
MavenBuilder$917.prototype[util$915.camelize('pom')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'pom',
        value$925
    ]);
};
MavenBuilder$917.prototype[util$915.camelize('goals')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'goals',
        value$926
    ]);
};
MavenBuilder$917.prototype[util$915.camelize('maven-opts')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'maven-opts',
        value$927
    ]);
};