'use strict';
var util$915 = require('../../../../../misc/util.js');
var CheckContent$917 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
CheckContent$917.prototype.up = function () {
    return this.upper;
};
CheckContent$917.prototype.and = CheckContent$917.prototype.up;
module.exports = CheckContent$917;
CheckContent$917.prototype[util$915.camelize('simple')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'simple',
        value$924
    ]);
};
CheckContent$917.prototype[util$915.camelize('json')] = function (value$925) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'json',
        value$925
    ]);
};
CheckContent$917.prototype[util$915.camelize('text')] = function (value$926) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'text',
        value$926
    ]);
};
CheckContent$917.prototype[util$915.camelize('xml')] = function (value$927) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'xml',
        value$927
    ]);
};