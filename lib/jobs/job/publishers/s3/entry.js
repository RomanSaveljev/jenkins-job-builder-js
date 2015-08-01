'use strict';
var util$890 = require('../../../../misc/util.js');
var Entry$892 = function (upper$900, obj$901) {
    this.upper = upper$900;
    this.obj = obj$901;
};
Entry$892.prototype.up = function () {
    return this.upper;
};
Entry$892.prototype.and = Entry$892.prototype.up;
module.exports = Entry$892;
Entry$892.prototype[util$890.camelize('destination-bucket')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'destination-bucket',
        value$902
    ]);
};
Entry$892.prototype[util$890.camelize('source-files')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'source-files',
        value$903
    ]);
};
Entry$892.prototype[util$890.camelize('storage-class')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'storage-class',
        value$904
    ]);
};
Entry$892.prototype[util$890.camelize('bucket-region')] = function (value$905) {
    return util$890.primitiveAccessor.apply(this, [
        'bucket-region',
        value$905
    ]);
};
Entry$892.prototype[util$890.camelize('upload-on-failure')] = function (value$906) {
    return util$890.primitiveAccessor.apply(this, [
        'upload-on-failure',
        value$906
    ]);
};
Entry$892.prototype[util$890.camelize('upload-from-slave')] = function (value$907) {
    return util$890.primitiveAccessor.apply(this, [
        'upload-from-slave',
        value$907
    ]);
};
Entry$892.prototype[util$890.camelize('managed-artifacts')] = function (value$908) {
    return util$890.primitiveAccessor.apply(this, [
        'managed-artifacts',
        value$908
    ]);
};