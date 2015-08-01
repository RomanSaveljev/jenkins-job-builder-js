'use strict';
var util$890 = require('../../../../misc/util.js');
var Target$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Target$892.prototype.up = function () {
    return this.upper;
};
Target$892.prototype.and = Target$892.prototype.up;
module.exports = Target$892;
Target$892.prototype[util$890.camelize('healthy')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'healthy',
        value$897
    ]);
};
Target$892.prototype[util$890.camelize('unhealthy')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'unhealthy',
        value$898
    ]);
};