'use strict';
var util$915 = require('../../../misc/util.js');
var RvmEnv$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
RvmEnv$917.prototype.up = function () {
    return this.upper;
};
RvmEnv$917.prototype.and = RvmEnv$917.prototype.up;
module.exports = RvmEnv$917;
RvmEnv$917.prototype[util$915.camelize('implementation')] = function (value$921) {
    return util$915.primitiveAccessor.apply(this, [
        'implementation',
        value$921
    ]);
};