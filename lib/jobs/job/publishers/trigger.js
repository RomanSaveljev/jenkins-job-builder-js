'use strict';
var util$915 = require('../../../misc/util.js');
var Trigger$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
Trigger$917.prototype.up = function () {
    return this.upper;
};
Trigger$917.prototype.and = Trigger$917.prototype.up;
module.exports = Trigger$917;
Trigger$917.prototype[util$915.camelize('project')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'project',
        value$922
    ]);
};
Trigger$917.prototype[util$915.camelize('threshold')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'threshold',
        value$923
    ]);
};