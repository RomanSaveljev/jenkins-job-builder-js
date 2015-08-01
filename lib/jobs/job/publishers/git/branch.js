'use strict';
var util$890 = require('../../../../misc/util.js');
var Branch$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Branch$892.prototype.up = function () {
    return this.upper;
};
Branch$892.prototype.and = Branch$892.prototype.up;
module.exports = Branch$892;
Branch$892.prototype[util$890.camelize('remote')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'remote',
        value$897
    ]);
};
Branch$892.prototype[util$890.camelize('name')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'name',
        value$898
    ]);
};