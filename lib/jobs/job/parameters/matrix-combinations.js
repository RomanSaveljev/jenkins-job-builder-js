'use strict';
var util$890 = require('../../../misc/util.js');
var MatrixCombinations$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
MatrixCombinations$892.prototype.up = function () {
    return this.upper;
};
MatrixCombinations$892.prototype.and = MatrixCombinations$892.prototype.up;
module.exports = MatrixCombinations$892;
MatrixCombinations$892.prototype[util$890.camelize('name')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$898
    ]);
};
MatrixCombinations$892.prototype[util$890.camelize('description')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'description',
        value$899
    ]);
};
MatrixCombinations$892.prototype[util$890.camelize('filter')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'filter',
        value$900
    ]);
};