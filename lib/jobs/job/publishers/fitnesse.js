'use strict';
var util$890 = require('../../../misc/util.js');
var Fitnesse$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
Fitnesse$892.prototype.up = function () {
    return this.upper;
};
Fitnesse$892.prototype.and = Fitnesse$892.prototype.up;
module.exports = Fitnesse$892;
Fitnesse$892.prototype[util$890.camelize('results')] = function (value$896) {
    return util$890.primitiveAccessor.apply(this, [
        'results',
        value$896
    ]);
};