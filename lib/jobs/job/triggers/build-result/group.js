'use strict';
var util$915 = require('../../../../misc/util.js');
var Group$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
Group$917.prototype.up = function () {
    return this.upper;
};
Group$917.prototype.and = Group$917.prototype.up;
module.exports = Group$917;
Group$917.prototype[util$915.camelize('jobs')] = function (value$922) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'jobs',
        value$922
    ]);
};
Group$917.prototype[util$915.camelize('results')] = function (value$923) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'results',
        value$923
    ]);
};