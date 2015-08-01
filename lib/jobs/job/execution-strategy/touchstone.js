'use strict';
var util$890 = require('../../../misc/util.js');
var Touchstone$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Touchstone$892.prototype.up = function () {
    return this.upper;
};
Touchstone$892.prototype.and = Touchstone$892.prototype.up;
module.exports = Touchstone$892;
Touchstone$892.prototype[util$890.camelize('expr')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'expr',
        value$897
    ]);
};
Touchstone$892.prototype[util$890.camelize('result')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'result',
        value$898
    ]);
};