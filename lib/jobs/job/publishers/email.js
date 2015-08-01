'use strict';
var util$890 = require('../../../misc/util.js');
var Email$892 = function (upper$896, obj$897) {
    this.upper = upper$896;
    this.obj = obj$897;
};
Email$892.prototype.up = function () {
    return this.upper;
};
Email$892.prototype.and = Email$892.prototype.up;
module.exports = Email$892;
Email$892.prototype[util$890.camelize('recipients')] = function (value$898) {
    return util$890.primitiveAccessor.apply(this, [
        'recipients',
        value$898
    ]);
};
Email$892.prototype[util$890.camelize('notify-every-unstable-build')] = function (value$899) {
    return util$890.primitiveAccessor.apply(this, [
        'notify-every-unstable-build',
        value$899
    ]);
};
Email$892.prototype[util$890.camelize('send-to-individuals')] = function (value$900) {
    return util$890.primitiveAccessor.apply(this, [
        'send-to-individuals',
        value$900
    ]);
};