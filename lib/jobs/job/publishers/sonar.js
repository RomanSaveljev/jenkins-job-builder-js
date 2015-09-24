'use strict';
var util$915 = require('../../../misc/util.js');
var SkipGlobalTriggers$916 = require('./sonar/skip-global-triggers.js');
var Sonar$918 = function (upper$925, obj$926) {
    this.upper = upper$925;
    this.obj = obj$926;
};
Sonar$918.prototype.up = function () {
    return this.upper;
};
Sonar$918.prototype.and = Sonar$918.prototype.up;
module.exports = Sonar$918;
Sonar$918.prototype[util$915.camelize('jdk')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'jdk',
        value$927
    ]);
};
Sonar$918.prototype[util$915.camelize('branch')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'branch',
        value$928
    ]);
};
Sonar$918.prototype[util$915.camelize('language')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'language',
        value$929
    ]);
};
Sonar$918.prototype[util$915.camelize('maven-opts')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'maven-opts',
        value$930
    ]);
};
Sonar$918.prototype[util$915.camelize('additional-properties')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'additional-properties',
        value$931
    ]);
};
Sonar$918.prototype[util$915.camelize('skip-global-triggers')] = function (value$932) {
    return util$915.objectAccessor.apply(this, [
        'skip-global-triggers',
        SkipGlobalTriggers$916,
        value$932
    ]);
};