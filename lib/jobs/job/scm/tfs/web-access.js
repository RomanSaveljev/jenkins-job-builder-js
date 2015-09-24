'use strict';
var util$915 = require('../../../../misc/util.js');
var WebAccess$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
WebAccess$917.prototype.up = function () {
    return this.upper;
};
WebAccess$917.prototype.and = WebAccess$917.prototype.up;
module.exports = WebAccess$917;
WebAccess$917.prototype[util$915.camelize('web-url')] = function (value$921) {
    return util$915.primitiveAccessor.apply(this, [
        'web-url',
        value$921
    ]);
};