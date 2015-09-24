'use strict';
var util$915 = require('../../../../../misc/util.js');
var Display$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
Display$917.prototype.up = function () {
    return this.upper;
};
Display$917.prototype.and = Display$917.prototype.up;
module.exports = Display$917;
Display$917.prototype[util$915.camelize('sum')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'sum',
        value$922
    ]);
};
Display$917.prototype[util$915.camelize('error')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'error',
        value$923
    ]);
};