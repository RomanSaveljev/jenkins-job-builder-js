'use strict';
var util$890 = require('../../../misc/util.js');
var MatrixTieParent$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
MatrixTieParent$892.prototype.up = function () {
    return this.upper;
};
MatrixTieParent$892.prototype.and = MatrixTieParent$892.prototype.up;
module.exports = MatrixTieParent$892;
MatrixTieParent$892.prototype[util$890.camelize('node')] = function (value$896) {
    return util$890.primitiveAccessor.apply(this, [
        'node',
        value$896
    ]);
};