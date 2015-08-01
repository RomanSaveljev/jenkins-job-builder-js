'use strict';
var util$890 = require('../../../misc/util.js');
var PortAllocator$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
PortAllocator$892.prototype.up = function () {
    return this.upper;
};
PortAllocator$892.prototype.and = PortAllocator$892.prototype.up;
module.exports = PortAllocator$892;
PortAllocator$892.prototype[util$890.camelize('names')] = function (value$896) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'names',
        value$896
    ]);
};