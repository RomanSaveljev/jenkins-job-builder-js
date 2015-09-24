'use strict';
var util$915 = require('../../../misc/util.js');
var Fitnesse$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
Fitnesse$917.prototype.up = function () {
    return this.upper;
};
Fitnesse$917.prototype.and = Fitnesse$917.prototype.up;
module.exports = Fitnesse$917;
Fitnesse$917.prototype[util$915.camelize('results')] = function (value$921) {
    return util$915.primitiveAccessor.apply(this, [
        'results',
        value$921
    ]);
};