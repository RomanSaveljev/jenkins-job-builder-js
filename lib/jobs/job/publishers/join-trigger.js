'use strict';
var util$915 = require('../../../misc/util.js');
var JoinTrigger$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
JoinTrigger$917.prototype.up = function () {
    return this.upper;
};
JoinTrigger$917.prototype.and = JoinTrigger$917.prototype.up;
module.exports = JoinTrigger$917;
JoinTrigger$917.prototype[util$915.camelize('projects')] = function (value$921) {
    return util$915.primitiveArrayAccessor.apply(this, [
        'projects',
        value$921
    ]);
};