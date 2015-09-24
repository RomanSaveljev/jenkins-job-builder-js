'use strict';
var util$915 = require('../../../misc/util.js');
var Ansicolor$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
Ansicolor$917.prototype.up = function () {
    return this.upper;
};
Ansicolor$917.prototype.and = Ansicolor$917.prototype.up;
module.exports = Ansicolor$917;
Ansicolor$917.prototype[util$915.camelize('colormap')] = function (value$921) {
    return util$915.primitiveAccessor.apply(this, [
        'colormap',
        value$921
    ]);
};