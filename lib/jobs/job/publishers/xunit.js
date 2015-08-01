'use strict';
var util$890 = require('../../../misc/util.js');
var Thresholds$891 = require('./xunit/thresholds.js');
var Types$892 = require('./xunit/types.js');
var Xunit$894 = function (upper$899, obj$900) {
    this.upper = upper$899;
    this.obj = obj$900;
};
Xunit$894.prototype.up = function () {
    return this.upper;
};
Xunit$894.prototype.and = Xunit$894.prototype.up;
module.exports = Xunit$894;
Xunit$894.prototype[util$890.camelize('thresholdmode')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'thresholdmode',
        value$901
    ]);
};
Xunit$894.prototype[util$890.camelize('thresholds')] = function (value$902) {
    return util$890.customArrayAccessor.apply(this, [
        'thresholds',
        Thresholds$891,
        value$902
    ]);
};
Xunit$894.prototype[util$890.camelize('test-time-margin')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'test-time-margin',
        value$903
    ]);
};
Xunit$894.prototype[util$890.camelize('types')] = function (value$904) {
    return util$890.customArrayAccessor.apply(this, [
        'types',
        Types$892,
        value$904
    ]);
};