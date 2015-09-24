'use strict';
var util$915 = require('../../../misc/util.js');
var ShiningPanda$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
ShiningPanda$917.prototype.up = function () {
    return this.upper;
};
ShiningPanda$917.prototype.and = ShiningPanda$917.prototype.up;
module.exports = ShiningPanda$917;
ShiningPanda$917.prototype[util$915.camelize('html-reports-directory')] = function (value$921) {
    return util$915.primitiveAccessor.apply(this, [
        'html-reports-directory',
        value$921
    ]);
};