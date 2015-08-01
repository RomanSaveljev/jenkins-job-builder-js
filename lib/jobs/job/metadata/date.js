'use strict';
var util$890 = require('../../../misc/util.js');
var DateObject$892 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
DateObject$892.prototype.up = function () {
    return this.upper;
};
DateObject$892.prototype.and = DateObject$892.prototype.up;
module.exports = DateObject$892;
DateObject$892.prototype[util$890.camelize('name')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$899
    ]);
};
DateObject$892.prototype[util$890.camelize('time')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'time',
        value$900
    ]);
};
DateObject$892.prototype[util$890.camelize('timezone')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'timezone',
        value$901
    ]);
};
DateObject$892.prototype[util$890.camelize('expose-to-env')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'expose-to-env',
        value$902
    ]);
};