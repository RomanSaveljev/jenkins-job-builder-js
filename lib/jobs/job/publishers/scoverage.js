'use strict';
var util$915 = require('../../../misc/util.js');
var Scoverage$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
Scoverage$917.prototype.up = function () {
    return this.upper;
};
Scoverage$917.prototype.and = Scoverage$917.prototype.up;
module.exports = Scoverage$917;
Scoverage$917.prototype[util$915.camelize('report-directory')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'report-directory',
        value$922
    ]);
};
Scoverage$917.prototype[util$915.camelize('report-file')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'report-file',
        value$923
    ]);
};