'use strict';
var util$915 = require('../../../misc/util.js');
var RootModule$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
RootModule$917.prototype.up = function () {
    return this.upper;
};
RootModule$917.prototype.and = RootModule$917.prototype.up;
module.exports = RootModule$917;
RootModule$917.prototype[util$915.camelize('group-id')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'group-id',
        value$922
    ]);
};
RootModule$917.prototype[util$915.camelize('artifact-id')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'artifact-id',
        value$923
    ]);
};