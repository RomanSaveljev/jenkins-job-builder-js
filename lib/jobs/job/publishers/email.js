'use strict';
var util$915 = require('../../../misc/util.js');
var Email$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
Email$917.prototype.up = function () {
    return this.upper;
};
Email$917.prototype.and = Email$917.prototype.up;
module.exports = Email$917;
Email$917.prototype[util$915.camelize('recipients')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'recipients',
        value$923
    ]);
};
Email$917.prototype[util$915.camelize('notify-every-unstable-build')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'notify-every-unstable-build',
        value$924
    ]);
};
Email$917.prototype[util$915.camelize('send-to-individuals')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'send-to-individuals',
        value$925
    ]);
};