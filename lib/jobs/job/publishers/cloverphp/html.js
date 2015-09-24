'use strict';
var util$915 = require('../../../../misc/util.js');
var Html$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
Html$917.prototype.up = function () {
    return this.upper;
};
Html$917.prototype.and = Html$917.prototype.up;
module.exports = Html$917;
Html$917.prototype[util$915.camelize('dir')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'dir',
        value$922
    ]);
};
Html$917.prototype[util$915.camelize('archive')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'archive',
        value$923
    ]);
};