'use strict';
var util$915 = require('../../../misc/util.js');
var Reverse$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
Reverse$917.prototype.up = function () {
    return this.upper;
};
Reverse$917.prototype.and = Reverse$917.prototype.up;
module.exports = Reverse$917;
Reverse$917.prototype[util$915.camelize('jobs')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'jobs',
        value$922
    ]);
};
Reverse$917.prototype[util$915.camelize('result')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'result',
        value$923
    ]);
};