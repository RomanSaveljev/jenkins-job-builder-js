'use strict';
var util$890 = require('../../../misc/util.js');
var RvmEnv$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
RvmEnv$892.prototype.up = function () {
    return this.upper;
};
RvmEnv$892.prototype.and = RvmEnv$892.prototype.up;
module.exports = RvmEnv$892;
RvmEnv$892.prototype[util$890.camelize('implementation')] = function (value$896) {
    return util$890.primitiveAccessor.apply(this, [
        'implementation',
        value$896
    ]);
};