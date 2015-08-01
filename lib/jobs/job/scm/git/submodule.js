'use strict';
var util$890 = require('../../../../misc/util.js');
var Submodule$892 = function (upper$897, obj$898) {
    this.upper = upper$897;
    this.obj = obj$898;
};
Submodule$892.prototype.up = function () {
    return this.upper;
};
Submodule$892.prototype.and = Submodule$892.prototype.up;
module.exports = Submodule$892;
Submodule$892.prototype[util$890.camelize('disable')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'disable',
        value$899
    ]);
};
Submodule$892.prototype[util$890.camelize('recursive')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'recursive',
        value$900
    ]);
};
Submodule$892.prototype[util$890.camelize('tracking')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'tracking',
        value$901
    ]);
};
Submodule$892.prototype[util$890.camelize('timeout')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'timeout',
        value$902
    ]);
};