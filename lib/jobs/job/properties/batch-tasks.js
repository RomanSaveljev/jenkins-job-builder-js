'use strict';
var util$915 = require('../../../misc/util.js');
var BatchTasks$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
BatchTasks$917.prototype.up = function () {
    return this.upper;
};
BatchTasks$917.prototype.and = BatchTasks$917.prototype.up;
module.exports = BatchTasks$917;
BatchTasks$917.prototype[util$915.camelize('name')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$922
    ]);
};
BatchTasks$917.prototype[util$915.camelize('script')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'script',
        value$923
    ]);
};