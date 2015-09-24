'use strict';
var util$915 = require('../../../misc/util.js');
var Touchstone$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
Touchstone$917.prototype.up = function () {
    return this.upper;
};
Touchstone$917.prototype.and = Touchstone$917.prototype.up;
module.exports = Touchstone$917;
Touchstone$917.prototype[util$915.camelize('expr')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'expr',
        value$922
    ]);
};
Touchstone$917.prototype[util$915.camelize('result')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'result',
        value$923
    ]);
};