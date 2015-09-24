'use strict';
var util$915 = require('../../../misc/util.js');
var Targets$916 = require('./jacoco/targets.js');
var Jacoco$918 = function (upper$926, obj$927) {
    this.upper = upper$926;
    this.obj = obj$927;
};
Jacoco$918.prototype.up = function () {
    return this.upper;
};
Jacoco$918.prototype.and = Jacoco$918.prototype.up;
module.exports = Jacoco$918;
Jacoco$918.prototype[util$915.camelize('exec-pattern')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'exec-pattern',
        value$928
    ]);
};
Jacoco$918.prototype[util$915.camelize('class-pattern')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'class-pattern',
        value$929
    ]);
};
Jacoco$918.prototype[util$915.camelize('source-pattern')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'source-pattern',
        value$930
    ]);
};
Jacoco$918.prototype[util$915.camelize('update-build-status')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'update-build-status',
        value$931
    ]);
};
Jacoco$918.prototype[util$915.camelize('inclusion-pattern')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'inclusion-pattern',
        value$932
    ]);
};
Jacoco$918.prototype[util$915.camelize('exclusion-pattern')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'exclusion-pattern',
        value$933
    ]);
};
Jacoco$918.prototype[util$915.camelize('targets')] = function (value$934) {
    return util$915.customArrayAccessor.apply(this, [
        'targets',
        Targets$916,
        value$934
    ]);
};