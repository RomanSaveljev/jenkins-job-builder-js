'use strict';
var util$915 = require('../../../misc/util.js');
var BuildName$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
BuildName$917.prototype.up = function () {
    return this.upper;
};
BuildName$917.prototype.and = BuildName$917.prototype.up;
module.exports = BuildName$917;
BuildName$917.prototype[util$915.camelize('name')] = function (value$921) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$921
    ]);
};