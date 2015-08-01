'use strict';
var util$890 = require('../../../misc/util.js');
var SkipGlobalTriggers$891 = require('./sonar/skip-global-triggers.js');
var Sonar$893 = function (upper$900, obj$901) {
    this.upper = upper$900;
    this.obj = obj$901;
};
Sonar$893.prototype.up = function () {
    return this.upper;
};
Sonar$893.prototype.and = Sonar$893.prototype.up;
module.exports = Sonar$893;
Sonar$893.prototype[util$890.camelize('jdk')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'jdk',
        value$902
    ]);
};
Sonar$893.prototype[util$890.camelize('branch')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'branch',
        value$903
    ]);
};
Sonar$893.prototype[util$890.camelize('language')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'language',
        value$904
    ]);
};
Sonar$893.prototype[util$890.camelize('maven-opts')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'maven-opts',
        value$905
    ]);
};
Sonar$893.prototype[util$890.camelize('additional-properties')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'additional-properties',
        value$906
    ]);
};
Sonar$893.prototype[util$890.camelize('skip-global-triggers')] = function (value$907) {
    return util$890.objectAccessor.apply(this, [
        'skip-global-triggers',
        SkipGlobalTriggers$891,
        value$907
    ]);
};