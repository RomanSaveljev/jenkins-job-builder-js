'use strict';
var util$915 = require('../../../misc/util.js');
var Instances$916 = require('./jclouds/instances.js');
var JClouds$918 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
JClouds$918.prototype.up = function () {
    return this.upper;
};
JClouds$918.prototype.and = JClouds$918.prototype.up;
module.exports = JClouds$918;
JClouds$918.prototype[util$915.camelize('single-use')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'single-use',
        value$923
    ]);
};
JClouds$918.prototype[util$915.camelize('instances')] = function (value$924) {
    return util$915.customArrayAccessor.apply(this, [
        'instances',
        Instances$916,
        value$924
    ]);
};