'use strict';
var util$890 = require('../../../misc/util.js');
var SlaveUtilization$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
SlaveUtilization$892.prototype.up = function () {
    return this.upper;
};
SlaveUtilization$892.prototype.and = SlaveUtilization$892.prototype.up;
module.exports = SlaveUtilization$892;
SlaveUtilization$892.prototype[util$890.camelize('slave-percentage')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'slave-percentage',
        value$897
    ]);
};
SlaveUtilization$892.prototype[util$890.camelize('single-instance-per-slave')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'single-instance-per-slave',
        value$898
    ]);
};