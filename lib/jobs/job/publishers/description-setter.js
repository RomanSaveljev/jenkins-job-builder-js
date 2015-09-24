'use strict';
var util$915 = require('../../../misc/util.js');
var DescriptionSetter$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
DescriptionSetter$917.prototype.up = function () {
    return this.upper;
};
DescriptionSetter$917.prototype.and = DescriptionSetter$917.prototype.up;
module.exports = DescriptionSetter$917;
DescriptionSetter$917.prototype[util$915.camelize('regexp')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'regexp',
        value$925
    ]);
};
DescriptionSetter$917.prototype[util$915.camelize('regexp-for-failed')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'regexp-for-failed',
        value$926
    ]);
};
DescriptionSetter$917.prototype[util$915.camelize('description')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'description',
        value$927
    ]);
};
DescriptionSetter$917.prototype[util$915.camelize('description-for-failed')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'description-for-failed',
        value$928
    ]);
};
DescriptionSetter$917.prototype[util$915.camelize('set-for-matrix')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'set-for-matrix',
        value$929
    ]);
};