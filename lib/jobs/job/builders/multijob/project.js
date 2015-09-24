'use strict';
var util$915 = require('../../../../misc/util.js');
var Project$917 = function (upper$927, obj$928) {
    this.upper = upper$927;
    this.obj = obj$928;
};
Project$917.prototype.up = function () {
    return this.upper;
};
Project$917.prototype.and = Project$917.prototype.up;
module.exports = Project$917;
Project$917.prototype[util$915.camelize('name')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$929
    ]);
};
Project$917.prototype[util$915.camelize('current-parameters')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'current-parameters',
        value$930
    ]);
};
Project$917.prototype[util$915.camelize('node-label-name')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'node-label-name',
        value$931
    ]);
};
Project$917.prototype[util$915.camelize('node-label')] = function (value$932) {
    return util$915.primitiveAccessor.apply(this, [
        'node-label',
        value$932
    ]);
};
Project$917.prototype[util$915.camelize('git-revision')] = function (value$933) {
    return util$915.primitiveAccessor.apply(this, [
        'git-revision',
        value$933
    ]);
};
Project$917.prototype[util$915.camelize('property-file')] = function (value$934) {
    return util$915.primitiveAccessor.apply(this, [
        'property-file',
        value$934
    ]);
};
Project$917.prototype[util$915.camelize('predefined-parameters')] = function (value$935) {
    return util$915.primitiveAccessor.apply(this, [
        'predefined-parameters',
        value$935
    ]);
};
Project$917.prototype[util$915.camelize('enable-condition')] = function (value$936) {
    return util$915.primitiveAccessor.apply(this, [
        'enable-condition',
        value$936
    ]);
};
Project$917.prototype[util$915.camelize('kill-phase-on')] = function (value$937) {
    return util$915.primitiveAccessor.apply(this, [
        'kill-phase-on',
        value$937
    ]);
};