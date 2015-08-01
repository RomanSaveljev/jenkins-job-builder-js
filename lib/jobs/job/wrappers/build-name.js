'use strict';
var util$890 = require('../../../misc/util.js');
var BuildName$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
BuildName$892.prototype.up = function () {
    return this.upper;
};
BuildName$892.prototype.and = BuildName$892.prototype.up;
module.exports = BuildName$892;
BuildName$892.prototype[util$890.camelize('name')] = function (value$896) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$896
    ]);
};