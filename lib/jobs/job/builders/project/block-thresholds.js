'use strict';
var util$890 = require('../../../../misc/util.js');
var BlockThresholds$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
BlockThresholds$892.prototype.up = function () {
    return this.upper;
};
BlockThresholds$892.prototype.and = BlockThresholds$892.prototype.up;
module.exports = BlockThresholds$892;
BlockThresholds$892.prototype[util$890.camelize('build-step-failure-threshold')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'build-step-failure-threshold',
        value$898
    ]);
};
BlockThresholds$892.prototype[util$890.camelize('unstable-threshold')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'unstable-threshold',
        value$899
    ]);
};
BlockThresholds$892.prototype[util$890.camelize('failure-threshold')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'failure-threshold',
        value$900
    ]);
};