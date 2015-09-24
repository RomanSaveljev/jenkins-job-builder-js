'use strict';
var util$915 = require('../../../misc/util.js');
var CopyToSlave$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
CopyToSlave$917.prototype.up = function () {
    return this.upper;
};
CopyToSlave$917.prototype.and = CopyToSlave$917.prototype.up;
module.exports = CopyToSlave$917;
CopyToSlave$917.prototype[util$915.camelize('includes')] = function (value$925) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'includes',
        value$925
    ]);
};
CopyToSlave$917.prototype[util$915.camelize('excludes')] = function (value$926) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'excludes',
        value$926
    ]);
};
CopyToSlave$917.prototype[util$915.camelize('flatten')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'flatten',
        value$927
    ]);
};
CopyToSlave$917.prototype[util$915.camelize('relative-to')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'relative-to',
        value$928
    ]);
};
CopyToSlave$917.prototype[util$915.camelize('include-ant-excludes')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'include-ant-excludes',
        value$929
    ]);
};