'use strict';
var util$890 = require('../../../../misc/util.js');
var Target$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Target$892.prototype.up = function () {
    return this.upper;
};
Target$892.prototype.and = Target$892.prototype.up;
module.exports = Target$892;
Target$892.prototype[util$890.camelize('healthy')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'healthy',
        value$898
    ]);
};
Target$892.prototype[util$890.camelize('unhealthy')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'unhealthy',
        value$899
    ]);
};
Target$892.prototype[util$890.camelize('unstable')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'unstable',
        value$900
    ]);
};