'use strict';
var util$915 = require('../../../misc/util.js');
var DeliveryPipeline$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
DeliveryPipeline$917.prototype.up = function () {
    return this.upper;
};
DeliveryPipeline$917.prototype.and = DeliveryPipeline$917.prototype.up;
module.exports = DeliveryPipeline$917;
DeliveryPipeline$917.prototype[util$915.camelize('stage')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'stage',
        value$922
    ]);
};
DeliveryPipeline$917.prototype[util$915.camelize('task')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'task',
        value$923
    ]);
};