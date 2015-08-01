'use strict';
var util$890 = require('../../../misc/util.js');
var Exclusion$892 = function (upper$894, obj$895) {
    this.upper = upper$894;
    this.obj = obj$895;
};
Exclusion$892.prototype.up = function () {
    return this.upper;
};
Exclusion$892.prototype.and = Exclusion$892.prototype.up;
module.exports = Exclusion$892;
Exclusion$892.prototype[util$890.camelize('resources')] = function (value$896) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'resources',
        value$896
    ]);
};