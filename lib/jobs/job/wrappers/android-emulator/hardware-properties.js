'use strict';
var util$890 = require('../../../../misc/util.js');
var HardwareProperties$892 = function (upper$893, obj$894) {
    this.upper = upper$893;
    this.obj = obj$894;
};
HardwareProperties$892.prototype.up = function () {
    return this.upper;
};
HardwareProperties$892.prototype.and = HardwareProperties$892.prototype.up;
module.exports = HardwareProperties$892;
HardwareProperties$892.prototype.set = util$890.generateNamedPrimitiveAccessor('obj');