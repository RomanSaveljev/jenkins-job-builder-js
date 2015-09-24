'use strict';
var util$915 = require('../../../misc/util.js');
var Run$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
Run$917.prototype.up = function () {
    return this.upper;
};
Run$917.prototype.and = Run$917.prototype.up;
module.exports = Run$917;
Run$917.prototype[util$915.camelize('name')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$923
    ]);
};
Run$917.prototype[util$915.camelize('project-name')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'project-name',
        value$924
    ]);
};
Run$917.prototype[util$915.camelize('description')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'description',
        value$925
    ]);
};