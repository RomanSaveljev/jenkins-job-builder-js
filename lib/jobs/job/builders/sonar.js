'use strict';
var util$915 = require('../../../misc/util.js');
var Sonar$917 = function (upper$924, obj$925) {
    this.upper = upper$924;
    this.obj = obj$925;
};
Sonar$917.prototype.up = function () {
    return this.upper;
};
Sonar$917.prototype.and = Sonar$917.prototype.up;
module.exports = Sonar$917;
Sonar$917.prototype[util$915.camelize('sonar-name')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'sonar-name',
        value$926
    ]);
};
Sonar$917.prototype[util$915.camelize('task')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'task',
        value$927
    ]);
};
Sonar$917.prototype[util$915.camelize('project')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'project',
        value$928
    ]);
};
Sonar$917.prototype[util$915.camelize('properties')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'properties',
        value$929
    ]);
};
Sonar$917.prototype[util$915.camelize('java-opts')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'java-opts',
        value$930
    ]);
};
Sonar$917.prototype[util$915.camelize('jdk')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'jdk',
        value$931
    ]);
};