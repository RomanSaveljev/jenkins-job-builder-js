'use strict';
var util$915 = require('../../../misc/util.js');
var Jclouds$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
Jclouds$917.prototype.up = function () {
    return this.upper;
};
Jclouds$917.prototype.and = Jclouds$917.prototype.up;
module.exports = Jclouds$917;
Jclouds$917.prototype[util$915.camelize('profile')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'profile',
        value$925
    ]);
};
Jclouds$917.prototype[util$915.camelize('files')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'files',
        value$926
    ]);
};
Jclouds$917.prototype[util$915.camelize('basedir')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'basedir',
        value$927
    ]);
};
Jclouds$917.prototype[util$915.camelize('container')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'container',
        value$928
    ]);
};
Jclouds$917.prototype[util$915.camelize('hierarchy')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'hierarchy',
        value$929
    ]);
};