'use strict';
var util$915 = require('../../../../misc/util.js');
var Artifact$917 = function (upper$924, obj$925) {
    this.upper = upper$924;
    this.obj = obj$925;
};
Artifact$917.prototype.up = function () {
    return this.upper;
};
Artifact$917.prototype.and = Artifact$917.prototype.up;
module.exports = Artifact$917;
Artifact$917.prototype[util$915.camelize('group-id')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'group-id',
        value$926
    ]);
};
Artifact$917.prototype[util$915.camelize('artifact-id')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'artifact-id',
        value$927
    ]);
};
Artifact$917.prototype[util$915.camelize('version')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'version',
        value$928
    ]);
};
Artifact$917.prototype[util$915.camelize('classifier')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'classifier',
        value$929
    ]);
};
Artifact$917.prototype[util$915.camelize('extension')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'extension',
        value$930
    ]);
};
Artifact$917.prototype[util$915.camelize('target-file-name')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'target-file-name',
        value$931
    ]);
};