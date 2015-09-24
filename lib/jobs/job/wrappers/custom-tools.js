'use strict';
var util$915 = require('../../../misc/util.js');
var CustomTools$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
CustomTools$917.prototype.up = function () {
    return this.upper;
};
CustomTools$917.prototype.and = CustomTools$917.prototype.up;
module.exports = CustomTools$917;
CustomTools$917.prototype[util$915.camelize('tools')] = function (value$923) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'tools',
        value$923
    ]);
};
CustomTools$917.prototype[util$915.camelize('skip-master-install')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'skip-master-install',
        value$924
    ]);
};
CustomTools$917.prototype[util$915.camelize('convert-homes-to-upper')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'convert-homes-to-upper',
        value$925
    ]);
};