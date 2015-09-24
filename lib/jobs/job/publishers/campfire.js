'use strict';
var util$915 = require('../../../misc/util.js');
var Campfire$917 = function (upper$922, obj$923) {
    this.upper = upper$922;
    this.obj = obj$923;
};
Campfire$917.prototype.up = function () {
    return this.upper;
};
Campfire$917.prototype.and = Campfire$917.prototype.up;
module.exports = Campfire$917;
Campfire$917.prototype[util$915.camelize('subdomain')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'subdomain',
        value$924
    ]);
};
Campfire$917.prototype[util$915.camelize('token')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'token',
        value$925
    ]);
};
Campfire$917.prototype[util$915.camelize('ssl')] = function (value$926) {
    return util$915.primitiveAccessor.apply(this, [
        'ssl',
        value$926
    ]);
};
Campfire$917.prototype[util$915.camelize('room')] = function (value$927) {
    return util$915.primitiveAccessor.apply(this, [
        'room',
        value$927
    ]);
};