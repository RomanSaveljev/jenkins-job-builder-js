'use strict';
var util$915 = require('../../../misc/util.js');
var CopyToMaster$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
CopyToMaster$917.prototype.up = function () {
    return this.upper;
};
CopyToMaster$917.prototype.and = CopyToMaster$917.prototype.up;
module.exports = CopyToMaster$917;
CopyToMaster$917.prototype[util$915.camelize('includes')] = function (value$923) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'includes',
        value$923
    ]);
};
CopyToMaster$917.prototype[util$915.camelize('excludes')] = function (value$924) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'excludes',
        value$924
    ]);
};
CopyToMaster$917.prototype[util$915.camelize('destination')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'destination',
        value$925
    ]);
};