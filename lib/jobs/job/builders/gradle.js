'use strict';
var util$915 = require('../../../misc/util.js');
var Gradle$917 = function (upper$925, obj$926) {
    this.upper = upper$925;
    this.obj = obj$926;
};
Gradle$917.prototype.up = function () {
    return this.upper;
};
Gradle$917.prototype.and = Gradle$917.prototype.up;
module.exports = Gradle$917;
Gradle$917.prototype[util$915.camelize('tasks')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'tasks',
        value$927
    ]);
};
Gradle$917.prototype[util$915.camelize('gradle-name')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'gradle-name',
        value$928
    ]);
};
Gradle$917.prototype[util$915.camelize('wrapper')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'wrapper',
        value$929
    ]);
};
Gradle$917.prototype[util$915.camelize('executable')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'executable',
        value$930
    ]);
};
Gradle$917.prototype[util$915.camelize('switches')] = function (value$931) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'switches',
        value$931
    ]);
};
Gradle$917.prototype[util$915.camelize('use-root-dir')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'use-root-dir',
        value$932
    ]);
};
Gradle$917.prototype[util$915.camelize('root-build-script-dir')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'root-build-script-dir',
        value$933
    ]);
};