'use strict';
var util$915 = require('../../../misc/util.js');
var PortAllocator$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
PortAllocator$917.prototype.up = function () {
    return this.upper;
};
PortAllocator$917.prototype.and = PortAllocator$917.prototype.up;
module.exports = PortAllocator$917;
PortAllocator$917.prototype[util$915.camelize('names')] = function (value$921) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'names',
        value$921
    ]);
};