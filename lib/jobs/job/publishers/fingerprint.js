'use strict';
var util$915 = require('../../../misc/util.js');
var FingerPrint$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
FingerPrint$917.prototype.up = function () {
    return this.upper;
};
FingerPrint$917.prototype.and = FingerPrint$917.prototype.up;
module.exports = FingerPrint$917;
FingerPrint$917.prototype[util$915.camelize('files')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'files',
        value$922
    ]);
};
FingerPrint$917.prototype[util$915.camelize('record-artifacts')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'record-artifacts',
        value$923
    ]);
};