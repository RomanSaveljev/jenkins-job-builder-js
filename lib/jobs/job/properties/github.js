'use strict';
var util$915 = require('../../../misc/util.js');
var Github$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
Github$917.prototype.up = function () {
    return this.upper;
};
Github$917.prototype.and = Github$917.prototype.up;
module.exports = Github$917;
Github$917.prototype[util$915.camelize('url')] = function (value$921) {
    return util$915.primitiveAccessor.apply(this, [
        'url',
        value$921
    ]);
};