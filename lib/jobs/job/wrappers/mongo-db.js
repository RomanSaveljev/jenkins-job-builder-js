'use strict';
var util$915 = require('../../../misc/util.js');
var MongoDb$917 = function (upper$923, obj$924) {
    this.upper = upper$923;
    this.obj = obj$924;
};
MongoDb$917.prototype.up = function () {
    return this.upper;
};
MongoDb$917.prototype.and = MongoDb$917.prototype.up;
module.exports = MongoDb$917;
MongoDb$917.prototype[util$915.camelize('name')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$925
    ]);
};
MongoDb$917.prototype[util$915.camelize('data-directory')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'data-directory',
        value$926
    ]);
};
MongoDb$917.prototype[util$915.camelize('port')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'port',
        value$927
    ]);
};
MongoDb$917.prototype[util$915.camelize('startup-params')] = function (value$928) {
    return util$915.primitiveAccessor.apply(this, [
        'startup-params',
        value$928
    ]);
};
MongoDb$917.prototype[util$915.camelize('start-timeout')] = function (value$929) {
    return util$915.primitiveAccessor.apply(this, [
        'start-timeout',
        value$929
    ]);
};