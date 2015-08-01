'use strict';
var util$890 = require('../../../misc/util.js');
var MavenTarget$892 = function (upper$901, obj$902) {
    this.upper = upper$901;
    this.obj = obj$902;
};
MavenTarget$892.prototype.up = function () {
    return this.upper;
};
MavenTarget$892.prototype.and = MavenTarget$892.prototype.up;
module.exports = MavenTarget$892;
MavenTarget$892.prototype[util$890.camelize('goals')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'goals',
        value$903
    ]);
};
MavenTarget$892.prototype[util$890.camelize('properties')] = function (value$904) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'properties',
        value$904
    ]);
};
MavenTarget$892.prototype[util$890.camelize('pom')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'pom',
        value$905
    ]);
};
MavenTarget$892.prototype[util$890.camelize('private-repository')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'private-repository',
        value$906
    ]);
};
MavenTarget$892.prototype[util$890.camelize('maven-version')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'maven-version',
        value$907
    ]);
};
MavenTarget$892.prototype[util$890.camelize('java-opts')] = function (value$908) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'java-opts',
        value$908
    ]);
};
MavenTarget$892.prototype[util$890.camelize('settings')] = function (value$909) {
    return util$890.primitiveAccessor.apply(this, [
        'settings',
        value$909
    ]);
};
MavenTarget$892.prototype[util$890.camelize('global-settings')] = function (value$910) {
    return util$890.primitiveAccessor.apply(this, [
        'global-settings',
        value$910
    ]);
};