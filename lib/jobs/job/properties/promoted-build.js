'use strict';
var util$915 = require('../../../misc/util.js');
var PromotedBuild$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
PromotedBuild$917.prototype.up = function () {
    return this.upper;
};
PromotedBuild$917.prototype.and = PromotedBuild$917.prototype.up;
module.exports = PromotedBuild$917;
PromotedBuild$917.prototype[util$915.camelize('names')] = function (value$921) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'names',
        value$921
    ]);
};