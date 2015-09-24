'use strict';
var util$915 = require('../../../misc/util.js');
var LeastLoad$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
LeastLoad$917.prototype.up = function () {
    return this.upper;
};
LeastLoad$917.prototype.and = LeastLoad$917.prototype.up;
module.exports = LeastLoad$917;
LeastLoad$917.prototype[util$915.camelize('disabled')] = function (value$921) {
    return util$915.primitiveAccessor.apply(this, [
        'disabled',
        value$921
    ]);
};