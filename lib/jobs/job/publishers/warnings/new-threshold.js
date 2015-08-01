'use strict';
var util$890 = require('../../../../misc/util.js');
var NewThreshold$892 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
NewThreshold$892.prototype.up = function () {
    return this.upper;
};
NewThreshold$892.prototype.and = NewThreshold$892.prototype.up;
module.exports = NewThreshold$892;
NewThreshold$892.prototype[util$890.camelize('new-all')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'new-all',
        value$899
    ]);
};
NewThreshold$892.prototype[util$890.camelize('new-high')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'new-high',
        value$900
    ]);
};
NewThreshold$892.prototype[util$890.camelize('new-normal')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'new-normal',
        value$901
    ]);
};
NewThreshold$892.prototype[util$890.camelize('new-low')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'new-low',
        value$902
    ]);
};