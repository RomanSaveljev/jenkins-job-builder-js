'use strict';
var util$890 = require('../../../misc/util.js');
var FingerPrint$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
FingerPrint$892.prototype.up = function () {
    return this.upper;
};
FingerPrint$892.prototype.and = FingerPrint$892.prototype.up;
module.exports = FingerPrint$892;
FingerPrint$892.prototype[util$890.camelize('files')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'files',
        value$897
    ]);
};
FingerPrint$892.prototype[util$890.camelize('record-artifacts')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'record-artifacts',
        value$898
    ]);
};