'use strict';
var util$890 = require('../../../../misc/util.js');
var Remote$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Remote$892.prototype.up = function () {
    return this.upper;
};
Remote$892.prototype.and = Remote$892.prototype.up;
module.exports = Remote$892;
Remote$892.prototype[util$890.camelize('url')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'url',
        value$898
    ]);
};
Remote$892.prototype[util$890.camelize('refspec')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'refspec',
        value$899
    ]);
};
Remote$892.prototype[util$890.camelize('credentials-id')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'credentials-id',
        value$900
    ]);
};