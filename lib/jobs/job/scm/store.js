'use strict';
var util$915 = require('../../../misc/util.js');
var Pundle$916 = require('./store/pundle.js');
var Store$918 = function (upper$925, obj$926) {
    this.upper = upper$925;
    this.obj = obj$926;
};
Store$918.prototype.up = function () {
    return this.upper;
};
Store$918.prototype.and = Store$918.prototype.up;
module.exports = Store$918;
Store$918.prototype[util$915.camelize('script')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'script',
        value$927
    ]);
};
Store$918.prototype[util$915.camelize('repository')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'repository',
        value$928
    ]);
};
Store$918.prototype[util$915.camelize('version-regex')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'version-regex',
        value$929
    ]);
};
Store$918.prototype[util$915.camelize('minimum-blessing')] = function (value$930) {
    return util$915.primitiveAccessor.apply(this, [
        'minimum-blessing',
        value$930
    ]);
};
Store$918.prototype[util$915.camelize('parcel-builder-file')] = function (value$931) {
    return util$915.primitiveAccessor.apply(this, [
        'parcel-builder-file',
        value$931
    ]);
};
Store$918.prototype[util$915.camelize('pundles')] = function (value$932) {
    return util$915.objectArrayAccessor.apply(this, [
        'pundles',
        Pundle$916,
        value$932
    ]);
};