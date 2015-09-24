'use strict';
var util$915 = require('../../../../misc/util.js');
var ConfigFile$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
ConfigFile$917.prototype.up = function () {
    return this.upper;
};
ConfigFile$917.prototype.and = ConfigFile$917.prototype.up;
module.exports = ConfigFile$917;
ConfigFile$917.prototype[util$915.camelize('file-id')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'file-id',
        value$923
    ]);
};
ConfigFile$917.prototype[util$915.camelize('target')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'target',
        value$924
    ]);
};
ConfigFile$917.prototype[util$915.camelize('variable')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'variable',
        value$925
    ]);
};