'use strict';
var util$915 = require('../../../misc/util.js');
var EnvScript$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
EnvScript$917.prototype.up = function () {
    return this.upper;
};
EnvScript$917.prototype.and = EnvScript$917.prototype.up;
module.exports = EnvScript$917;
EnvScript$917.prototype[util$915.camelize('script-content')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'script-content',
        value$922
    ]);
};
EnvScript$917.prototype[util$915.camelize('only-run-on-parent')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'only-run-on-parent',
        value$923
    ]);
};