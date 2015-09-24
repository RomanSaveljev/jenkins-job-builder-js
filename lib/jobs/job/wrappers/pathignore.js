'use strict';
var util$915 = require('../../../misc/util.js');
var PathIgnore$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
PathIgnore$917.prototype.up = function () {
    return this.upper;
};
PathIgnore$917.prototype.and = PathIgnore$917.prototype.up;
module.exports = PathIgnore$917;
PathIgnore$917.prototype[util$915.camelize('ignored')] = function (value$921) {
    return util$915.primitiveAccessor.apply(this, [
        'ignored',
        value$921
    ]);
};