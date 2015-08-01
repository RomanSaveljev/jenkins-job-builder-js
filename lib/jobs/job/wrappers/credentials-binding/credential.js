'use strict';
var util$890 = require('../../../../misc/util.js');
var Credential$892 = function (upper$895, obj$896) {
    this.upper = upper$895;
    this.obj = obj$896;
};
Credential$892.prototype.up = function () {
    return this.upper;
};
Credential$892.prototype.and = Credential$892.prototype.up;
module.exports = Credential$892;
Credential$892.prototype[util$890.camelize('credential-id')] = function (value$897) {
    return util$890.primitiveAccessor.apply(this, [
        'credential-id',
        value$897
    ]);
};
Credential$892.prototype[util$890.camelize('variable')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'variable',
        value$898
    ]);
};