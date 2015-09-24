'use strict';
var util$915 = require('../../../../misc/util.js');
var Submodule$917 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
Submodule$917.prototype.up = function () {
    return this.upper;
};
Submodule$917.prototype.and = Submodule$917.prototype.up;
module.exports = Submodule$917;
Submodule$917.prototype[util$915.camelize('disable')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'disable',
        value$924
    ]);
};
Submodule$917.prototype[util$915.camelize('recursive')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'recursive',
        value$925
    ]);
};
Submodule$917.prototype[util$915.camelize('tracking')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'tracking',
        value$926
    ]);
};
Submodule$917.prototype[util$915.camelize('timeout')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'timeout',
        value$927
    ]);
};