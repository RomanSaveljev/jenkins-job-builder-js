'use strict';
var util$890 = require('../../../../../misc/util.js');
var Topic$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Topic$892.prototype.up = function () {
    return this.upper;
};
Topic$892.prototype.and = Topic$892.prototype.up;
module.exports = Topic$892;
Topic$892.prototype[util$890.camelize('compare-type')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'compare-type',
        value$897
    ]);
};
Topic$892.prototype[util$890.camelize('pattern')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'pattern',
        value$898
    ]);
};