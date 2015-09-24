'use strict';
var util$915 = require('../../../misc/util.js');
var Exclusion$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
Exclusion$917.prototype.up = function () {
    return this.upper;
};
Exclusion$917.prototype.and = Exclusion$917.prototype.up;
module.exports = Exclusion$917;
Exclusion$917.prototype[util$915.camelize('resources')] = function (value$921) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'resources',
        value$921
    ]);
};