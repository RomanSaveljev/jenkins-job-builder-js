'use strict';
var util$915 = require('../../../../misc/util.js');
var HardwareProperties$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
HardwareProperties$917.prototype.up = function () {
    return this.upper;
};
HardwareProperties$917.prototype.and = HardwareProperties$917.prototype.up;
module.exports = HardwareProperties$917;
HardwareProperties$917.prototype['define'] = function (name$921, value$922) {
    return util$915.primitiveAccessor.apply(this, [
        name$921,
        value$922
    ]);
};