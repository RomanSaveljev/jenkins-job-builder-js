'use strict';
var util$890 = require('../../../misc/util.js');
var DeliveryPipeline$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
DeliveryPipeline$892.prototype.up = function () {
    return this.upper;
};
DeliveryPipeline$892.prototype.and = DeliveryPipeline$892.prototype.up;
module.exports = DeliveryPipeline$892;
DeliveryPipeline$892.prototype[util$890.camelize('version-template')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'version-template',
        value$897
    ]);
};
DeliveryPipeline$892.prototype[util$890.camelize('set-display-name')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'set-display-name',
        value$898
    ]);
};