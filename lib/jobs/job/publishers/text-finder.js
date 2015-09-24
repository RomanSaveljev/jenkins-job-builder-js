'use strict';
var util$915 = require('../../../misc/util.js');
var TextFinder$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
TextFinder$917.prototype.up = function () {
    return this.upper;
};
TextFinder$917.prototype.and = TextFinder$917.prototype.up;
module.exports = TextFinder$917;
TextFinder$917.prototype[util$915.camelize('regexp')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'regexp',
        value$925
    ]);
};
TextFinder$917.prototype[util$915.camelize('fileset')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'fileset',
        value$926
    ]);
};
TextFinder$917.prototype[util$915.camelize('also-check-console-output')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'also-check-console-output',
        value$927
    ]);
};
TextFinder$917.prototype[util$915.camelize('succeed-if-found')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'succeed-if-found',
        value$928
    ]);
};
TextFinder$917.prototype[util$915.camelize('unstable-if-found')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'unstable-if-found',
        value$929
    ]);
};