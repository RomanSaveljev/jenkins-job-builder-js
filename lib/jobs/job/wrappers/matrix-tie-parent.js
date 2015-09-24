'use strict';
var util$915 = require('../../../misc/util.js');
var MatrixTieParent$917 = function (upper$919, obj$920) {
    this.upper = upper$919;
    this.obj = obj$920;
};
MatrixTieParent$917.prototype.up = function () {
    return this.upper;
};
MatrixTieParent$917.prototype.and = MatrixTieParent$917.prototype.up;
module.exports = MatrixTieParent$917;
MatrixTieParent$917.prototype[util$915.camelize('node')] = function (value$921) {
    return util$915.primitiveAccessor.apply(this, [
        'node',
        value$921
    ]);
};