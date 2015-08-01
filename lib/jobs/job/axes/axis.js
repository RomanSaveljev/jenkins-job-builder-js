'use strict';
var util$890 = require('../../../misc/util.js');
var Axis$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Axis$892.prototype.up = function () {
    return this.upper;
};
Axis$892.prototype.and = Axis$892.prototype.up;
module.exports = Axis$892;
Axis$892.prototype[util$890.camelize('type')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'type',
        value$898
    ]);
};
Axis$892.prototype[util$890.camelize('name')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$899
    ]);
};
Axis$892.prototype[util$890.camelize('values')] = function (value$900) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'values',
        value$900
    ]);
};