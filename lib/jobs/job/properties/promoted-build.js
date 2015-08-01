'use strict';
var util$890 = require('../../../misc/util.js');
var PromotedBuild$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
PromotedBuild$892.prototype.up = function () {
    return this.upper;
};
PromotedBuild$892.prototype.and = PromotedBuild$892.prototype.up;
module.exports = PromotedBuild$892;
PromotedBuild$892.prototype[util$890.camelize('names')] = function (value$896) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'names',
        value$896
    ]);
};