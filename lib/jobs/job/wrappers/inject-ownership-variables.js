'use strict';
var util$915 = require('../../../misc/util.js');
var InjectOwnershipVariables$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
InjectOwnershipVariables$917.prototype.up = function () {
    return this.upper;
};
InjectOwnershipVariables$917.prototype.and = InjectOwnershipVariables$917.prototype.up;
module.exports = InjectOwnershipVariables$917;
InjectOwnershipVariables$917.prototype[util$915.camelize('job-variables')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'job-variables',
        value$922
    ]);
};
InjectOwnershipVariables$917.prototype[util$915.camelize('node-variables')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'node-variables',
        value$923
    ]);
};