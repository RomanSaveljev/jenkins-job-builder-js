'use strict';
var util$915 = require('../../../../../misc/util.js');
var Severity$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
Severity$917.prototype.up = function () {
    return this.upper;
};
Severity$917.prototype.and = Severity$917.prototype.up;
module.exports = Severity$917;
Severity$917.prototype[util$915.camelize('error')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'error',
        value$923
    ]);
};
Severity$917.prototype[util$915.camelize('warning')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'warning',
        value$924
    ]);
};
Severity$917.prototype[util$915.camelize('information')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'information',
        value$925
    ]);
};