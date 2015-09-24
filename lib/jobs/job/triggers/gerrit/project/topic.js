'use strict';
var util$915 = require('../../../../../misc/util.js');
var Topic$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
Topic$917.prototype.up = function () {
    return this.upper;
};
Topic$917.prototype.and = Topic$917.prototype.up;
module.exports = Topic$917;
Topic$917.prototype[util$915.camelize('compare-type')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'compare-type',
        value$922
    ]);
};
Topic$917.prototype[util$915.camelize('pattern')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'pattern',
        value$923
    ]);
};