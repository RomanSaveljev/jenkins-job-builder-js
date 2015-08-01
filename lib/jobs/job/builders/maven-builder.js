'use strict';
var util$890 = require('../../../misc/util.js');
var MavenBuilder$892 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
MavenBuilder$892.prototype.up = function () {
    return this.upper;
};
MavenBuilder$892.prototype.and = MavenBuilder$892.prototype.up;
module.exports = MavenBuilder$892;
MavenBuilder$892.prototype[util$890.camelize('name')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$899
    ]);
};
MavenBuilder$892.prototype[util$890.camelize('pom')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'pom',
        value$900
    ]);
};
MavenBuilder$892.prototype[util$890.camelize('goals')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'goals',
        value$901
    ]);
};
MavenBuilder$892.prototype[util$890.camelize('maven-opts')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'maven-opts',
        value$902
    ]);
};