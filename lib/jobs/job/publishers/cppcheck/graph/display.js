'use strict';
var util$890 = require('../../../../../misc/util.js');
var Display$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Display$892.prototype.up = function () {
    return this.upper;
};
Display$892.prototype.and = Display$892.prototype.up;
module.exports = Display$892;
Display$892.prototype[util$890.camelize('sum')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'sum',
        value$897
    ]);
};
Display$892.prototype[util$890.camelize('error')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'error',
        value$898
    ]);
};