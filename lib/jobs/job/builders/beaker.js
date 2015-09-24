'use strict';
var util$915 = require('../../../misc/util.js');
var Beaker$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
Beaker$917.prototype.up = function () {
    return this.upper;
};
Beaker$917.prototype.and = Beaker$917.prototype.up;
module.exports = Beaker$917;
Beaker$917.prototype[util$915.camelize('content')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'content',
        value$923
    ]);
};
Beaker$917.prototype[util$915.camelize('path')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'path',
        value$924
    ]);
};
Beaker$917.prototype[util$915.camelize('download-logs')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'download-logs',
        value$925
    ]);
};