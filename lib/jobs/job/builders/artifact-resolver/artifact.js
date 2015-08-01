'use strict';
var util$890 = require('../../../../misc/util.js');
var Artifact$892 = function (upper$899, obj$900) {
    this.upper = upper$899;
    this.obj = obj$900;
};
Artifact$892.prototype.up = function () {
    return this.upper;
};
Artifact$892.prototype.and = Artifact$892.prototype.up;
module.exports = Artifact$892;
Artifact$892.prototype[util$890.camelize('group-id')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'group-id',
        value$901
    ]);
};
Artifact$892.prototype[util$890.camelize('artifact-id')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'artifact-id',
        value$902
    ]);
};
Artifact$892.prototype[util$890.camelize('version')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'version',
        value$903
    ]);
};
Artifact$892.prototype[util$890.camelize('classifier')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'classifier',
        value$904
    ]);
};
Artifact$892.prototype[util$890.camelize('extension')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'extension',
        value$905
    ]);
};
Artifact$892.prototype[util$890.camelize('target-file-name')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'target-file-name',
        value$906
    ]);
};