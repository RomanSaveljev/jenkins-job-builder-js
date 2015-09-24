'use strict';
var util$915 = require('../../../../misc/util.js');
var Display$916 = require('./graph/display.js');
var Graph$918 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
Graph$918.prototype.up = function () {
    return this.upper;
};
Graph$918.prototype.and = Graph$918.prototype.up;
module.exports = Graph$918;
Graph$918.prototype[util$915.camelize('xysize')] = function (value$923) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'xysize',
        value$923
    ]);
};
Graph$918.prototype[util$915.camelize('display')] = function (value$924) {
    return util$915.objectAccessor.apply(this, [
        'display',
        Display$916,
        value$924
    ]);
};