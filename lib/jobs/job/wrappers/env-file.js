'use strict';
var util$915 = require('../../../misc/util.js');
var EnvFile$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
EnvFile$917.prototype.up = function () {
    return this.upper;
};
EnvFile$917.prototype.and = EnvFile$917.prototype.up;
module.exports = EnvFile$917;
EnvFile$917.prototype[util$915.camelize('properties-file')] = function (value$921) {
    return util$915.primitiveAccessor.apply(this, [
        'properties-file',
        value$921
    ]);
};