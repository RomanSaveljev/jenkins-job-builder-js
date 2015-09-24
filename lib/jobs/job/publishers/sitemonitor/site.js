'use strict';
var util$915 = require('../../../../misc/util.js');
var Site$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
Site$917.prototype.up = function () {
    return this.upper;
};
Site$917.prototype.and = Site$917.prototype.up;
module.exports = Site$917;
Site$917.prototype[util$915.camelize('url')] = function (value$921) {
    return util$915.primitiveAccessor.apply(this, [
        'url',
        value$921
    ]);
};