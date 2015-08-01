'use strict';
var util$890 = require('../../../misc/util.js');
var Choice$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Choice$892.prototype.up = function () {
    return this.upper;
};
Choice$892.prototype.and = Choice$892.prototype.up;
module.exports = Choice$892;
Choice$892.prototype[util$890.camelize('name')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$898
    ]);
};
Choice$892.prototype[util$890.camelize('choices')] = function (value$899) {
    return util$890.primitiveArrayAccessor.apply(this, [
        'choices',
        value$899
    ]);
};
Choice$892.prototype[util$890.camelize('description')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'description',
        value$900
    ]);
};