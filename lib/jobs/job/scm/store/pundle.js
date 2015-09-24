'use strict';
var util$915 = require('../../../../misc/util.js');
var Pundle$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
Pundle$917.prototype.up = function () {
    return this.upper;
};
Pundle$917.prototype.and = Pundle$917.prototype.up;
module.exports = Pundle$917;
Pundle$917.prototype[util$915.camelize('package')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'package',
        value$922
    ]);
};
Pundle$917.prototype[util$915.camelize('bundle')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'bundle',
        value$923
    ]);
};