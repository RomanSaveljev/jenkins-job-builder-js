'use strict';
var util$890 = require('../../../misc/util.js');
var EnvFile$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
EnvFile$892.prototype.up = function () {
    return this.upper;
};
EnvFile$892.prototype.and = EnvFile$892.prototype.up;
module.exports = EnvFile$892;
EnvFile$892.prototype[util$890.camelize('properties-file')] = function (value$896) {
    return util$890.primitiveAccessor.apply(this, [
        'properties-file',
        value$896
    ]);
};