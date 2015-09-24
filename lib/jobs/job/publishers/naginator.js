'use strict';
var util$915 = require('../../../misc/util.js');
var Naginator$917 = function (upper$924, obj$925) {
    this.upper = upper$924;
    this.obj = obj$925;
};
Naginator$917.prototype.up = function () {
    return this.upper;
};
Naginator$917.prototype.and = Naginator$917.prototype.up;
module.exports = Naginator$917;
Naginator$917.prototype[util$915.camelize('rerun-unstable-builds')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'rerun-unstable-builds',
        value$926
    ]);
};
Naginator$917.prototype[util$915.camelize('fixed-delay')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'fixed-delay',
        value$927
    ]);
};
Naginator$917.prototype[util$915.camelize('progressive-delay-increment')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'progressive-delay-increment',
        value$928
    ]);
};
Naginator$917.prototype[util$915.camelize('progressive-delay-maximum')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'progressive-delay-maximum',
        value$929
    ]);
};
Naginator$917.prototype[util$915.camelize('max-failed-builds')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'max-failed-builds',
        value$930
    ]);
};
Naginator$917.prototype[util$915.camelize('regular-expression')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'regular-expression',
        value$931
    ]);
};