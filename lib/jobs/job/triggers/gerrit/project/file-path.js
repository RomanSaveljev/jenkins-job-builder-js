'use strict';
var util$890 = require('../../../../../misc/util.js');
var FilePath$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
FilePath$892.prototype.up = function () {
    return this.upper;
};
FilePath$892.prototype.and = FilePath$892.prototype.up;
module.exports = FilePath$892;
FilePath$892.prototype[util$890.camelize('compare-type')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'compare-type',
        value$897
    ]);
};
FilePath$892.prototype[util$890.camelize('pattern')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'pattern',
        value$898
    ]);
};