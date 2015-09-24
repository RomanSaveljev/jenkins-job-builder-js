'use strict';
var util$915 = require('../../../misc/util.js');
var ValidatingString$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
ValidatingString$917.prototype.up = function () {
    return this.upper;
};
ValidatingString$917.prototype.and = ValidatingString$917.prototype.up;
module.exports = ValidatingString$917;
ValidatingString$917.prototype[util$915.camelize('name')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$925
    ]);
};
ValidatingString$917.prototype[util$915.camelize('default')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'default',
        value$926
    ]);
};
ValidatingString$917.prototype[util$915.camelize('description')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'description',
        value$927
    ]);
};
ValidatingString$917.prototype[util$915.camelize('regex')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'regex',
        value$928
    ]);
};
ValidatingString$917.prototype[util$915.camelize('msg')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'msg',
        value$929
    ]);
};