'use strict';
var util$890 = require('../../../../misc/util.js');
var Threshold$892 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
Threshold$892.prototype.up = function () {
    return this.upper;
};
Threshold$892.prototype.and = Threshold$892.prototype.up;
module.exports = Threshold$892;
Threshold$892.prototype[util$890.camelize('unstable')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'unstable',
        value$899
    ]);
};
Threshold$892.prototype[util$890.camelize('unstablenew')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'unstablenew',
        value$900
    ]);
};
Threshold$892.prototype[util$890.camelize('failure')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'failure',
        value$901
    ]);
};
Threshold$892.prototype[util$890.camelize('failurenew')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'failurenew',
        value$902
    ]);
};