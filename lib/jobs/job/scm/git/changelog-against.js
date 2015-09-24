'use strict';
var util$915 = require('../../../../misc/util.js');
var ChangeLogAgainst$917 = function (upper$920, obj$921) {
    this.upper = upper$920;
    this.obj = obj$921;
};
ChangeLogAgainst$917.prototype.up = function () {
    return this.upper;
};
ChangeLogAgainst$917.prototype.and = ChangeLogAgainst$917.prototype.up;
module.exports = ChangeLogAgainst$917;
ChangeLogAgainst$917.prototype[util$915.camelize('remote')] = function (value$922) {
    return util$915.primitiveAccessor.apply(this, [
        'remote',
        value$922
    ]);
};
ChangeLogAgainst$917.prototype[util$915.camelize('branch')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'branch',
        value$923
    ]);
};