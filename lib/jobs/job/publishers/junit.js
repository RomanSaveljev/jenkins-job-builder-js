'use strict';
var util$890 = require('../../../misc/util.js');
var Junit$892 = function (upper$898, obj$899) {
    this.upper = upper$898;
    this.obj = obj$899;
};
Junit$892.prototype.up = function () {
    return this.upper;
};
Junit$892.prototype.and = Junit$892.prototype.up;
module.exports = Junit$892;
Junit$892.prototype[util$890.camelize('results')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'results',
        value$900
    ]);
};
Junit$892.prototype[util$890.camelize('keep-long-stdio')] = function (value$901) {
    return util$890.primitiveAccessor.apply(this, [
        'keep-long-stdio',
        value$901
    ]);
};
Junit$892.prototype[util$890.camelize('test-stability')] = function (value$902) {
    return util$890.primitiveAccessor.apply(this, [
        'test-stability',
        value$902
    ]);
};
Junit$892.prototype[util$890.camelize('claim-build')] = function (value$903) {
    return util$890.primitiveAccessor.apply(this, [
        'claim-build',
        value$903
    ]);
};
Junit$892.prototype[util$890.camelize('measurement-plots')] = function (value$904) {
    return util$890.primitiveAccessor.apply(this, [
        'measurement-plots',
        value$904
    ]);
};