'use strict';
var util$915 = require('../../../../misc/util.js');
var Report$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
Report$917.prototype.up = function () {
    return this.upper;
};
Report$917.prototype.and = Report$917.prototype.up;
module.exports = Report$917;
Report$917.prototype[util$915.camelize('jmeter')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'jmeter',
        value$922
    ]);
};
Report$917.prototype[util$915.camelize('junit')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'junit',
        value$923
    ]);
};