'use strict';
var util$915 = require('../../../../misc/util.js');
var Threshold$917 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
Threshold$917.prototype.up = function () {
    return this.upper;
};
Threshold$917.prototype.and = Threshold$917.prototype.up;
module.exports = Threshold$917;
Threshold$917.prototype[util$915.camelize('unstable')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'unstable',
        value$924
    ]);
};
Threshold$917.prototype[util$915.camelize('unstablenew')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'unstablenew',
        value$925
    ]);
};
Threshold$917.prototype[util$915.camelize('failure')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'failure',
        value$926
    ]);
};
Threshold$917.prototype[util$915.camelize('failurenew')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'failurenew',
        value$927
    ]);
};