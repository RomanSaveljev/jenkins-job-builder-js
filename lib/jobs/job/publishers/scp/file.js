'use strict';
var util$915 = require('../../../../misc/util.js');
var File$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
File$917.prototype.up = function () {
    return this.upper;
};
File$917.prototype.and = File$917.prototype.up;
module.exports = File$917;
File$917.prototype[util$915.camelize('target')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'target',
        value$925
    ]);
};
File$917.prototype[util$915.camelize('source')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'source',
        value$926
    ]);
};
File$917.prototype[util$915.camelize('keep-hierarchy')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'keep-hierarchy',
        value$927
    ]);
};
File$917.prototype[util$915.camelize('copy-after-failure')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'copy-after-failure',
        value$928
    ]);
};
File$917.prototype[util$915.camelize('copy-console')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'copy-console',
        value$929
    ]);
};