'use strict';
var util$915 = require('../../../../misc/util.js');
var Instance$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
Instance$917.prototype.up = function () {
    return this.upper;
};
Instance$917.prototype.and = Instance$917.prototype.up;
module.exports = Instance$917;
Instance$917.prototype[util$915.camelize('cloud-name')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'cloud-name',
        value$923
    ]);
};
Instance$917.prototype[util$915.camelize('count')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'count',
        value$924
    ]);
};
Instance$917.prototype[util$915.camelize('stop-on-terminate')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'stop-on-terminate',
        value$925
    ]);
};