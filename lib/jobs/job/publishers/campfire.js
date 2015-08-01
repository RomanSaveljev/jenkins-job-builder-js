'use strict';
var util$890 = require('../../../misc/util.js');
var Campfire$892 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
Campfire$892.prototype.up = function () {
    return this.upper;
};
Campfire$892.prototype.and = Campfire$892.prototype.up;
module.exports = Campfire$892;
Campfire$892.prototype[util$890.camelize('subdomain')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'subdomain',
        value$899
    ]);
};
Campfire$892.prototype[util$890.camelize('token')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'token',
        value$900
    ]);
};
Campfire$892.prototype[util$890.camelize('ssl')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'ssl',
        value$901
    ]);
};
Campfire$892.prototype[util$890.camelize('room')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'room',
        value$902
    ]);
};