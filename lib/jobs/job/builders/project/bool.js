'use strict';
var util$890 = require('../../../../misc/util.js');
var Bool$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Bool$892.prototype.up = function () {
    return this.upper;
};
Bool$892.prototype.and = Bool$892.prototype.up;
module.exports = Bool$892;
Bool$892.prototype[util$890.camelize('name')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$897
    ]);
};
Bool$892.prototype[util$890.camelize('value')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'value',
        value$898
    ]);
};