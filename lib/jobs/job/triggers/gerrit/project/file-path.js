'use strict';
var util$915 = require('../../../../../misc/util.js');
var FilePath$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
FilePath$917.prototype.up = function () {
    return this.upper;
};
FilePath$917.prototype.and = FilePath$917.prototype.up;
module.exports = FilePath$917;
FilePath$917.prototype[util$915.camelize('compare-type')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'compare-type',
        value$922
    ]);
};
FilePath$917.prototype[util$915.camelize('pattern')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'pattern',
        value$923
    ]);
};