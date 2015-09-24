'use strict';
var util$915 = require('../../../misc/util.js');
var PrioritySorter$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
PrioritySorter$917.prototype.up = function () {
    return this.upper;
};
PrioritySorter$917.prototype.and = PrioritySorter$917.prototype.up;
module.exports = PrioritySorter$917;
PrioritySorter$917.prototype[util$915.camelize('priority')] = function (value$921) {
    return util$915.primitiveAccessor.apply(this, [
        'priority',
        value$921
    ]);
};