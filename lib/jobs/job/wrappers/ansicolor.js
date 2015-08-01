'use strict';
var util$890 = require('../../../misc/util.js');
var Ansicolor$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
Ansicolor$892.prototype.up = function () {
    return this.upper;
};
Ansicolor$892.prototype.and = Ansicolor$892.prototype.up;
module.exports = Ansicolor$892;
Ansicolor$892.prototype[util$890.camelize('colormap')] = function (value$896) {
    return util$890.primitiveAccessor.apply(this, [
        'colormap',
        value$896
    ]);
};