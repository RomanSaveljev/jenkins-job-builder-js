'use strict';
var util$915 = require('../../../misc/util.js');
var MatrixCombinations$917 = function (upper$921, obj$922) {
    this.upper = upper$921;
    this.obj = obj$922;
};
MatrixCombinations$917.prototype.up = function () {
    return this.upper;
};
MatrixCombinations$917.prototype.and = MatrixCombinations$917.prototype.up;
module.exports = MatrixCombinations$917;
MatrixCombinations$917.prototype[util$915.camelize('name')] = function (value$923) {
    return util$915.primitiveAccessor.apply(this, [
        'name',
        value$923
    ]);
};
MatrixCombinations$917.prototype[util$915.camelize('description')] = function (value$924) {
    return util$915.primitiveAccessor.apply(this, [
        'description',
        value$924
    ]);
};
MatrixCombinations$917.prototype[util$915.camelize('filter')] = function (value$925) {
    return util$915.primitiveAccessor.apply(this, [
        'filter',
        value$925
    ]);
};