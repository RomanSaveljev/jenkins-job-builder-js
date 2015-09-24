'use strict';
var util$915 = require('../../../misc/util.js');
var JobLogLogger$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
JobLogLogger$917.prototype.up = function () {
    return this.upper;
};
JobLogLogger$917.prototype.and = JobLogLogger$917.prototype.up;
module.exports = JobLogLogger$917;
JobLogLogger$917.prototype[util$915.camelize('suppress-empty')] = function (value$921) {
    return util$915.primitiveAccessor.apply(this, [
        'suppress-empty',
        value$921
    ]);
};