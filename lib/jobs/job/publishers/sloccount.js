'use strict';
var util$915 = require('../../../misc/util.js');
var SlocCount$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
SlocCount$917.prototype.up = function () {
    return this.upper;
};
SlocCount$917.prototype.and = SlocCount$917.prototype.up;
module.exports = SlocCount$917;
SlocCount$917.prototype[util$915.camelize('report-files')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'report-files',
        value$922
    ]);
};
SlocCount$917.prototype[util$915.camelize('charset')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'charset',
        value$923
    ]);
};