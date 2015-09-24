'use strict';
var util$915 = require('../../../../misc/util.js');
var Match$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
Match$917.prototype.up = function () {
    return this.upper;
};
Match$917.prototype.and = Match$917.prototype.up;
module.exports = Match$917;
Match$917.prototype[util$915.camelize('log-text')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'log-text',
        value$922
    ]);
};
Match$917.prototype[util$915.camelize('operator')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'operator',
        value$923
    ]);
};