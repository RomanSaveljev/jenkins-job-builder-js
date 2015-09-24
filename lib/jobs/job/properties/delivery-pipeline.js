'use strict';
var util$940 = require('../../../misc/util.js');
var DeliveryPipeline$942 = function (upper$945, obj$946) {
    this.upper = upper$945;
    this.obj = obj$946;
};
DeliveryPipeline$942.prototype.up = function () {
    return this.upper;
};
DeliveryPipeline$942.prototype.and = DeliveryPipeline$942.prototype.up;
module.exports = DeliveryPipeline$942;
DeliveryPipeline$942.prototype[util$940.camelize('stage')] = function (value$947) {
    return util$940.primitiveAccessor.apply(this, [
        'stage',
        value$947
    ]);
};
DeliveryPipeline$942.prototype[util$940.camelize('task')] = function (value$948) {
    return util$940.primitiveAccessor.apply(this, [
        'task',
        value$948
    ]);
};