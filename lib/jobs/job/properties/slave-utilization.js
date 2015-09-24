'use strict';
var util$915 = require('../../../misc/util.js');
var SlaveUtilization$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
SlaveUtilization$917.prototype.up = function () {
    return this.upper;
};
SlaveUtilization$917.prototype.and = SlaveUtilization$917.prototype.up;
module.exports = SlaveUtilization$917;
SlaveUtilization$917.prototype[util$915.camelize('slave-percentage')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'slave-percentage',
        value$922
    ]);
};
SlaveUtilization$917.prototype[util$915.camelize('single-instance-per-slave')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'single-instance-per-slave',
        value$923
    ]);
};